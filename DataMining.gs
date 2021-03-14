/* Initial setup */
var reviewFormID         = "1L42oPGtpodgmw48FMs1DVdpgmLB9ISEMFZ-DuOu4HIc";
var dataExtractionFormID = "1Z9nFRtX6Ex1f8DLMplp9gAIRAsHuP8sHaH7TiGa9tu8";
var synapseSpreadsheetID = "19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A";
var EZProxyLink          = "https://www-ncbi-nlm-nih-gov.mutex.gmu.edu/pubmed/?term=";
var EZProxyName          = "GMU access"; 
function setup(){
  deletePreviousTriggers();
  addTrigger(FormApp.openById(reviewFormID));
}
/*
Goals
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
  .addItem('1. Check  Query', 'checkQuery')
  .addItem('2. Review References', 'reviewEvidenceWithoutForm')
  .addItem('3. Review Evidence', 'reviewEvidenceWithForm')
  .addItem('4. Extract Data', 'addSynapticData')
  .addSeparator()
  .addSubMenu(
    ui.createMenu('Rarely Used')
    .addItem('▶', 'typeForwardArrow')
    .addItem('Get Max', 'getMaxOfColumn')
    .addItem('Count Unique', 'countUnique')
    .addItem('Import Evidence', 'getTheLastFormResponse')
    .addItem('Insert Rows After', 'insertRow')
    .addItem('Semicolon to Note', 'semicolonToNote')
    )
  .addSeparator()
  .addItem('Resolve PMID', 'pubmedToCitation')
  .addItem('Jump to Row', 'jumpToRow')
  .addItem('𝙏𝙚𝙭𝙩 𝘾𝙡𝙚𝙖𝙣𝙚𝙧', 'showTextCleaner')
  .addItem('normalize','normalizeConductance')
  .addItem('End Of Line To Semicolon', 'endOfLineToSemicolon')
  .addItem('Display Value', 'displayValue')
  .addToUi();
};
//-------Evidence Review Section-------------------------------------------------------------------
function reviewEvidenceWithoutForm() {reviewEvidence(false)};
function reviewEvidenceWithForm() {reviewEvidence(true)};

var modalDialogHeight = 2160;
var modalDialogWidth  = 3840;
function reviewEvidence(displayForm) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var evidenceRange = getCheckActiveRange(ss.getActiveRange(),'Evidence');
  var output = HtmlService.createTemplate(include('showReferences')+include('ReviewEvidence'));
  if (evidenceRange) {
    // get needed data from spread sheets
    output.displayForm = displayForm;
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
    
    var covariatesSheet = ss.getSheetByName('Covariates');
    var firstColCovariatesValues = covariatesSheet.getRange('A:A').getValues();
    if (firstColCovariatesValues.reduce(to1D).indexOf(Number(evidence.PMID)) === -1) {
      var rowNum = getFirstEmptyRowByColumnArray(firstColCovariatesValues);
      covariatesSheet.getRange('A'+rowNum+':B'+rowNum).setValues([[evidence.PMID, pubmed(evidence.PMID)]]);
    }
      
    var covariates    = output.covariates     = sheetSamplingTool(covariatesSheet.getRange('A:A'), evidence.PMID);
    var myRefs        = output.myRefs         = sheetSamplingTool(ss.getSheetByName("My" ).getRange('A:A'),evidence.PMID,'RefID');
    var morphology    = output.morphology     = sheetSamplingTool(ss.getSheetByName("Mo" ).getRange('A:A'),evidence.PMID,'RefID');
    var markers       = output.markers        = sheetSamplingTool(ss.getSheetByName("Ma" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellEphys     = output.cellEphys      = sheetSamplingTool(ss.getSheetByName("CE" ).getRange('A:A'),evidence.PMID,'RefID');
    var firingPatterns= output.firingPatterns = sheetSamplingTool(ss.getSheetByName("FP" ).getRange('A:A'),evidence.PMID,'RefID');
    var connectivity  = output.connectivity   = sheetSamplingTool(ss.getSheetByName("Con").getRange('A:A'),evidence.PMID,'RefID');
    var covariatesRef = output.covariatesRef  = sheetSamplingTool(ss.getSheetByName("Cov").getRange('A:A'),evidence.PMID,'RefID');
    var dataRefs      = output.dataRefs       = sheetSamplingTool(ss.getSheetByName("Da" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON(synapseSpreadsheetID,'CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    if (myRefs && covariates && morphology && markers && cellEphys && firingPatterns && connectivity) {
      output.url = (displayForm)? updateReviewForm(evidence,covariates,myRefs,morphology,markers,cellEphys,firingPatterns,connectivity):''; //Logger.log(output.url);
      output.allRefs = mergeObjs(myRefs,morphology,markers,cellEphys,firingPatterns,connectivity,covariatesRef,dataRefs);
      output.imagesShown = [];
      SpreadsheetApp.getUi().showModalDialog(
        output.evaluate().setHeight(modalDialogHeight).setWidth(modalDialogWidth),//.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        'Review, Mean±SD|SEM[lb to ub|>lb|<ub](n=){Note:Note};...@RefID&RefID{Note:Note}'
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
    var output = HtmlService.createTemplate(include('showReferences')+include('SynapticData'));
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);
                        output.displayForm    = true;
    var dSec = evidence.dSec, dSecTypes = ['mPSP', 'mPSC', 'sPSP', 'sPSC', 'uPSP', 'uPSC', 'ePSP', 'ePSC'];
    while (dSec.split(/[\s,;]+/g).some(function(item){return (dSecTypes.indexOf(item) === -1)}))
      dSec = ui.prompt('Enter Data Type', 'Options: mPSP, mPSC, sPSP, sPSC, uPSP, uPSC, ePSP, or ePSC', ui.ButtonSet.OK).getResponseText();
    
    var covariates    = output.covariates     = sheetSamplingTool(ss.getSheetByName("Covariates").getRange('A:A'),evidence.PMID);
    
    var synRefs       = output.synRefs        = sheetSamplingTool(ss.getSheetByName("Da" ).getRange('A:A'),evidence.PMID,'RefID');
    var covRefs       = output.covRefs        = sheetSamplingTool(ss.getSheetByName("Cov").getRange('A:A'),evidence.PMID,'RefID');
    var myRefs        = output.myRefs         = sheetSamplingTool(ss.getSheetByName("My" ).getRange('A:A'),evidence.PMID,'RefID');
    
    var morphology    = output.morphology     = sheetSamplingTool(ss.getSheetByName("Mo" ).getRange('A:A'),evidence.PMID,'RefID');
    var markers       = output.markers        = sheetSamplingTool(ss.getSheetByName("Ma" ).getRange('A:A'),evidence.PMID,'RefID');
    var cellEphys     = output.cellEphys      = sheetSamplingTool(ss.getSheetByName("CE" ).getRange('A:A'),evidence.PMID,'RefID');
    var firingPatterns= output.firingPatterns = sheetSamplingTool(ss.getSheetByName("FP" ).getRange('A:A'),evidence.PMID,'RefID');
    var connectivity  = output.connectivity   = sheetSamplingTool(ss.getSheetByName("Con").getRange('A:A'),evidence.PMID,'RefID');
    
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON(synapseSpreadsheetID,'CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    if (covariates && synRefs && covRefs && myRefs && morphology && markers && cellEphys && firingPatterns && connectivity) {
      [url, dID] = updateSynDataForm(evidence,evidenceRange,covariates,covRefs,synRefs,synapticDataSheet,rowIndex,dSec); //Logger.log(output.url);
      output.url=url;
      output.evidence.dID = dID;
      output.imagesShown = [];
      output.allRefs = mergeObjs(synRefs,covRefs,myRefs,morphology,markers,cellEphys,firingPatterns,connectivity);
      SpreadsheetApp.getUi().showModalDialog(
        output.evaluate().setHeight(modalDialogHeight).setWidth(modalDialogWidth),
        'Data Extraction, Mean±SD|SEM[lb to ub|>lb|<ub](n=){Note:Note};...@RefID&RefID{Note:Note}'
      );
      return true;
    } else {
      ss.toast('Error in sheetSamplingTool');
      return null;
    }} else {
      ss.toast('Please goto evidence tab and select all rows that describe a single piece of evidence and try again');
      return null;
    }};
//-------Check Query--------------------------------------------------------------------------
function checkQuery(evidence,cellTypes) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var output = HtmlService.createTemplateFromFile("checkQuery");
  var evidenceRange = getCheckActiveRange(ss.getActiveRange(),"Evidence");
  if (evidenceRange) {
    // get needed data from spreadsheets
    var evidence      = output.evidence       = getEvidenceValues(evidenceRange);  //Object.keys(evidence).forEach(function(key) {Logger.log(key+" : "+evidence[key])});
    if (!evidence.Query) evidence.Query = output.evidence.Query = "Connection:(Presynaptic:(), Postsynaptic:())";
    var cellTypes     = output.cellTypes      = getSheetByIdAsJSON(synapseSpreadsheetID,'CellTypes').reduce(function(p,v){p[v.UID]=v; return p},{});
    var URL           = "http://hippocampome.org/php/search_engine_json.php?query_str="+
      evidence.Query.replace(/>/g,'%3E').replace(/</g,'%3C').replace(/\+/g,'%2B').replace(/"/g,'%22'); //Logger.log(URL);
    var response      = String(UrlFetchApp.fetch(URL));//Logger.log(response);
    if (response) {
      var errorRegExp   = /^[^{]+?(?=\{)/;
      var error         = output.error = (errorRegExp.test(response))? errorRegExp.exec(response)[0] : false;
        Logger.log(error)
        if (/\s*<pre>\s*?<\/pre>/.test(error)) 
          output.error = false;
      var fetchedConns  = null;
      try {
        var fetchedConns  = output.fetchedConns  = JSON.parse(response.replace(errorRegExp,''));
      } catch(e) {
        ss.toast('server returned an unparsable string\n'+
                 'server response: '+response+'\n'+
                 'error: '+e);
      }
      if (fetchedConns) {
        try {
          SpreadsheetApp.getUi().showModalDialog(
            output.evaluate().setHeight(modalDialogHeight).setWidth(modalDialogWidth),'Check Query Tool');
          return true;
        } catch(e) {
          ss.toast('Error in HTML service\n'+
                 'error: '+e);
        }
      } else if (response) {
        ss.toast('server returned \n'+response);
      } else {
        ss.toast('server returned an empty string');
      }
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
//    var lastrow = sheet.getLastRow();
//    var column = range.getLastColumn();
//    var cell = sheet.getRange(lastrow +1, column);
//    var cellValue = cell.getValue();
//    var columnName = range.getValue();
//    var sheetName = sheet.getSheetName();
//    var newMax = getMaxOf(sheetName,columnName)+1;
    
    var columnValues = range.getValues().map(to1DFast).map(function(v){
      return (typeof v === 'string' ? parseInt(v) : v)
    }).filter(onlyUniqueNumeric)
    var max  = Math.max.apply(null, columnValues)
    var dropedValues = rangeArray(1, max).filter(function(value){return (columnValues.indexOf(value) === -1)})
    SpreadsheetApp.getUi().alert('Max = '+max+
                                 (dropedValues.length > 0 ? '\nDroped values starting from 1 = '+dropedValues : ''))
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
function endOfLineToSemicolon() {
  var cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
  cell.setValue(String(cell.getValue()).split(/\s*\n+\s*/).join('; '));
}
function semicolonToNote() {
  var cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
  cell.setValue('{' + String(cell.getValue()).replace(/\s*[;,]+\s*/g,':') + '}');
}
function pubmedToCitation(){
  var cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
  SpreadsheetApp.getUi().alert(pubmed(String(cell.getValue()).replace(';','')))
}
function displayValue(){
  var cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
  SpreadsheetApp.getUi().alert(cell.getValue())
}
function normalizeConductance(){
  var cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
  cellStr = String(cell.getValue());
  cellObj = dataStringParser(cellStr);
  var ui = SpreadsheetApp.getUi();
  var targetValue = ui.prompt('Enter Target Value', ui.ButtonSet.OK).getResponseText();
  var currentValue = ui.prompt('Enter Current Value', ui.ButtonSet.OK).getResponseText();
  var norm = "*"+targetValue+"\/"+currentValue+",3)&\"";
  var output = 
      "=ROUND("+round(cellObj[0].values[0].v,3)+norm+
        "±\"&ROUND("+round(cellObj[0].values[0].s,3)+norm+
          " [\"&ROUND("+round(cellObj[0].values[0].ll,3)+norm+
            " to \"&ROUND("+round(cellObj[0].values[0].ul,3)+norm+
              "\] (n="+round(cellObj[0].values[0].n,0)+")"+
                "{"+(cellObj[0].values[0].note? cellObj[0].values[0].note+":" : '') +"Normalized}; "+
                  cellStr.replace(/{(.+?)}\s*(@|;)|\s*@/,function(fullMatch,p1,p2){
                    return "{" + (p1? p1+":" : "") + "Original}" + (p2?p2:'@')
                  })+"\""
                    
  cell.setValue(output);
}
//-------Common function ---------------------------------------------------------------------------
function getCheckActiveRange(activeRange,ActiveTabName,synapticDataSheet) {
  // check the active range with the user
  var response, ui=SpreadsheetApp.getUi();
  if (synapticDataSheet) {
    do {
      var templateDataID = ui.prompt(
        'Do you want to proceed?\n',
        '𝙊𝙋𝙏𝙄𝙊𝙉𝘼𝙇: 𝙚𝙣𝙩𝙚𝙧 𝙖 𝙥𝙧𝙚𝙫𝙞𝙤𝙪𝙨 𝙫𝙖𝙡𝙞𝙙 "𝙙𝙖𝙩𝙖 𝙄𝘿" 𝙛𝙤𝙧 𝙡𝙞𝙣𝙠𝙞𝙣𝙜\n\n'+
        
        '🅽🅾🆃🅴: proper linking needs visiting the linked form submenus\n'+
        '        then pressing 🄽🄴🅇🅃 (not 🄱🄰🄲🄺) to avoid losing data',
        ui.ButtonSet.OK_CANCEL);
      var rowIndex = ((response = templateDataID.getSelectedButton()) === ui.Button.OK && isNumeric(templateDataID.getResponseText())) ? 
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

function getFirstEmptyRowByColumnArray(values) {
  //var spr = SpreadsheetApp.getActiveSpreadsheet();
  //var column = spr.getRange(rangeA1Notation);
  //var values = column.getValues(); // get all data in one call
  var ct = 0;
  while ( values[ct] && values[ct][0] != "" ) {
    ct++;
  }
  return (ct+1);
}
