# VST Examples Repository

- [Prerequisites](#Prerequisites)
- [Making modifications](#Modify)
- [Pages in this repository](#Pages)
- [Support & contact information](#Support)

## Prerequisites

You'll need `Ruby >= 2.4` with `bundler` installed. Check your versions with:

```bash
$ ruby -v
  ruby 2.4.5p335 (2018-10-18 revision 65137) [x86_64-darwin18]

$ bundler -v
  Bundler version 2.0.1
```

To process images, you will also need to have ImageMagick and Ghostscript installed and functional. You can check to see if you have ImageMagick by running:

```bash
$ convert -version
  Version: ImageMagick 6.9.9-20 Q16 x86_64 2017-10-15 http://www.imagemagick.org
  Copyright: (c) 1999-2017 ImageMagick Studio LLC
```

... and check Ghostscript with:
```bash
$ gs -version
  GPL Ghostscript 9.21 (2017-03-16)
  Copyright (C) 2017 Artifex Software, Inc.  All rights reserved.
```

### Downloading the demo

1. Change directory into where you'd like your site, e.g., your Desktop:
    ```sh
    cd ~/Desktop
    ```
2. Download the zip file from the [Visualizing the Future github repository](https://github.com/visualizingthefuture/examples-repository). The option to download the zip file should be on the button labeled "Clone or download." Your browser will save the file where it normally saves downloads.

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

## Modify 

### Method 1: Locally (Recommended)

To start hosting a local server, you'll want to run this line in the terminal: 

```markdown
bundle exec jekyll serve

```
This should provide you with a localhost URL. You can now make changes locally (using an IDE such as Visual Studio code). Changes will automatically update to the local server while you code. Once you're satisfied with the changes you made, push them all at once to the Github account through Github Desktop. 

### Method 2: From Github (Online)
You can also use the [editor on GitHub](https://github.com/Contrafabulists/think-tanks/edit/master/README.md) to maintain and preview the content for this website. This doesn't require installing Ruby or cloning the repository but it can take longer to write new lines of code. 

Whenever you "commit" a change, GitHub Pages will automatically run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site. 

### Running (raking) tasks to prepare site data/metadata

Wax, the underlying Jekyll framework powering this site, has a few additional ways of Doing Things that impact the process of modifying code. In particular, Wax requires that a user go through a set of **tasks** to transform data held in a .csv file into elements of the site such as metadata, images, search index, etc. 

Wax describes a list of main tasks [in their documentation](https://minicomp.github.io/wiki/wax/running-the-tasks/)

We will add more information on what tasks to rake and in what order here. For now, please keep in mind that the last task, which **must come after raking the collections**, is to generate the search index.

To accomplish this, navigate to the `examples-repository` folder in your command line/terminal and run the command: `bundle exec rake wax:search main` This command will update the `search/index.json` file.

(Look for more updates here soon!)

## Pages
All of the files that work on connection to the functioning of each page and what they do. 

### Main Page
Relevant files: 
```
- index.html
- img
    - logo_white.png
```

### User Guide
Relevant files: 
```
- pages
    - how_to.md
- img
    - how_to_photo.png
```

### Search
Relevant files: 
``` 
- config.yml 
- search folder
    - index.json
- pages 
    - search.md
- includes 
    - search_box.html
    - total_data.html
```


### Browse
Relevant files: 
``` 
- config.yml 
- _datasets
    - (relevant objects)
- _datavis
    - (relevant objects)
- pages 
    - datasets.html
    - datavis.html
- includes 
    - dataset_data.html
    - datavis_data.html
    - faceted_search_option.html
```

### Exhibits
Relevant files: 
```
- _exhibits 
    - a.md
    - b.md
```

## Support

Having trouble with Pages? Feel free to lodge a new issue or contact Amanda West and amawest@umich.edu. 

You can also try checking out the [documentation](https://help.github.com/categories/github-pages-basics/) or [contact Github support](https://github.com/contact). 

[![Gem Version](https://badge.fury.io/rb/wax_theme.svg)](https://badge.fury.io/rb/wax_tasks)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.org/mnyrop/wax.svg?branch=master)](https://travis-ci.org/minicomp/wax)
[![Depfu](https://badges.depfu.com/badges/9d4da973f2cd2680c11ca34738c2dfb2/overview.svg)](https://depfu.com/github/minicomp/wax?project_id=10550)
[![Gem Downloads](https://img.shields.io/gem/dt/wax_theme.svg?color=046d0b)](https://badge.fury.io/rb/wax_theme)
[![Join the chat at https://gitter.im/minicomp/wax](https://badges.gitter.im/minicomp/wax.svg)](https://gitter.im/minicomp/wax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![License](https://img.shields.io/github/license/minicomp/wax_tasks.svg?color=c6a1e0) 
