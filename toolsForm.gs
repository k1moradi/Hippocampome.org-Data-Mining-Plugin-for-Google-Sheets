// a function to highlight important text
function refHighlights(input) {
  var spacer = "[^<>)(]";
  var connectingWords = "(?:(?:before,* ){0,1}and|to|vs|or|at|(?:out ){0,1}of(?: these){0,1})"
  var numberWords = "\\b(?:[Tt]en|[Ee]leven|[Tt]welve)(?:th)?|(?:[Tt]hir|[Ff]our|[Ff]if|[Ss]ix|[Ss]even|[Ee]igh|[Nn]in)t(?:een|y|h)|[Ss]ingle|[Ff]irst|[Ss]econd|[Tt]hird|[Zz]ero|[Nn]one|[Oo]ne|[Tt]wo|[Tt]hree|[Ff]our|[Ff]ive|[Ss]ix|[Ss]even|[Ee]ight|[Nn]ine|[Tt]wenty|[Hh]undreds?|[Tt]housands?\\b"
  var numbers = "(?:\\d+[.,]{0,1}\\d*|"+numberWords+")";
  var numberRange = "[-+∼~≈≤≥<>]{0,1}"+numbers+"(?:[–±]| (?:to|and|or|(?:out )?of(?: the)?) ){0,1}[-+]{0,1}"+numbers+"{0,1}(?: \\("+numbers+"%\\))?";
  var units = "(?:°C{0,1}|m(?:sec|[lLMVs])(?:[ \\\/]min){0,1}(?:⁻¹){0,1}|min(?:utes?)?|(?!nAChR*)[pn][ASF]|%|percent|times?|mega*ohms*|(?:representative |recorded )*(?:cells*|(?:inter)?neurons*|pairs*)|quantal*|stimul(?:us|i)|(?:synaptic ){0,1}connections*|[µμ].{0,1}(?:ec)?|[kKM]{0,1}Hz|.{0,1}Ω|(?:(?:consecutive|individual|single|continuous))*(?: (?:response|sweep|event|trace|observation|[esmuESMU]{0,1}\\.{0,1}[eiEI]\\.{0,1}[Pp]\\.{0,1}[Ss]\\.{0,1}[CPcp])[Ss]{0,1}))";
  var numPattern = new RegExp("([\\s(;,=]|<br>)("+numberRange+")("+spacer+"{0,1}"+units+"){0,1}("+spacer+"{0,1}"+connectingWords+"){0,1}("+spacer+"{0,1}"+numberRange+"){0,1}("+spacer+"{0,1}"+units+"){0,1}", "g");
  var strInput = (typeof input === 'object' && !Array.isArray(input)) ? JSON.stringify(input) : String(input);
  return strInput
  .replace('[micro]','µ')
  .replace(numPattern,
    function(fullMatch,p1,p2,p3,p4,p5,p6){
      function txt(input) {return (input)? input : ''}
      if (p3 || p6) {
        if (p5 || p6) {
          return txt(p1)+"<mark style='background-color:rgba(255,153,153,0.5); color:black;'>"+txt(p2)+txt(p3)+txt(p4)+txt(p5)+txt(p6)+"</mark>";
        } else {
          return txt(p1)+"<mark style='background-color:rgba(255,153,153,0.5); color:black;'>"+txt(p2)+txt(p3)+"</mark>"+txt(p4)+txt(p5)+txt(p6);
        }} else {
          return fullMatch;
        }})                                                                                              //pink-orange
  .replace(new RegExp("([(;, ])("+numberWords+")(?!"+spacer+"(?:"+connectingWords+"|"+units+"))","gi"),
           "$1<mark style='background-color:rgba(255,153,153,0.5); color:black;'>$2</mark>")             //pink-orange
  .replace(/\b((?:Mono|Single|Double|Triple|di|bi|reversal|holding|resting|recording|equilibrium|access|series|time|tight|half|action|quantal|patch|transverse|horizontal|longitudinal|oblique|room|high|low)(?:[^<>)(]|[^<>)(]{0,1}(?:exponential|Brain|hippocampal|entorhinal cortex|EC)[^<>)(])){0,1}(ACSF|Q10|pH|Median|anesthesia|slice|temperature|magic|(?:(?:paired|multiple)[^<>)(]{0,1}){0,1}pulse(?:[^<>)(]{0,1}ratio){0,1}|(?:in|ex)(?:tracellular|ternal)|flow|physiologic(?:al)*|membrane|potential|RMP|peak|current(?:[^<>)(]voltage)*|I[^<>)(]V|voltage|conductance|failure|delay|(?:frequenc|latenc|intensit)(?:y|ies)|slope|amplitude|potency|charge|perforated|whole.{0,1}cell|cell.{0,1}attached|outside.{0,1}out|electrode|pipette|injec|constant|seal|resist|capacit|duration|rise.{0,1}|decay.{0,1}|width|diameter|analysis|measure|PP[FDR])(tions*|ances*|ive|ing|ly|e*s){0,1}([^<>)(]{0,1}(?:patch.{0,1}clamp|patch|clamp|solution|time|potential|transfer)(?:e*[sd]|ing)*){0,1}\b/gi,
           "<mark style='background-color:rgba(100,255,255,0.5); color:black;'>$1$2$3$4</mark>")         //cyan
  .replace(/\b(epilep(?:ticus|tic|s[yi]a*)|seisures*|field|cultured*|gluconate)\b/gi,
           "<mark style='background-color:red; color:white;'>$1</mark>")                                 //red
  .replace(/\b((?:a|e|contra|ipsi|tri|quadri|sub|rostro|antero|postero|medio|septo|s\.?t\.?r?(?:at(?:um|a)|\.)?|principal|inter|inner|outer|associational|apical|basal|axonal|pre|post|peri|dentate|non|a{0,1}synchronous|recurrent)[^<>)(]{0,1}){0,1}(HIPP|mossy|basket|N{0,1}[FR]S|[Ff]ast[^<>)(]{0,1}[Ss]piking|p\.*y\.*r\.*(?:amid)*|granul|s*GCl*|BC|PP|stellate|axo[^<>)(]{0,1}axonic|AAC|chandelier|ivy|neuroglia|[os]{0,1}[^<>)(]{0,1}l\.{0,1}m|lamin|hicap|retzius|interneuron(?: specific){0,1}|lmr|lamella|morpholog|dendrit|soma|bod|axon|fiber|wire|hillock|thorny|varicos|vesicl|spin|synap|symmet|bouton|en passant|termin|release|transmi|contact|connect|fferent|communicat|target|origin|innervat|collateral|commissur|project|arbor|arboriz|input|output|pathway|efferent|afferent|body|origin|innervat|end|branch|bifurcat|fissure|perforant|Schaffer|fimbria|fornix|alve|CA[1-4][a-c]{0,1}|MF|molecular|[io]{0,1}[^<>)(]{0,1}ml|oriens|radiat|lucid|DG|dentat|hilus|hilar|subicul|entorhinal|LEC|MEC|sept|tempor|dorsal|ventral|caudal|rostral|posterior|coronal|medial|lateral|distal|distant|proximal|distance|remote|region|antidromic|orthodromic|calbindin|bicuculline|[cd]nqx|nbqx|[DL]{0,2}[^<>)(]{0,1}AP[^<>)(]{0,1}[v5]|CGP[^<>)(]{0,1}55845|sr[^<>)(]{0,1}95531|QX[^<>)(]{0,1}314|glycine|picrotoxin|gabazine|kyn(?:urenic|a)*|[PT]TX|DCG[^<>(]{1,3}|[^<>)]{0,2}CCG[^<(]{1,2})(ular|form|ivity|[tr]*ic|ing|tter|ale*(?:ly){0,1}|[ats]*ion|ate|ar|ta|us|um|[iesay]*){0,1}([^<>)(]{0,1}(?:layer|cell|interneuron|IN|BC|GC|PC|neuron|like|gyrus|fiber|border|terminal)s*){0,1}([^<>)(]{0,1}(?:layer|terminal|border)s*){0,1}\b/gi,
           "<mark style='background-color:rgba(255,230,144,0.5); color:black;'>$1$2$3$4$5</mark>")       //yellow
  .replace(/\b((?:short|long|evoked|unitary|spontaneous|miniature|quantal|photo|electr(?:o|ical))[^<>)(]{0,1}){0,1}([esmu]{0,1}\.{0,1}[ei]\.{0,1}p\.{0,1}s\.{0,1}[cp]\d*|unitary|AMPA|NMDA|GABA[^<>)(]{0,1}(?:A|B)*|suppress|feed.{0,1}back|feed.{0,1}forward|inhibit|excit|glutamat|paired(?!.{0,1}pulse|.{0,1}t.test)|simultaneous|dual|coupl|Reciprocal|stimul|facilit|depress|STDP|LT[PD]|PTP|potentiat|plasticity|term|n=\d+)(ergic|atory|[at]*ion|[at]*ing|ory|ated*|us|ly|ed|th|[es]{0,2}){0,1}([^<>)(]{0,1}(?:record(?:ing|ed)|[AB](?= ))){0,1}\b/gi,
           "<mark style='background-color:rgba(255,128,171,0.5); color:black;'>$1$2$3$4</mark>")         //pink
};
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
          originalItem.asCheckboxItem().setChoiceValues(choices);
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
                        findRefIDs(round((Number(value.ul) + Number(value.ll))/2, 0) + '±' + round((Number(value.ul) - Number(value.ll))/2, 0), refObject)
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
  return str.split(/\s*[,]+\s*/g).map(stringParser)
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
    var numericalDataRegExp = /(?:(^\s*[\-+]{0,1}\d+(?:\.\d+){0,1})(?:±(\d+(?:\.{0,1}\d+){0,1})){0,1}){0,1}\s*(?:\[\s*(?:([\-+]{0,1}\d+(?:\.\d+){0,1})\s*to\s*([\-+]{0,1}\d+(?:\.\d+){0,1})|\>([\-+]{0,1}\d+(?:\.\d+){0,1})|\<([\-+]{0,1}\d+(?:\.\d+){0,1}))\s*\]){0,1}\s*(?:\(n=(\d+)\)){0,1}\s*(?:\{(.*)\}){0,1}/i
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
    var tmp = JSON.parse(str.replace(/([\d&]*)\s*(?:\{(.*)\}){0,1}/,"{\"refIDs\":\"$1\",\"note\":\"$2\"}"))
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
    return obj.values.map(
      function(value){
        return value.v +
          ((value.s)?'±'+value.s:'')+
            ((value.ul && value.ll)?'['+value.ll+' to '+value.ul+']': ((value.ul)?'[<'+value.ul+']': ((value.ll)?'[>'+value.ll+']': '')))+
              ((value.n)?'(n='+value.n+')':'')+
                ((value.note)?'{'+value.note+'}':'')
              
      }).join('; ')+'@'+ ((obj.RefIDs)?obj.RefIDs.filter(Null).filter(onlyUnique).join('&'):'') + ((obj.note)?'{'+obj.note+'}':'')
  }
}