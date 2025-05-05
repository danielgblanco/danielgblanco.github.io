# danielgblanco.github.io

This is my personal website, built using [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Prerequisites

- Python 3.13 or higher
- `pip`
- `pip-tools`
- `make`

## Usage

### Install Dependencies

To install the required Python packages, run:

```bash
pip install -r requirements.txt
```

### Serve the Website Locally
To preview the website locally, use the following command:

```bash
make serve
```

This will start a local development server. Open your browser and navigate to http://127.0.0.1:8000 to view the site.

### Upgrade Python Packages

To upgrade all Python packages to their latest compatible versions, run:

```bash
make upgrade
```

This will use `pip-compile` to regenerate the `requirements.txt` file with updated dependencies.


## Deployment
The website is deployed automatically to GitHub Pages using GitHub Actions. Any changes pushed to the `main` branch will trigger the deployment workflow.


### License
This project is licensed under the MIT License. See the LICENSE file for details.