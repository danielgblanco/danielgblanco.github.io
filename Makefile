# Activate the virtual environment and install dependencies
install:
	pip install -r requirements.txt

# Install the development dependencies
compile:
	pip-compile --upgrade setup.py

# Clean the virtual environment
serve:
	mkdocs serve
