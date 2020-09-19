function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Clean List Columns', functionName: 'cleanListColumns'}
  ];
  spreadsheet.addMenu('Teach Vis By Example', menuItems);

  cleanListColumns();
  //Note: can't run the refresh automatically on load;
  //have to run from menu or from script editor because of URL fetch
  //parseRAMLtriggered();
}

function cleanListColumns() {

  var cols_vals = {
    audience_level: ["Young beginner (pre-high school)","Adult beginner (high school and older)","Intermediate","Advanced"],
    audience_composition: ["General", "Librarian/information professional"],
    language_tool: ["R (e.g., ggplot2, leaflet)","Python (e.g., seaborn, bokeh)","Excel / PowerPoint / Word",
                    "Google Sheets / Slides / Docs","Tableau","JavaScript (e.g. d3, highcharts)","ArcGIS, QGIS"],
    data_type: ["1 or more categorical variables","1 or more numerical variables","1 or more date/time variables","1 or more geospatial variables"],
    vis_type: ["bar chart","line chart","pie chart or donut chart","scatter plot","map / spatial data","network","animation","small multiples","infographic","dashboard"]
  }

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName('Manually Cleaned Responses');
  sheet.activate();

  var submissions = sheet.getRange(2,1,sheet.getLastRow()-1,23).getValues();

  // audience_level is column 11
  // audience_composition is column 12
  // language_tool - 16
  // data_type - 20
  // vis_type - 22

  for (i = 0; i < submissions.length; i++) {
    var row = submissions[i];
    //console.log(row);

    var new_list = row[11];
    var options = cols_vals["audience_level"];
    for (j = 0; j < options.length; j++) {
      new_list = new_list.replace(options[j] + ", ", options[j] + "|");
    }
    row[11] =  new_list;


    var new_list = row[12];
    var options = cols_vals["audience_composition"];
    for (j = 0; j < options.length; j++) {
      new_list = new_list.replace(options[j] + ", ", options[j] + "|");
    }
    row[12] =  new_list;

    var new_list = row[16];
    var options = cols_vals["language_tool"];
    for (j = 0; j < options.length; j++) {
      new_list = new_list.replace(options[j] + ", ", options[j] + "|");
    }
    row[16] =  new_list;

    var new_list = row[20];
    var options = cols_vals["data_type"];
    for (j = 0; j < options.length; j++) {
      new_list = new_list.replace(options[j] + ", ", options[j] + "|");
    }
    row[20] =  new_list;

    var new_list = row[22];
    var options = cols_vals["vis_type"];
    for (j = 0; j < options.length; j++) {
      new_list = new_list.replace(options[j] + ", ", options[j] + "|");
    }
    row[22] =  new_list;

    submissions[i] = row;
  }




  var sheet = spreadsheet.getSheetByName('datavis');
  spreadsheet.deleteSheet(sheet);

  spreadsheet.insertSheet('datavis');
  var sheet = spreadsheet.getSheetByName('datavis');

  var headers = [
    'pid','approved_date','timestamp','label','creator','date_of_creation',
    'source_url','description','example_type','subject_area','original_context',
    'audience_level','audience_composition','pedagogical_description','ethical_quandries',
    'data_processing','language_tool','linked_code','linked_instr_mtl','linked_example',
    'data_type','geospatial_std','vis_type'
  ];
  sheet.getRange('A1:W1').setValues([headers]);

  var datavis_submissions = submissions.filter(example => (example[8] == 'data visualization' | example[8] == 'both dataset and data visualization') & example[0] != "");

  if (datavis_submissions.length > 0) {
    var vis_values = sheet.getRange(2,1,datavis_submissions.length,23);
    vis_values.setValues(datavis_submissions);
  }

  var sheet = spreadsheet.getSheetByName('datasets');
  spreadsheet.deleteSheet(sheet);

  spreadsheet.insertSheet('datasets');
  var sheet = spreadsheet.getSheetByName('datasets');

  sheet.getRange('A1:W1').setValues([headers]);

  var datasets_submissions = submissions.filter(example => (example[8] == 'dataset' | example[8] == 'both dataset and data visualization') & example[0] != "");

  if (datasets_submissions.length > 0) {
    var data_values = sheet.getRange(2,1,datasets_submissions.length,23);
    data_values.setValues(datasets_submissions);
  }

  var sheet = spreadsheet.getSheetByName('other');
  spreadsheet.deleteSheet(sheet);

  spreadsheet.insertSheet('other');
  var sheet = spreadsheet.getSheetByName('other');

  sheet.getRange('A1:W1').setValues([headers]);

  var other_submissions = submissions.filter(example => example[8] != 'data visualization' & example[8] != 'dataset' & example[0] != "");

  if (other_submissions.length > 0) {
    var other_values = sheet.getRange(2,1,other_submissions.length,23);
    other_values.setValues(other_submissions);
  }

  var sheet = spreadsheet.getSheetByName('Form Responses 1');
  sheet.activate();


}
