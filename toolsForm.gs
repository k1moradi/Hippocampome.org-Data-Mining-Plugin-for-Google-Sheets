//sort RefIDs as Semicolon Separated Values or JSON
function sortIDsAsSSV(input) {
  return (typeof input === 'object' && !Array.isArray(input)) ? JSON.stringify(input) :
  String(input)
  .split(/[;,\n\s]+/g)
  .filter(Null)
  .filter(onlyUnique)
  .sort(function(a,b) {return Number(a) - Number(b)})
  .join('; ');
}

var prefillForm = function(form) {
  this.form = form; //open a form
  this.Responses = this.form.createResponse(); //make a respose for it
  // a function to automatically detect the type of item and set a response for it
  this.prefillItem = function(ItemID,response,defaultResponse) { // Warning + sign is not allowed in responses
    if (typeof response ==='string') response = response.replace(/[\n\r\s]*(?:\<br>)+[\n\r\s]*/g,'\n\n')
    if (response.length !== 0) {
      var originalItem = this.form.getItemById(ItemID);
      switch (originalItem.getType()) {
        case FormApp.ItemType.TEXT:
          this.Responses.withItemResponse(originalItem.asTextItem().createResponse(String(response)));
          break;
        case FormApp.ItemType.PARAGRAPH_TEXT: 
          this.Responses.withItemResponse(originalItem.asParagraphTextItem().createResponse(String(response)));
          break;
        case FormApp.ItemType.LIST:
          this.Responses.withItemResponse(originalItem.asListItem().createResponse(response));
          break;
        case FormApp.ItemType.MULTIPLE_CHOICE:
          this.Responses.withItemResponse(originalItem.asMultipleChoiceItem().createResponse(response));
          break;
        case FormApp.ItemType.CHECKBOX:
          if (Array.isArray(response))
            if (response.filter(Null).length !== 0)
              this.Responses.withItemResponse(originalItem.asCheckboxItem().createResponse(response));
          break;
        case FormApp.ItemType.GRID:
          var expectedResponseLength = originalItem.asGridItem().getRows().length
          if (Array.isArray(response)) {
            if (response.filter(Null).length === expectedResponseLength) {
              this.Responses.withItemResponse(originalItem.asGridItem().createResponse(response));
            } else if (response.length === expectedResponseLength && typeof defaultResponse === 'string') {
              this.Responses.withItemResponse(originalItem.asGridItem().createResponse(
                response.map(function(res){return (res === '') ? defaultResponse : res})));
            } else if (typeof defaultResponse === 'string') {
              this.Responses.withItemResponse(originalItem.asGridItem().createResponse(
                Array.apply(null, Array(expectedResponseLength)).map(String.valueOf,defaultResponse)));
            }
          }
          break;
        case FormApp.ItemType.DATE:
          //item = originalItem.asDateItem();
          //resp = new Date( resp );
          break;
        case FormApp.ItemType.DATETIME:
          //item = originalItem.asDateTimeItem();
          //resp = new Date( resp );
          break;
        default:
          var item = null;  // Not handling DURATION, GRID, IMAGE, PAGE_BREAK, SCALE, SECTION_HEADER, TIME
          break;
      };
    };
  };
  this.setDescription = function(ItemID,description) {
    var originalItem = this.form.getItemById(ItemID);
    switch (originalItem.getType()) {
      case FormApp.ItemType.TEXT:
        originalItem.asTextItem().setHelpText(description);
        break;
      case FormApp.ItemType.PARAGRAPH_TEXT: 
        originalItem.asParagraphTextItem().setHelpText(description);
        break;
      case FormApp.ItemType.LIST:
        originalItem.asListItem().setHelpText(description);
        break;
      case FormApp.ItemType.MULTIPLE_CHOICE:
        originalItem.asMultipleChoiceItem().setHelpText(description);
        break;
      case FormApp.ItemType.CHECKBOX:
        originalItem.asCheckboxItem().setHelpText(description);
        break;
      case FormApp.ItemType.GRID:
        originalItem.asGridItem().setHelpText(description);
        break;
      case FormApp.ItemType.DATE:
        originalItem.asDateItem().setHelpText(description);
        break;
      case FormApp.ItemType.DATETIME:
        originalItem.asDateTimeItem().setHelpText(description);
        break;
      default:
        var item = null;  // Not handling DURATION, GRID, IMAGE, PAGE_BREAK, SCALE, SECTION_HEADER, TIME
        break;
    };
  };
  
  this.setChoices = function(ItemID,choices) {
    if (Array.isArray(choices))
    {
      var originalItem = this.form.getItemById(ItemID);
      switch (originalItem.getType()) {
        case FormApp.ItemType.LIST:
          originalItem.asListItem().setChoiceValues(choices);
          break;
        case FormApp.ItemType.MULTIPLE_CHOICE:
          originalItem.asMultipleChoiceItem().setChoiceValues(choices);
          break;
        case FormApp.ItemType.CHECKBOX:
          if (Array.isArray(choices)){
            choices = choices.filter(dash2null);
            originalItem.asCheckboxItem().setChoiceValues((choices.length !== 0) ? choices : ['-']);
          }
          break;
        case FormApp.ItemType.GRID:
          originalItem.asGridItem().setRows(choices);
          break;
        default:
          var item = null;
          SpreadsheetApp.getUi().alert('item:'+ItemID+'\nis not a LIST, MULTIPLE_CHOICE, CHECKBOX or GRID');
          break; 
      };
    } else {
        SpreadsheetApp.getUi().alert('non array choice is set for item:\n'+ItemID+'\nthe choice was\n'+String(choices));
    };
  };
  
  this.isPrefilled = function(ItemID) {
    var originalItem = this.form.getItemById(ItemID);
    return (this.Responses.getResponseForItem(originalItem) === null)? false : true;
  };
  this.prefillEmptyItem = function(ItemID,response) { // Warning + sign is not allowed in responses
    var itemType = this.form.getItemById(ItemID).getType()
    if (!this.isPrefilled(ItemID)) 
      this.prefillItem(ItemID,(response && response!=='-' && (itemType === FormApp.ItemType.TEXT || itemType === FormApp.ItemType.PARAGRAPH_TEXT))?'~~'+response:((response==='-')?'':response));
  };
  this.getPrefilledUrl = function() {
    //return this.form.shortenFormUrl(this.Responses.toPrefilledUrl());
    return this.Responses.toPrefilledUrl();
  };
};
function tagInputWithRefID(Input,InRefObject){
  var input = String(Input);
  if (input !== ''){
    if (input.match(/@/g)) {
      return input;
    } else {
      return input+'@'+ findRefIDs(input,InRefObject).join('&');
    };
  } else {
    return Input;
  }
}
function findRefIDs(Input,RefObjects){
  if (Array.isArray(RefObjects)) {
    return RefObjects.reduce(
      function(p,InRefObject){
        return p.concat(Object.keys(InRefObject).filter(
          function(key){
            return InRefObject[key].Quote.match(Input)
          }))
      },[])
  } else {
    return Object.keys(RefObjects).filter(
      function(key){
        return RefObjects[key].Quote.match(Input)
      })
  }
}
function tagRefIDUniversal(datastr, refObject) {
  if (typeof datastr === 'string' && /\d/.test(datastr)) {
    return dataObjToString(dataStringParser(datastr).map(
      function(dataPoint) {
        if (typeof dataPoint === 'object' && !Array.isArray(dataPoint)) {
          if (dataPoint.RefIDs.length === 0) {
            if (dataPoint.values.length !== 0) {
              dataPoint.RefIDs = dataPoint.values.map(
                function(value) {
                  var units = '\s*(?:°C)*'
                  var RefIDset1=[], RefIDset2=[];
                  if (value.v) {
                    if (value.s) {
                      RefIDset1 = findRefIDs(value.v + '±' + value.s, refObject)
                    } else {
                      RefIDset1 = findRefIDs(value.v, refObject)
                    }
                  }
                  if (value.ul) {
                    if (value.ll) {
                      RefIDset2 = mergeArrays(
                        findRefIDs(new RegExp(value.ll + units + '(?: to |[–-])' + value.ul, 'g'), refObject),
                        findRefIDs(new RegExp(value.ul + units + '(?: to |[–-])' + value.ll, 'g'), refObject),
                        findRefIDs(round((Number(value.ul) + Number(value.ll))/2, 1) + '±' + round((Number(value.ul) - Number(value.ll))/2, 1), refObject),
                        findRefIDs(round((Number(value.ul) + Number(value.ll))/2, 2) + '±' + round((Number(value.ul) - Number(value.ll))/2, 2), refObject)
                      ).filter(Null).filter(onlyUnique);
                    } else {
                      RefIDset2 = findRefIDs(new RegExp('(?: (?:smaller|less)(:? than)* |[<])' + value.ul, 'g'), refObject);
                    }
                  } else if (value.ll) {
                    RefIDset2 = findRefIDs(new RegExp('\s(?:(?:larger|more)(:? than)* |[>])' + value.ll, 'g'), refObject);
                  } else {
                    RefIDset2 = null;
                  }
                  return mergeArrays (RefIDset1,RefIDset2)
                }).filter(Null).reduce(to1D)
            }
          }} else {
            SpreadsheetApp.getUi().alert(dataPoint+'\nis not a JSON object');
          }
        return dataPoint;
      }));
  } else {
    return datastr;
  }
}
function dataStringParser(str){
  return str.split(/\s*[,]+\s*(?!\s*Δt:|\s*Post)/g).map(stringParser)
}
// This function converts my data strings to objects
// given a properly formatted returns an array of objetcs
// each object has the following members 
//{"RefIDs":[#,#,...],"note":str,"values":[{"v":#,"s":#,"ul":#,"ll":#,"n":#,"note":str},...]}
function stringParser(str){
  //DATA Format:\d±\d [\d to \d][><\d](n=\d){Note:Note};...@\d&\d{Note:Note}, ..., Stimulation Protocol;@\d&\d{Note:Note}');
  var atSigns = str.match(/@\d+/g);
  if (atSigns) {
    if (atSigns.length === 1) {//a normal syntax
      var tmp = str.split(/@/g);
      var results = refIDSecToObj(tmp[1]);
      results.values=tmp[0].split(/\s*[;]\s*/g).filter(Null).map(dataSecToObj);
      return results;
    } else {
      //stimulation syntax
      return str;
    }
  } else if (atSigns = str.match(/@\s*\{/g)) {
    if (atSigns.length === 1) {//a normal syntax
      var tmp = str.split(/@/g);
      var results = {RefIDs:"", note:/\{(.*?)\}/g.exec(tmp[1])[1]};
      results.values=tmp[0].split(/\s*[;]\s*/g).filter(Null).map(dataSecToObj);
      return results;
    } else {
      //stimulation syntax
      return str;
    }
  } else {
    if ((str.match(/.+?\{.*?\}/g)) ? (str.match(/.+?\{.*?\}/g).length === 1) : false){
      if (str.match(/.+?\{.*?\}$/g)){
        var tmp = str.split(/@*\{/g);
        var results = refIDSecToObj('{'+tmp[1]);
        results.values=tmp[0].split(/\s*[;]\s*/g).filter(Null).map(dataSecToObj);
        return results;
      }
    } else {
      var results = refIDSecToObj('');
      results.values = str.split(/\s*[;]\s*/g).filter(Null).map(dataSecToObj);
      return results;
    }
  }
}
function dataSecToObj(str) {//Logger.log(str)
  try {
    var numericalDataRegExp = /(?:(^\s*[\-+]?\d+(?:\.\d+)?(?:[Ee]\-?\d+)?)(?:±(\d+(?:\.?\d+)?(?:[Ee]\-?\d+)?))?)?\s*(?:\[\s*(?:([\-+]?\d+(?:\.\d+)?(?:[Ee]\-?\d+)?)\s*to\s*([\-+]?\d+(?:\.\d+)?(?:[Ee]\-?\d+)?)|\>([\-+]?\d+(?:\.\d+)?(?:[Ee]\-?\d+)?)|\<([\-+]?\d+(?:\.\d+)?(?:[Ee]\-?\d+)?))\s*\])?\s*(?:\(n=(\d+)\))?\s*(?:\{(.*)\})?/i
    if (numericalDataRegExp.exec(str)[0] !== '') {
      var tmp = JSON.parse(str.replace(numericalDataRegExp,"{\"v\":\"$1\",\"s\":\"$2\",\"ll\":\"$3$5\",\"ul\":\"$4$6\",\"n\":\"$7\",\"note\":\"$8\"}"));
      ['v','s','ll','ul','n'].forEach(function(key){if (tmp[key]) tmp[key]=Number(tmp[key])})
      if (tmp.ul && tmp.ll) {
        if ((Number(tmp.ul) - Number(tmp.ll))<0) {
          var largerNumber = tmp.ll;
          tmp.ll = tmp.ul;
          tmp.ul = largerNumber;
        }
      }
      return tmp;
    } else {
      return {v:'',s:'',ll:'',ul:'',n:'',note:str.replace(/^\s+|\s+$/,'')};
    }
  } catch(error) {
    SpreadsheetApp.getUi().alert('Error in dataSecToObj function when processing input:\n\n'+str+'\n\n'+error.message)
  };
}
function refIDSecToObj(str) {
  try {
    var tmp = JSON.parse(str.replace(/([\d&]*)\s*(?:\{(.*)\})?/,"{\"refIDs\":\"$1\",\"note\":\"$2\"}"))
    return {RefIDs:tmp.refIDs.split(/\&/g).filter(Null),note:tmp.note}
  } catch(error) {
    SpreadsheetApp.getUi().alert('Error in refIDSecToObj function when processing input:\n\n'+str+'\n\n'+error.message)
  };
}
function dataObjToString(obj) {
  if (Array.isArray(obj)) {
    return obj.map(dataSecToString).join(', ');
  }
};
function dataSecToString(obj){
  if (typeof obj === "object") {
    //Logger.log(1)
    return obj.values.map(
      function(value){
        //Logger.log(2)
        return value.v +
          ((value.s)?'±'+value.s:'')+
            ((value.ul && value.ll)?'['+value.ll+' to '+value.ul+']': ((value.ul)?'[<'+value.ul+']': ((value.ll)?'[>'+value.ll+']': '')))+
              ((value.n)?'(n='+value.n+')':'')+
                ((value.note)?'{'+value.note+'}':'')
              
      }).join('; ')+'@'+ ((obj.RefIDs)?obj.RefIDs.filter(Null).filter(onlyUnique).join('&'):'') + ((obj.note)?'{'+obj.note+'}':'')
  }
}