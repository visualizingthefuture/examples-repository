#  Teach Viz by Example (TVBE) repository

- [Summary](#Summary)
- [Installation](#Installation)
- [Documentation](#Documentation)
- [Helpful Tips](#helpful-tips)
- [Contributing - coming soon!](#contributing---coming-soon)
- [Support](#Support)

## Summary

The Teach Viz by Example (TVBE) repository is a space for the data visualization teaching community to find, share, and contribute exemplary data visualizations and visualization-ready datasets. The site builds on Minicomp’s [Wax](https://github.com/minicomp/wax) project, a lightweight framework for digital exhibits built on Jekyll and GitHub Pages. This project extends Wax by including additional processing scripts, page layouts, and includes.

## Installation

1. Change directory into where you'd like your site, e.g., your Desktop:
    ```sh
    cd ~/Desktop
    ```
2. Download the zip file from the [Visualizing the Future github repository](https://github.com/visualizingthefuture/examples-repository). The option to download the zip file should be on the button labeled "Code." Your browser will save the file where it normally saves downloads.

3. Move the zip file to the location you will use. In our example, to the Desktop.

4. Unzip the file. This can be done through your operating system graphic user interface, or in the terminal:
    ```sh
    unzip examples-repository.zip
    ```
    You can delete the zip file once you're done.


5. Go inside the project folder and install the gems:
    ```sh
    bundle install
    ```
6. To check, see if you can run the demo site:
    ```sh
    bundle exec jekyll serve
    ```
After the last step the terminal will provide you with a localhost URL for you to see your local copy of the site on your browser.

## Documentation

### Wax

For general information about dependencies and installation for Wax, see the [main Wax GitHub repository](https://github.com/minicomp/wax) and [wiki documentation](https://minicomp.github.io/wiki/wax/).

### Jekyll

[Jekyll’s documentation](https://jekyllrb.com/) includes information about setting up a local development environment for Jekyll site building.

### TVBE data processing scripts

The TVBE repository includes two data processing scripts: a tailored [Google Apps Script](https://github.com/visualizingthefuture/examples-repository/blob/master/data-tools/GoogleSheetEmbeddedScript.gs) that processes Google Form submissions into a series of separate sheets for separate collections, and a python script that processes the .csv files exported from Google Sheets into JSON metadata files read for Wax processing.

#### [Google Apps Script](https://github.com/visualizingthefuture/examples-repository/blob/master/data-tools/GoogleSheetEmbeddedScript.gs)

The examples hosted in this repository are submitted via a (currently in development) Google Form. The Google Form allows users to submit examples for our two primary collections (data visualizations and datasets) as well as other examples that may be related but fall outside those collections. The results from the Google Form must then be split into separate sheets for each collection. Additional processing helps prepare the data for Wax and adds support for multi-value fields, like “visualization type” and “audience level.” The script is specifically tailored to the fields and data values included in the Google Form for this project. This script is hosted in the Google Sheet produced by the Google Form and is run whenever a new example is submitted. The sheets produced by the script are then manually downloaded as .csv files, saved to the [data-tools](https://github.com/visualizingthefuture/examples-repository/tree/master/data-tools) directory, and processed with the python script to produce JSON.

#### [Parse Google Sheet python script](https://github.com/visualizingthefuture/examples-repository/blob/master/data-tools/parse_google_sheet.py)

The Parse Google Sheet python script uses a delimiter added by the Google Apps Script (a “|” character) to identify multi-value fields in the .csv file. The script converts the .csv to JSON, processing multi-value fields into JSON arrays instead of strings. The JSON output from this script should be saved to the `_data` directory in preparation for the `wax:pages` rake task.

## Helpful Tips

We have compiled a few [helpful tips for developers](https://github.com/visualizingthefuture/examples-repository/blob/master/developer-tips) on modifying Wax, Jekyll, and our scripts.

## Contributing - coming soon!

We are actively developing this resource and plan to release a workflow and documentation to facilitate user contributions in Spring 2021. 

## Support

The best way to reach out with technical concerns is to [lodge an issue on GitHub](https://github.com/visualizingthefuture/examples-repository/issues?page=1&q=is%3Aissue+is%3Aopen/). You can also view our code [in our repository](https://github.com/visualizingthefuture/examples-repository).

[![Gem Version](https://badge.fury.io/rb/wax_theme.svg)](https://badge.fury.io/rb/wax_tasks)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.org/mnyrop/wax.svg?branch=master)](https://travis-ci.org/minicomp/wax)
[![Depfu](https://badges.depfu.com/badges/9d4da973f2cd2680c11ca34738c2dfb2/overview.svg)](https://depfu.com/github/minicomp/wax?project_id=10550)
[![Gem Downloads](https://img.shields.io/gem/dt/wax_theme.svg?color=046d0b)](https://badge.fury.io/rb/wax_theme)
[![Join the chat at https://gitter.im/minicomp/wax](https://badges.gitter.im/minicomp/wax.svg)](https://gitter.im/minicomp/wax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![License](https://img.shields.io/github/license/minicomp/wax_tasks.svg?color=c6a1e0)
