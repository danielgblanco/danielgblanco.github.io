// Get RGB color based on percentage from 0 (green) to 100 (red)
function getColorForPercentage(pct) {
    const r = Math.min(255, Math.floor(255 * (pct / 100)));
    const g = Math.min(255, Math.floor(255 * (1 - pct / 50)));
    return `rgb(${r},${g},50)`;
}

// Format time in days, hours, and minutes from a given number of minutes
function formatTime(minutes) {
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const mins = Math.floor(minutes % 60);
    return `${days}d ${hours}h ${mins}m`;
}

// Format tooltip titles
function tooltipTitles(tooltipItems) {
    const items = [];
    tooltipItems.forEach(element => {
        if (element.parsed.x !== null && element.parsed.x > 0) {
            items.push(formatTime(element.parsed.x));
        }
    });
    return items;
}

// Update the chart x-axis ticks based on input values
function formatTicks(value) {
    if (value < 60) {
        return Math.round(value) + 'm';
    } else if (value < 1440) {
        return Math.round(value / 60) + 'h';
    } else {
        return Math.round(value / 1440) + 'd';
    }
}

// Update the chart based on input values read from the form
function updateChart() {
    const sliBaseline = document.getElementById('sliBaseline').value / 100;
    const sloTarget = document.getElementById('sloTarget').value / 100;
    const sloWindow = document.getElementById('sloWindow').value * 24 * 60;
    const totalEvents = document.getElementById('avgEventsMinute').value * sloWindow;
    const maxEventsMinute = document.getElementById('maxEventsMinute').value;
    const errorPercentages = document.getElementById('errorPercentages').value.split(',').map(Number).filter(pct => !isNaN(pct) && pct > 0);

    // Calculate the effective error budget, i.e. the budget remaining after accounting for the baseline
    const badAtBaseline = totalEvents * (1 - sliBaseline);
    const errorBudget = totalEvents * (1 - sloTarget);
    const effectiveErrorBudget = errorBudget - badAtBaseline;

    // Calculate the effective error budget per minute
    const datasets = errorPercentages.map(pct => ({
        label: `${pct}% error`,
        data: [{x: 0, y: sliBaseline * 100}, {x: effectiveErrorBudget / maxEventsMinute / (pct / 100), y: 0}],
        borderColor: getColorForPercentage(pct),
        tension: 1
    }));

    if (window.sloChart) {
        sloChart.destroy();
    }

    window.sloChart = new Chart(document.getElementById('burnChart'), {
        type: 'line',
        data: {
            datasets: datasets
        },
        options: {
            scales: {
                x: {
                    type: 'logarithmic',
                    bounds: 'data',
                    max: sloWindow,
                    title: {
                        display: true,
                        text: 'Time to Break SLO'
                    },
                    ticks: {
                        callback: formatTicks,
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Budget remaining'
                    },
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title: tooltipTitles,
                    }
                }
            }
        }
    });
}

function initSLOChart() {
    const ctx = document.getElementById('burnChart');
    if (!ctx || typeof Chart === 'undefined') return

    // Initialize the chart with default values and set up event listeners
    document.getElementById('sliBaseline').addEventListener('input', updateChart);
    document.getElementById('sloTarget').addEventListener('input', updateChart);
    document.getElementById('sloWindow').addEventListener('input', updateChart);
    document.getElementById('avgEventsMinute').addEventListener('input', updateChart);
    document.getElementById('maxEventsMinute').addEventListener('input', updateChart);
    document.getElementById('errorPercentages').addEventListener('input', updateChart);

    updateChart();
}

// For MKDocs Material: re-run on every page navigation
if (typeof document$ !== 'undefined') {
    document$.subscribe(initSLOChart);
} else {
    document.addEventListener('DOMContentLoaded', initSLOChart);
}
