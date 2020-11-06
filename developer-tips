# VTF Examples Repository

- [Making modifications](#Modify)
- [Support & contact information](#Support)

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

### Adding or modifying a collections

(See also: [Wax's Preparing your collection data page](https://minicomp.github.io/wiki/wax/preparing-your-collection-data/).)

To create a new collection, you will first create a .csv file of metadata for collection objects. The file should be created in the "\_data" directory. The file must contain a column called "pid" that lists unique identifiers for each collection object. Wax developers recommend avoiding Excel to create/edit this .csv file.

If you have raw image files for your collection objects, create a directory matching the exact name of the collection .csv file in the "\_data/raw_images" directory. In that collection directory, include raw image files for each pid, using the pid as the name of the file. An example can also have multiple raw files, in which case you can create a subdirectory with the same name as the pid.

### Running (raking) tasks to prepare site data/metadata

Wax, the underlying Jekyll framework powering this site, has a few additional ways of Doing Things that impact the process of modifying code. In particular, Wax requires that a user go through a set of **tasks** to transform data held in a .csv file into elements of the site such as metadata, images, search index, etc.

Wax describes a list of main tasks [in their documentation](https://minicomp.github.io/wiki/wax/running-the-tasks/).

Note: There is a [documented issue](https://github.com/minicomp/wax/issues/82) where Wax cannot process .csv files that begin with the invisible character <U+FEFF> (BOM). This may be more likely to occur when using Excel to generate or modify .csv files, so if you are having trouble getting Wax to read your .csv file in the rake step for building derivatives or pages, you may need to search for and replace this character or find some other way to clean your .csv ([example using vim](https://gist.github.com/szydan/b225749445b3602083ed)). **Windows users:** open the csv in Notepad and save as type:"All Files" with the original filename.csv, select Encoding:"UTF-8" and save to rewrite the original file.

We will add more information on what tasks to rake and in what order here. For now, please keep in mind that the last task, which **must come after raking the collections**, is to generate the search index.

To accomplish this, navigate to the `examples-repository` folder in your command line/terminal and run the command: `bundle exec rake wax:search main` This command will update the `search/index.json` file.

If you modify the metadata of an existing collection object (e.g., change a metadata value, add a column to existing rows), you cannot simply rerun the wax:pages task. The old pages will not be overwritten. You should first delete the .md files from the collection directory (that is, the top-level directory that starts with "\_" and ends with the name of the collection). Then you should be able to rerun the wax:pages task and have the new metadata show up. (Of course, you would also then update the search configuration to take into account any new fields and rerun the wax:search task.)

(Look for more updates here soon!)

## Support

Having trouble? The best way to reach out with technical concerns is to [lodge an issue on GitHub.](https://github.com/visualizingthefuture/examples-repository/issues?page=1&q=is%3Aissue+is%3Aopen/) You can also view our code [in our repository.](https://github.com/visualizingthefuture/examples-repository)
