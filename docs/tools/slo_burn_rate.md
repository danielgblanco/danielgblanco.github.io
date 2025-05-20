# How long will your error budget last?

The following chart can help visualise how long it would take for a given SLO to break. As regressions can occur at the
worst possible time, it considers different error ratios at the expected maximum throughput. This can aid those setting
an SLO target to understand resiliency requirements for their system in order to help them avoid regressions that are
of large (i.e. high error rate) or extended (i.e. longer in duration) impact.

<div class="slo-container">
    <div class="slo-inputs-row">
        <div class="slo-inputs-col">
            <div class="slo-input-group">
                <label for="sliBaseline" title="The current observed SLI (Service Level Indicator) value, as a percentage.">SLI Baseline (%)</label>
                <input type="number" id="sliBaseline" name="sliBaseline" min="1" max="100" value="99.99" step="0.1" title="The current observed SLI (Service Level Indicator) value, as a percentage.">
            </div>
            <div class="slo-input-group">
                <label for="sloTarget" title="The desired SLO (Service Level Objective) target, as a percentage.">SLO Target (%)</label>
                <input type="number" id="sloTarget" name="sloTarget" min="1" max="100" value="99" step="0.1" title="The desired SLO (Service Level Objective) target, as a percentage.">
            </div>
            <div class="slo-input-group">
                <label for="sloWindow" title="The time window (in days) over which the SLO is measured.">SLO Window (Days)</label>
                <input type="number" id="sloWindow" name="sloWindow" min="1" value="28" title="The time window (in days) over which the SLO is measured.">
            </div>
        </div>
        <div class="slo-inputs-col">
            <div class="slo-input-group">
                <label for="avgEventsMinute" title="The average number of events per minute handled by the system.">Events/Minute (Avg)</label>
                <input type="number" id="avgEventsMinute" name="avgEventsMinute" min="0" value="1000" title="The average number of events per minute handled by the system.">
            </div>
            <div class="slo-input-group">
                <label for="maxEventsMinute" title="The maximum number of events per minute the system is expected to handle during peak load.">Events/Minute (Max)</label>
                <input type="number" id="maxEventsMinute" name="maxEventsMinute" min="0" value="2000" title="The maximum number of events per minute the system is expected to handle during peak load.">
            </div>
            <div class="slo-input-group">
                <label for="errorPercentages" title="Comma-separated list of error percentages to simulate different failure scenarios.">Error (%)</label>
                <input type="text" id="errorPercentages" name="errorPercentages" value="100, 50, 25, 10, 1" title="Comma-separated list of error percentages to simulate different failure scenarios.">
            </div>
        </div>
    </div>
    <div class="slo-chart-wrapper">
        <canvas id="burnChart"></canvas>
    </div>
</div>
