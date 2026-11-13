from setuptools import setup, find_packages

setup(
    name="danielgblanco.github.io",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "mkdocs-material~=9.8.1",
        "mkdocs-rss-plugin~=1.20.0",
        "mkdocs-material[imaging]~=9.8.1",
        "mkdocs-minify-plugin~=0.8.0",
    ],
    url="https://github.com/danielgblanco/danielgblanco.github.io",
    python_requires=">=3.8",
)
