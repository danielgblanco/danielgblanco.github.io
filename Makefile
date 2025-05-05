# Install requirements for serving the documentation
.PHONY: install
install:
	pip install -r requirements.txt

# Install requirements for CI checks and development
.PHONY: install
install-dev: install
	npm ci

# Compile dependencies into requirements.txt
.PHONY: upgrade
upgrade:
	pip-compile --upgrade setup.py
	npm install

# Serve the documentation
.PHONY: serve
serve:
	mkdocs serve

# Check spelling in Markdown files
.PHONY: check-spelling
check-spelling:
	npm run check:spelling
