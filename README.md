# www.dangb.me

This is my personal website, built using [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Prerequisites

- Python 3.13 or higher
- Node 22 or higher
- `pip`
- `pip-tools`
- `make`

## Installation

### Install Dependencies

To install the required Python packages to serve the documentation via MKDocs, run:

```bash
make install
```

If you require packages needed for development, such as `cspell`, run:

```bash
make install-dev
```

## Serve the Website Locally
To preview the website locally, use the following command:

```bash
make serve
```

This will start a local development server. Open your browser and navigate to http://127.0.0.1:8000 to view the site.

## Development

### Upgrade Python Packages

To upgrade all Python packages to their latest compatible versions, run:

```bash
make upgrade
```

This will use `pip-compile` to regenerate the `requirements.txt` file with updated dependencies.

### Linting
To check for spelling errors in the documentation, run:

```bash
make check-spelling
```

## Deployment
The website is deployed automatically to GitHub Pages using GitHub Actions. Any changes pushed to the `main` branch will trigger the deployment workflow.


### License
This project is licensed under the MIT License. See the LICENSE file for details.