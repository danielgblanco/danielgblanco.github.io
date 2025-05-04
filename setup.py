from setuptools import setup, find_packages

setup(
    name="danielgblanco.github.io",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "mkdocs-material~=9.6.12",
        "mkdocs-rss-plugin~=1.17.1",
        "mkdocs-material[imaging]~=9.6.12",
    ],
    url="https://github.com/danielgblanco/danielgblanco.github.io",
    python_requires=">=3.8",
)
