# Define the virtual environment directory
VENV_DIR = venv

# Create a virtual environment
create-venv:
	python -m venv $(VENV_DIR)

# Activate the virtual environment and install dependencies
install:
	$(VENV_DIR)/bin/pip install -r requirements.txt

# Install the development dependencies
compile:
	$(VENV_DIR)/bin/pip-compile --upgrade setup.py

# Clean the virtual environment
clean:
	rm -rf $(VENV_DIR)

# Clean the virtual environment
serve:
	mkdocs serve
