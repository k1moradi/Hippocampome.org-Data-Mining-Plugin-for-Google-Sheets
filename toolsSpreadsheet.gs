function test() {
  Logger.log([1,'',1,2,2,,null].filter(onlyUniqueNonNull))
  //Logger.log(Utilities.base64Encode(DriveApp.getFilesByName("Canto-Witter-2011-1277-Hippocampus_MEC-Fig11A_No3.jpeg").next().getBlob().getDataAsString()));
  //while (fileIterator) output.push(fileIterator.next().getId())())
  //Logger.log(UrlFetchApp.fetch("http://hippocampome.org/csv2db/search_engine_json.php?query_str=Connection:(Presynaptic:(Neurotransmitter:Excitatory AND Morphology:(Dendrites:EC:22??00 AND Soma:EC:?1???? AND Axons:EC:??1???) AND FiringPattern:D+:RASP.NASP NOT Markers:(D-:CB OR I-:CB OR D-:RLN OR I-:RLN)), Postsynaptic:(Morphology:(Dendrites:EC:22??00 AND Soma:EC:?1???? AND Axons:EC:??1???) AND FiringPattern:D+:ASP. NOT Markers:(D-:CB OR I-:CB)))").getResponseCode());
}

function getMaxOf(sheetName,columnName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var columnNum = (sheet.getRange('1:1').getValues()[0].indexOf(columnName))+1;
  //               rowStarts,columnNum,rowsEnds
  var max = sheet.getRange(1,columnNum,sheet.getLastRow()).getValues().reduce(
    function(p,v){
      if (typeof v[0] === 'string' || v[0] instanceof String)
        v[0] = Math.max.apply(null, v[0].split(/\s*[;,]\s*/).filter(isNumeric));
      if (isNumeric(v[0]) && v[0]>p) p=v[0];
      return p;
    },Number.NEGATIVE_INFINITY);
  return isNumeric(max) ? max: 0
}

function getEvidenceValues(activeRange) {
  var values  = activeRange.getValues().reduce(to1D);
  var headers = activeRange.getSheet().getRange('1:1').getValues()[0];
  var notes   = activeRange.getSheet().getRange('1:1').getNotes()[0];
  var rawEvidenceObj = headers.reduce(function(p,v,i){p[v]=values[i]; return p},{});
  var columnNumObj   = headers.reduce(function(p,v,i){p[v]=i        ; return p},{});
  var columnNotesObj = notes.reduce(function(p,v,i){p[headers[i]]=v ; return p},{});
  var Automation = rawEvidenceObj.Automation.split(/[)]\s*[,]\s*Postsynaptic:[(]/g);
  var refIDsplitterRegex = /(?:<\/?br>)*[,; ]+(?:<\/?br>)*/g;
  
  var eIDprevious = (activeRange.getRow() < 3)? 0 : Number(activeRange.offset(-2, columnNumObj.eID, 1, 1).getValue());

  var ID = rawEvidenceObj.eID;
  if (isNumeric(eIDprevious) && isNumeric(ID)) {
    if (ID === eIDprevious)
      ID = getMaxOf('Evidence','eID')+1;
  } else if (!isNumeric(ID)) {
    ID = getMaxOf('Evidence','eID')+1;
  }

  var obj = {                //offset(rowOffset, columnOffset     , numRows                 , numColumns)
    PConnections         : activeRange.offset(0, columnNumObj.sUID, activeRange.getNumRows(), 4).getValues().map(function(v){return v[1]+'▶'+v[3]}),
    PConnectionsUIDs     : activeRange.offset(0, columnNumObj.sUID, activeRange.getNumRows(), 4).getValues().reduce(
      function(p,v,i){
        if (isNumeric(Number(v[0])) && isNumeric(Number(v[2]))) {
          p[i]={source_id      : String(v[0]), 
                destination_id : String(v[2])};
        }
        return p;
      },{}),
    sUID                 : activeRange.offset(0, columnNumObj.sUID, activeRange.getNumRows(), 1).getValues().reduce(to1D).filter(onlyUnique),
    tUID                 : activeRange.offset(0, columnNumObj.tUID, activeRange.getNumRows(), 1).getValues().reduce(to1D).filter(onlyUnique),
    PMID                 : String(rawEvidenceObj.PMID).split(/\s*[,;]+\s*/g).filter(Null),//convert string to array at , or ; -> filter empty array items)
    //(Math.max.apply(null,activeRange.getSheet().getRange(1,columnNumObj.eID+1,activeRange.getSheet().getLastRow()).getValues().filter(isNumeric))+1)
    eID                  : ID,
    MicroscopyCType      : rawEvidenceObj.MicroscopyCType,
    ePhysCType           : rawEvidenceObj.ePhysCType,
    Description          : (typeof rawEvidenceObj.Description === 'string')? rawEvidenceObj.Description.replace(/<br>/g,'<br>\n') : rawEvidenceObj.Description,
    Interpretation       : rawEvidenceObj.Interpretation,
    Assumptions          : rawEvidenceObj.Assumptions,
    Query                : rawEvidenceObj.Automation,
    AutomationPre        : (typeof Automation[0] === 'string') ? Automation[0].replace(/Connection\s*:\s*[(]\s*Presynaptic\s*:\s*[(]\s*/g, '') : '',
    AutomationPost       : (typeof Automation[1] === 'string') ? Automation[1].replace(/[)]{2}\s*$/g,'') : '',
    Confidence           : activeRange.offset(0,columnNumObj.Confidence,activeRange.getNumRows(),1).getValues().reduce(to1D).map(function(v){return(v==='High' || v ==='Direct')?v:'Low'}),
    Amplitude            : rawEvidenceObj.Amplitude,
    Kinetics             : rawEvidenceObj.Kinetics,
    ST_Plasticity        : rawEvidenceObj.ST_Plasticity,
    LT_Plasticity        : rawEvidenceObj.LT_Plasticity,
    DataLocation         : rawEvidenceObj.DataLocation,
    dID                  : rawEvidenceObj.dID,
    dSec                 : rawEvidenceObj.dSec,
    DataIDs              : String(rawEvidenceObj.Data).split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    CovariatesIDs        : String(rawEvidenceObj.Covariates).split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    MorphologyIDsPre     : String(rawEvidenceObj.Morphology).split(' Postsynaptic:')[0].split('Presynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    MorphologyIDsPost    : String(rawEvidenceObj.Morphology).split('Postsynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    MarkersIDsPre        : String(rawEvidenceObj.Markers).split(' Postsynaptic:')[0].split('Presynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    MarkersIDsPost       : String(rawEvidenceObj.Markers).split('Postsynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    CellePhysIDsPre      : String(rawEvidenceObj.CellEphys).split(' Postsynaptic:')[0].split('Presynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    CellePhysIDsPost     : String(rawEvidenceObj.CellEphys).split('Postsynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    FiringPatternIDsPre  : String(rawEvidenceObj.FiringPatterns).split(' Postsynaptic:')[0].split('Presynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    FiringPatternIDsPost : String(rawEvidenceObj.FiringPatterns).split('Postsynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    ConnectivityIDsPre   : String(rawEvidenceObj.Connectivity).split(' Postsynaptic:')[0].split('Presynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    ConnectivityIDsPost  : String(rawEvidenceObj.Connectivity).split('Postsynaptic:').pop().split(refIDsplitterRegex).filter(onlyUniqueNonNull),
    Notes                : rawEvidenceObj.Notes,
    ConRatios            : rawEvidenceObj.ConRatios,
    CellRatios           : rawEvidenceObj.CellRatios,
    RMPorVh              : rawEvidenceObj.RMPorVh,
    ErevAuthors          : rawEvidenceObj.ErevAuthors,
    ErevCalculated       : rawEvidenceObj.ErevCalculated,
    Drugs                : rawEvidenceObj.Drugs.split(/(?:\s*[,;]\s*)+/g).filter(Null).filter(onlyUnique),
    ExtracellularSolution: rawEvidenceObj.ExtracellularSolution,
    IntracellularSolution: rawEvidenceObj.IntracellularSolution,
    rangeA1Notation      : activeRange.getSheet().getName()+'!'+activeRange.getA1Notation(),
    columnName2Number    : columnNumObj
  };
  obj.allRefIDs = mergeArrays(
    obj.MorphologyIDsPre,obj.MarkersIDsPre,obj.CellePhysIDsPre,obj.FiringPatternIDsPre,obj.ConnectivityIDsPre,
    obj.MorphologyIDsPost,obj.MarkersIDsPost,obj.CellePhysIDsPost,obj.FiringPatternIDsPost,obj.ConnectivityIDsPost,
    obj.DataIDs,obj.CovariatesIDs);
  rawEvidenceObj.rowRange = obj.rangeA1Notation;
  rawEvidenceObj.columnName2Number = columnNumObj;
  rawEvidenceObj.columnNotes = columnNotesObj;
  obj.rawEvidenceObject   = rawEvidenceObj;
  return obj;
};
/**
This object gets 
an entire column range of a sheet to search whithin, also
a cellValue to search for
and the header that identifies Rows, which is going to be used to access multiple rows
row(s) that contain the search cellValue
each row is converted to a JSON object based on first colums headers of the sheet
returns an oject-of-objects one object for each row
returns null if there is an error
returns an empty object if nothing is found
*/
function sheetSamplingTool(columnRange, cellValue, accessHeader){
  getRowRanges = function (sheet,rowIndices){
    //  get the row Indices and return an array of rwo ranges
    return rowIndices.reduce(
      function(previous,rowIndex){
        previous.push(sheet.getRange(rowIndex.toString()+":"+rowIndex.toString()));
        return previous
      },[]);
  };
  getRangeAsJson = function(rangeArray,headers){
    // gets an array of row ranges and returns an array of JSON object based on the "original sheet's" first row headers
    return rangeArray.map(function(range) {
      var rowObj = range.getValues()[0].reduce(
        function(p,v,i){
          //previous[headers[Object.keys(previous).length]] = value;
          p[headers[i]] = v;
          return p
        },{})
      rowObj.rowRange = range.getSheet().getName()+'!'+range.getA1Notation();
      rowObj.columnName2Number = columnNumObj;
      rowObj.columnNotes = columnNotesObj;
      return rowObj;
    });
  };
  //-----------------------------function body--------------------------
  var sheet = columnRange.getSheet();
  var headers = sheet.getRange('1:1').getValues()[0];
  var notes = sheet.getRange('1:1').getNotes()[0];
  var columnNumObj = headers.reduce(function(p,v,i){p[v]=i         ; return p},{});
  var columnNotesObj = notes.reduce(function(p,v,i){p[headers[i]]=v; return p},{});
  if (cellValue.length === 1 && columnRange) {
    var rowIndices = [];
    //Search for the cellValue in the column specified by the user:
    //get values of the range -> convert array of arrays to an array -> 
    //find the row indices that have matching key values -> store them in rowIndices
    columnRange.getValues().reduce(to1D).forEach(
      function(value,index){
        if (value == cellValue) {rowIndices.push(index+1)}
      });
    if (arguments.length === 2) {
      if (rowIndices.length === 0) {
        //SpreadsheetApp.getActiveSpreadsheet().toast('sheetSamplingTool did not find any match in '+sheet.getName()+' sheet','Warning for SamplingTool');
        return {};
      } else if (rowIndices.length === 1) {
        return getRangeAsJson(getRowRanges(sheet,rowIndices),headers)[0];
      } else {
        SpreadsheetApp.getActiveSpreadsheet().toast('more than one row is found in the '+sheet.getName()+
        ' sheet please provide the column name that has the unique identifier as the third argument to this function','Error in SamplingTool');
        return null;
      };
    } else if (arguments.length === 3)
    {
      var accessHeaderColumn = headers.indexOf(accessHeader)+1;
      if (accessHeaderColumn === -1)
      {
        SpreadsheetApp.getActiveSpreadsheet().toast(sheet.getName()+' sheet\n'+accessHeader+' column does not exist','Error in SamplingTool');
        return null;
      } else
      {
        if (rowIndices.length === 0) 
        { //SpreadsheetApp.getActiveSpreadsheet().toast('sheetSamplingTool did not find any match in '+sheet.getName()+' sheet','Warning for SamplingTool');
          return {};
        } else
        {
          var arrayOfObjs = getRangeAsJson(getRowRanges(sheet,rowIndices),headers);
          if (isUnique(arrayOfObjs.map(function(Obj){return Obj[accessHeader]})))
          { // check if accessHeader uniquely identifies each object
            // if so, reduce array of objects to a single object as explained above 
            return arrayOfObjs.reduce(function(previous,Obj){previous[Obj[accessHeader].toString()]=Obj; return previous},{});
          } else
          {
            SpreadsheetApp.getUi().alert(sheet.getName()+' sheet\nError in SamplingTool\n'+accessHeader+' collision\n'+arrayOfObjs.map(function(Obj){return Obj[accessHeader]}));
            return null;
          };
        };
      };
    } else 
    {
      SpreadsheetApp.getActiveSpreadsheet().toast('More than 3 arguments is provided','Error in SamplingTool');
      return null;
    };
  } else
  {
    SpreadsheetApp.getActiveSpreadsheet().toast('more than one search key or no key or\nno search column is provided','Error in SamplingTool');
    return null;
  };
};

/**
 * Returns formatted pubmed citation.
 *
 * @param {id} Pubmed identifier.
 * @return Formatted pubmed citation.
 * @customfunction
 */
function pubmed(id) {
  // Special thanks to http://www.alexhadik.com/blog/2014/6/12/create-pubmed-citations-automatically-using-pubmed-api
  var content =  UrlFetchApp.fetch("http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=" + id + "&retmode=json")
  summary = JSON.parse(content)
  
  var title        = summary.result[id].title;
  //var journal      = summary.result[id].fulljournalname;
  //var volume       = summary.result[id].volume;
  //var issue        = summary.result[id].issue;
  var citation     = "";
  var pub_date     = summary.result[id].pubdate.split(" ")[0];
  // var pages        = summary.result[id].pages;
  var first_author = summary.result[id].sortfirstauthor.split(" ")[0];
 
  //var authors = "";
  /* for(author in summary.result[id].authors){
    authors+=summary.result[id].authors[author].name+', ';
  } */
  
  // var citation = "<p><strong>" + title + "</strong><br />" + authors + "<br />" + "(" + pub_date + ") <em>" + journal + "</em> " + volume + " (" + issue + ") " + pages + "</p>";
  var citation = first_author + " " + pub_date + " " + title;
  
  return citation
};

/**
* get the sheet as an array of objects using the header row as property names
* @param {string} sheetId the id
* @param {string} sheetName the sheet name
* @return {[object]} the result
*/
function getSheetByIdAsJSON(sheetId , sheetName) {
  
  // get the values
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  var values = sheet.getDataRange().getValues();
  
  // pull out the headers
  var heads = values.shift();
  
  // reduce to a an object per row
  return values.map (function (row) {
    return row.reduce (function (p,c) {
      p[heads[Object.keys(p).length]] = c;
      return p;
    },{})
  });
};

/**
 * remove EOL characters and double spaces
 * @param {string}
 * @customfunction
 */ 
function filterText(str) {
  Utilities.sleep(2000);
  return str
  .replace(/[\r\n\t]+/g, ' ')
  .replace(/[\s]+/g, ' ');
};

/**
 * @param {string} file name
 * @customfunction
 */
function getFileIDs(fileName) {
  //drive.google.com/uc?export=view&id=<FILE_ID>
  var output = [];
  if (typeof fileName === 'string'){
    var fileIterator = DriveApp.getFilesByName(fileName);
    while (fileIterator.hasNext()) output.push(fileIterator.next().getId());  
  } else {
    SpreadsheetApp.getUi().alert('File name: '+fileName+' is not an string')
  };
  return output;
};

function getFileBase64s(fileName) {
  //<img src="data:image/png;base64,<?=fileBase64?>" style='width:100%;'>
  var output = [];
  if (typeof fileName === 'string'){
    var fileIterator = DriveApp.getFilesByName(fileName);
    while (fileIterator.hasNext()) output.push(Utilities.base64Encode(fileIterator.next().getBlob().getBytes()));   
  } else {
    SpreadsheetApp.getUi().alert('File name: '+fileName+' is not an string')
  };
  return output;
};

function getFileURLs(fileName) {
  //<img src="<?=fileURL?>" style='width:100%;'>
  var output = [];
  if (typeof fileName === 'string'){
    var fileIterator = DriveApp.getFilesByName(fileName);
//    while (fileIterator.hasNext()) output.push(fileIterator.next().getUrl());
    while (fileIterator.hasNext()) output.push(fileIterator.next().getDownloadUrl().replace(/\?e=download&gd=true$/,''));   
  } else {
    SpreadsheetApp.getUi().alert('File name: '+fileName+' is not an string')
  };
  return output;
};

function getActiveCell() {
  var activeCell = SpreadsheetApp.getActiveSheet().getActiveCell();
  return {sheetName:activeCell.getSheet().getName(), cellRange:activeCell.getA1Notation(), cellValue:activeCell.getValue()}; 
};

function setActiveCellValue(uniCellObj,value) {
  var cellObj = JSON.parse(uniCellObj);
 return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(cellObj.sheetName).getRange(cellObj.cellRange).setValue(value);
};
function saveReferenceToSheet(A1Notation,UID,location,Quote){
  var referenceRange = SpreadsheetApp.getActiveSpreadsheet().getRange(A1Notation);
  referenceRange.getCell(1, 3).setValue(UID);
  referenceRange.getCell(1, 4).setValue(location);
  referenceRange.getCell(1, 6).setValue(Quote);
}
function saveToSheetGeneral(A1Notation,columnNum,value){
  var destinationRange = SpreadsheetApp.getActiveSpreadsheet().getRange(A1Notation);
  saveSingleColumnRange(destinationRange,columnNum,value)
}
function addTableToSheet(a1notation,table){
  var destinationRange = SpreadsheetApp.getActiveSpreadsheet().getRange(a1notation);
  var sheet = destinationRange.getSheet();
  sheet.insertRowsAfter(destinationRange.getLastRow(),table.length);
  sheet.getRange(destinationRange.getLastRow()+1, 1, table.length, 4).setValues(table);
  var newRange = sheet.getName() + '!' + destinationRange.offset(0, 0, destinationRange.getNumRows()+table.length).getA1Notation();
  sheet.setActiveRange(sheet.getRange(newRange));
  return newRange;
}
function deleteRowsOfSheet(a1notation,table){
  var destinationRange = SpreadsheetApp.getActiveSpreadsheet().getRange(a1notation);
  var sheet = destinationRange.getSheet();
  var rowIdices = range(destinationRange.getRow(),destinationRange.getLastRow());
  var rangeValues = destinationRange.offset(0, 0, destinationRange.getNumRows(), 4).getValues();
  var numRows = rangeValues.length-1;
  var sheetIndicesLtoS = [];
  var iPreviousMatch = null;
  for (var i=numRows; i>=0; i--) {
    var sRow = rangeValues[i];
    if (table.some(function(tRow){return (tRow[0]==sRow[0] && tRow[3]==sRow[3])})){
      //sheet.deleteRow(rowIdices[i]);
      if (sheetIndicesLtoS.length===0 || ((i+1) === iPreviousMatch)) {
        sheetIndicesLtoS.push(rowIdices[i]);
      } else {
        sheet.deleteRows(sheetIndicesLtoS[sheetIndicesLtoS.length-1],sheetIndicesLtoS.length)
        sheetIndicesLtoS = [];
        sheetIndicesLtoS.push(rowIdices[i]);
      }
      iPreviousMatch = i;
    }
  }
  if (sheetIndicesLtoS.length > 0) 
    sheet.deleteRows(sheetIndicesLtoS[sheetIndicesLtoS.length-1],sheetIndicesLtoS.length);
  var newRange = sheet.getName() + '!' + destinationRange.offset(0, 0, rangeValues.length-table.length).getA1Notation();
  sheet.setActiveRange(sheet.getRange(newRange));
  return newRange;
}
function overwriteRows(a1notation,table){
  var destinationRange = SpreadsheetApp.getActiveSpreadsheet().getRange(a1notation);
  var sheet = destinationRange.getSheet();
  var newRange = a1notation;
  if (destinationRange.getNumRows() === 1) {
    Logger.log(table)
    Logger.log(table.length)
    if(table.length>1) {
      sheet.insertRowsAfter(destinationRange.getLastRow(),table.length-1);
      sheet.getRange(destinationRange.getRow(), 1, table.length, 4).setValues(table);
      newRange = sheet.getName() + '!' + destinationRange.offset(0, 0, destinationRange.getNumRows()+table.length-1).getA1Notation();
      sheet.setActiveRange(sheet.getRange(newRange));
    } else {
      destinationRange.offset(0, 0, 1, 4).setValues(table);
    }
  }
  return newRange;
}