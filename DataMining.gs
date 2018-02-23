/* Goals
This addon will integrate google forms with google spreadsheets
to assist organizing the data extracted from the papers.

How to use:-------------------------------------------------
In the evidence tab of google sheets the user should select the data range 
containing the description of eletrophysiological evidence.
Then from the custon "Data Entry" menu select enter "Eneter Data".
*/
//-------Data Mining 
function onOpen() {//add sub-toolbar to the toolbar 
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Data Mining')
  .addItem('1. Review References', 'reviewEvidenceWithoutForm')
  .addItem('2. Review Evidence', 'reviewEvidenceWithForm')
  .addItem('3. Check  Query', 'checkQuery')
  .addItem('4. Extract Data', 'addSynapticData')
  .addSeparator()
  .addSubMenu(
    ui.createMenu('Rarely Used')
    .addItem('▶', 'typeForwardArrow')
    .addItem('Get Max', 'getMaxOfColumn')
    .addItem('Count Unique', 'countUnique')
    .addItem('Import Evidence', 'getTheLastFormResponse'))
  .addSeparator()
  .addItem('Insert Rows After', 'insertRow')
  .addItem('Jump to Row', 'jumpToRow')
  .addItem('𝙏𝙚𝙭𝙩 𝘾𝙡𝙚𝙖𝙣𝙚𝙧', 'showTextCleaner')
  .addToUi();
};
//-------Evidence Review Section-------------------------------------------------------------------
function reviewEvidenceWithoutForm() {reviewEvidence(false)};
function reviewEvidenceWithForm() {reviewEvidence(true)};

var modalDialogHeight = 2160;
var modalDialogWidth  = 3840;
function reviewEvidence(displayForm) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var evidenceRange = getCheckActiveRange(ss.getActiveRange(),"Evidence");
  var output = HtmlService.createTemplate(include('showReferences')+include('ReviewEvidence'));
  if (evidenceRange) {
    // get needed data from spread sheets
    output.displayForm = displayForm;
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
    var covariates    = output.covariates     = sheetSamplingTool(ss.getSheetByName("Covariates").getRange('A:A'),evidence.PMID);
    var myRefs        = output.myRefs         = sheetSamplingTool(ss.getSheetByName("My" ).getRange('A:A'),evidence.PMID,'RefID');
    var morphology    = output.morphology     = sheetSamplingTool(ss.getSheetByName("Mo" ).getRange('A:A'),evidence.PMID,'RefID');
    var markers       = output.markers        = sheetSamplingTool(ss.getSheetByName("Ma" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellEphys     = output.cellEphys      = sheetSamplingTool(ss.getSheetByName("CE" ).getRange('A:A'),evidence.PMID,'RefID');
    var firingPatterns= output.firingPatterns = sheetSamplingTool(ss.getSheetByName("FP" ).getRange('A:A'),evidence.PMID,'RefID');
    var connectivity  = output.connectivity   = sheetSamplingTool(ss.getSheetByName("Con").getRange('A:A'),evidence.PMID,'RefID');
    var covariatesRef = output.covariatesRef  = sheetSamplingTool(ss.getSheetByName("Cov").getRange('A:A'),evidence.PMID,'RefID');
    var dataRefs      = output.dataRefs       = sheetSamplingTool(ss.getSheetByName("Da" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON('19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A','CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    if (myRefs && covariates && morphology && markers && cellEphys && firingPatterns && connectivity) {
      output.url = (displayForm)? updateReviewForm(evidence,covariates,myRefs,morphology,markers,cellEphys,firingPatterns,connectivity):''; //Logger.log(output.url);
      output.allRefs = mergeObjs(myRefs,morphology,markers,cellEphys,firingPatterns,connectivity,covariatesRef,dataRefs);
      output.imagesShown = [];
      SpreadsheetApp.getUi().showModalDialog(
        output.evaluate().setHeight(modalDialogHeight).setWidth(modalDialogWidth), 
        'Review Tool, DATA Format:Mean±SD|SEM [lb to ub][>lb|<ub](n=){Note:Note};...@RefID&RefID{Note:Note}, ..., Stimulation Protocol;@\d&\d{Note:Note}'
      );
      return true;
    } else {
      ss.toast('Error in sheetSamplingTool');
      return null;
    }
  } else {
    ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
    return null;
  };
};
//-------Synaptic Data------------------------------------------------------------------------------
function addSynapticData() {
  var ss=SpreadsheetApp.getActiveSpreadsheet(),ui=SpreadsheetApp.getUi(),synapticDataSheet=ss.getSheetByName("SD"),evidenceRange,rowIndex;
  [evidenceRange,rowIndex] = getCheckActiveRange(ss.getActiveRange(),"Evidence",synapticDataSheet);
  if (evidenceRange) {
    // get needed data from spread sheets
    var output = HtmlService.createTemplate(include('showReferences')+include('SynapticData')); //HtmlService.createTemplateFromFile("SynapticData");
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
                        output.displayForm    = true;
    var dSec = evidence.dSec, dSecTypes = ['mPSP', 'mPSC', 'sPSP', 'sPSC', 'uPSP', 'uPSC', 'ePSP', 'ePSC'];
    while (dSec.split(/[\s,;]+/g).some(function(item){return (dSecTypes.indexOf(item) === -1)}))
      dSec = ui.prompt('Enter Data Type', 'Options: mPSP, mPSC, sPSP, sPSC, uPSP, uPSC, ePSP, or ePSC', ui.ButtonSet.OK).getResponseText();
    
    var covariates    = output.covariates     = sheetSamplingTool(ss.getSheetByName("Covariates").getRange('A:A'),evidence.PMID);
    var oldSynData    = output.oldSynData     = sheetSamplingTool(ss.getSheetByName("SynData"   ).getRange('A:A'),evidence.PMID,'Row');
    
    var synRefs       = output.synRefs        = sheetSamplingTool(ss.getSheetByName("Da" ).getRange('A:A'),evidence.PMID,'RefID');
    var covRefs       = output.covRefs        = sheetSamplingTool(ss.getSheetByName("Cov").getRange('A:A'),evidence.PMID,'RefID');
    var myRefs        = output.myRefs         = sheetSamplingTool(ss.getSheetByName("My" ).getRange('A:A'),evidence.PMID,'RefID');
    
    var morphology    = output.morphology     = sheetSamplingTool(ss.getSheetByName("Mo" ).getRange('A:A'),evidence.PMID,'RefID');
    var markers       = output.markers        = sheetSamplingTool(ss.getSheetByName("Ma" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellEphys     = output.cellEphys      = sheetSamplingTool(ss.getSheetByName("CE" ).getRange('A:A'),evidence.PMID,'RefID');
    var firingPatterns= output.firingPatterns = sheetSamplingTool(ss.getSheetByName("FP" ).getRange('A:A'),evidence.PMID,'RefID');
    var connectivity  = output.connectivity   = sheetSamplingTool(ss.getSheetByName("Con").getRange('A:A'),evidence.PMID,'RefID');
    
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON('19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A','CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    if (covariates && oldSynData && synRefs && covRefs && myRefs && morphology && markers && cellEphys && firingPatterns && connectivity) {
      output.url = updateSynDataForm(evidence,evidenceRange,covariates,covRefs,synRefs,synapticDataSheet,rowIndex,dSec); //Logger.log(output.url);
      output.imagesShown = [];
      output.allRefs = mergeObjs(synRefs,covRefs,myRefs,morphology,markers,cellEphys,firingPatterns,connectivity);
      SpreadsheetApp.getUi().showModalDialog(
        output.evaluate().setHeight(modalDialogHeight).setWidth(modalDialogWidth), 
        'Synaptic Data Extraction Tool, DATA Format:Mean±SD|SEM [lb to ub][>lb|<ub](n=){Note:Note};...@RefID&RefID{Note:Note}, ..., Stimulation Protocol;@\d&\d{Note:Note}'
      );
      return true;
    } else {
      ss.toast('Error in sheetSamplingTool');
      return null;
    }} else {
      ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
      return null;
    }};
//-------Check Search Query--------------------------------------------------------------------------
function checkQuery(evidence,cellTypes) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var output = HtmlService.createTemplateFromFile("checkQuery");
  var evidenceRange = getCheckActiveRange(ss.getActiveRange(),"Evidence");
  if (evidenceRange) {
    // get needed data from spreadsheets
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON('19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A','CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    var URL           = "http://hippocampome.org/csv2db/search_engine_json.php?query_str="+
      evidence.Query.replace(/>/g,'%3E').replace(/</g,'%3C').replace(/\+/g,'%2B').replace(/"/g,'%22'); //Logger.log(URL);.replace(/ /g,'%20')
    var response      = String(UrlFetchApp.fetch(URL));
    var errorRegExp   = /<br>.*<br>/;
    var error         = output.error = (errorRegExp.test(response))? errorRegExp.exec(response)[0] : false;
    var fetchedConns  = output.fetchedConns   = (response) ? JSON.parse(response.replace(errorRegExp,'')) : {};
    if (fetchedConns) {
      SpreadsheetApp.getUi().showModalDialog(output.evaluate().setHeight(modalDialogHeight).setWidth(modalDialogWidth),'Search Query Check Tool');
      return true;
    } else {
      ss.toast('Error in UrlFetchApp');
      return null;
    }
  } else {
    ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
    return null;
  };
};

function accessApi(url){
  return String(UrlFetchApp.fetch(url));
};

//-------Text Cleaner-------------------------------------------------------------------------------
function showTextCleaner(){
  var output = HtmlService.createTemplateFromFile("TextCleaner2");
  //SpreadsheetApp.getUi().showModalDialog(output.evaluate().setWidth(1450).setHeight(750), 'Evidence');
  SpreadsheetApp.getUi().showSidebar(output.evaluate().setWidth(300).setHeight(700));
}
//-------Jump To Row--------------------------------------------------------------------------------
function jumpToRow() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  var row = ui.prompt('Jump to Row','Row Number?', ui.ButtonSet.OK);
  if (row.getSelectedButton() === ui.Button.OK) {
    var rowIndex =  row.getResponseText();
    if (rowIndex !== '') 
      sheet.setActiveRange(sheet.getRange(rowIndex+':'+rowIndex));
  }
}
function insertRow() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  var row = ui.prompt('Insert Rows','How Many Rows?', ui.ButtonSet.OK);
  if (row.getSelectedButton() === ui.Button.OK) {
    var rowNumbers =  row.getResponseText();
    if (rowNumbers !== '') 
      sheet.insertRowsAfter(sheet.getActiveRange().getLastRow(),rowNumbers);
  }
}
//
function getMaxOfColumn(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getActiveRange();
  var ColumnNumber = range.getNumColumns();
  if( ColumnNumber > 1.0) {
    SpreadsheetApp.getUi().alert('Error.. Choose one column at a time');
    // an if statement that displays an error message if you choose more than one column.
  } else if (ColumnNumber === 1.0) {
    // runs only if you choose one column.
    var lastrow = sheet.getLastRow();
    var column = range.getLastColumn();
    var cell = sheet.getRange(lastrow +1, column);
    var cellValue = cell.getValue();
    var columnName = range.getValue();
    var sheetName = sheet.getSheetName();
    var newMax = getMaxOf(sheetName,columnName)+1;
    //maximum value allowed per sheet
    switch (sheetName) {
      case "Mo": 
        var maxAllowed = 2800000; 
        break;
      case "Ma": 
        var maxAllowed = 2900000;  
        break;
      case "CE": 
        var maxAllowed = 3000000;
        break;
      case "FP": 
        var maxAllowed = 3100000;
        break;
      case "Con": 
        var maxAllowed = 3200000;
        break;
      case "Da": 
        var maxAllowed = 3300000;
        break;
      default:
        var maxAllowed = NaN;
        break;
    }
    if (newMax > maxAllowed) {
      //if exceeding maximum value displays an error message 
      SpreadsheetApp.getUi().alert('Error! Exceeds Maximim Value');
    } else {
      //Display the new max value 
      cell.setValue (newMax);
      //add 1 to the active max value
      //if everything runs in the previous if statements, the new max displays in the cell   
    }
  }  
}
//--------------------------------------------------------------------------------------------------
function countUnique() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getActiveRange();
  var ColumnNumber = range.getNumColumns();
  if( ColumnNumber > 1.0) {
    SpreadsheetApp.getUi().alert('Error.. Choose one column at a time');
    // an if statement that displays an error message if you choose more than one column.
  } else if (ColumnNumber === 1.0) {
    SpreadsheetApp.getUi().alert(range.getValues().reduce(to1D).filter(onlyUnique).map(
      function(item){
        return (typeof item === 'string')? item.replace(/\D+/,'') : item;
      }).filter(isNumeric).filter(dash2null).length)
  }
}
function typeForwardArrow() {
  var cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
  cell.setValue(cell.getValue()+'▶');
}
//-------Common function ---------------------------------------------------------------------------
function getCheckActiveRange(activeRange,ActiveTabName,synapticDataSheet) {
  // check the active range with the user
  var response, ui=SpreadsheetApp.getUi();
  if (synapticDataSheet) {
    do {
      var templateDataID = ui.prompt(
        'Do you let me proceed without data linking?',
        
        '🅽🅾🆃🅴: proper linking needs visiting the linked form menus\n'+
        '        then pressing 🄽🄴🅇🅃 (not 🄱🄰🄲🄺) to avoid losing data\n\n'+
        
        '𝙄𝙛 𝙣𝙤, 𝙚𝙣𝙩𝙚𝙧 𝙖 𝙙𝙖𝙩𝙖 𝙄𝘿 𝙥𝙡𝙚𝙖𝙨𝙚',
        ui.ButtonSet.YES_NO_CANCEL);
      var rowIndex = ((response = templateDataID.getSelectedButton()) === ui.Button.NO) ? 
        synapticDataSheet.getRange('D2:D').getValues().map(to1DFast).indexOf(Number(templateDataID.getResponseText()))+2 : 0;
    } while (rowIndex === -1);
  }else{
    response = ui.alert(
      'The range you have selected:\n'+
      activeRange.getSheet().getName()+'!'+activeRange.getA1Notation(),
      ui.ButtonSet.OK_CANCEL);
  }
  // Process the user's response.
  if (response !== ui.Button.CANCEL && response !== ui.Button.CLOSE && ActiveTabName === activeRange.getSheet().getName()) {
    return (synapticDataSheet)? [activeRange,rowIndex] : activeRange;
  } else {
    Logger.log('response:'+response)
    Logger.log('ActiveTabName:'+ActiveTabName+'=?'+activeRange.getSheet().getName())
    return (synapticDataSheet)? [null,null] : null;
  };
};
function include(filename) {
  return HtmlService.createTemplateFromFile(filename).getRawContent();
}