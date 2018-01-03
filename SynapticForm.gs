function updateSynDataForm(evidence,aR,covariates,covRefs,synRefs,synapticDataSheet,rowIndex,ui,templateDataID,dSec) {
  //DocumentApp.create('IDs').getBody().appendParagraph(FormApp.openById('1Z9nFRtX6Ex1f8DLMplp9gAIRAsHuP8sHaH7TiGa9tu8').getItems().reduce(function(p,item){return p+'//ID:'+item.getId()+'\tType:'+item.getType()+'\tTitle:'+item.getTitle()+'\n'},''));
  var pForm = new prefillForm(FormApp.openById('1Z9nFRtX6Ex1f8DLMplp9gAIRAsHuP8sHaH7TiGa9tu8'));
  
//  var paragraphtextValidation = FormApp.createParagraphTextValidation().requireTextDoesNotContainPattern('^[\s\n\r\t]*~~\s*').build();
//  pForm.form.getItems().filter(function(item){
//    return (item.getType() === FormApp.ItemType.PARAGRAPH_TEXT)//item.getType() === FormApp.ItemType.TEXT || 
//  }).forEach(function(item){
//    //Logger.log('\n//ID:'+item.getId()+'\tType:'+item.getType()+'\tTitle:'+item.getTitle()+'\n')
//    item.asParagraphTextItem().setValidation(paragraphtextValidation);
//  });
  
  var findPranteses = /(?:\((.*)\))/;

  if (templateDataID.getSelectedButton() == ui.Button.YES) {
    var rowNum = String(rowIndex+2);
    var synData = synapticDataSheet.getRange(rowNum+':'+rowNum).getValues()[0]; //Logger.log(synData)
    pForm.form.getItems()
    .filter(
      function(item){
        return (item.getType() !== FormApp.ItemType.PAGE_BREAK && item.getType() !== FormApp.ItemType.SECTION_HEADER)
      })
    .forEach(
      function(item,i){
        if (synData[i+1]) {//Logger.log(synData[i+1]+', '+item.getType()+', '+item.getTitle());
          pForm.prefillItem(item.getId(),synData[i+1]);
        }
      });
  } else if (templateDataID.getSelectedButton() == ui.Button.NO) {
    Logger.log('The user didn\'t want to correct format.');
  } else {
    Logger.log('The user clicked the close button in the dialog\'s title bar.');
  }
  
  //ID:277511854	Type:TEXT	Title:Pubmed ID
  pForm.prefillItem('277511854',evidence.PMID);
  //ID:1965398313	Type:PARAGRAPH_TEXT	Title:Evidence ID
  pForm.prefillItem('1965398313',evidence.eID);
  dSec.split(/[\s,;]+/g).forEach(function(dataSec){
    switch (dataSec)  {
      case 'mPSP':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Miniature Potentials (mPSP)');
        //ID:427341935	Type:PAGE_BREAK	Title:Miniature Potentials (mPSP)
        //ID:1141504215	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:265541588	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:436659317	Type:SECTION_HEADER	Title:Postsynaptic Membrane
        //ID:4275336	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('4275336',(dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}');
        //ID:1712702434	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:1170383288	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('1170383288',evidence.RMPorVh);
          //ID:1130520286	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('1130520286','0');
        } else {
          //ID:1125701960	Type:PARAGRAPH_TEXT	Title:Steady State Membrane Potential (mV)
          pForm.prefillEmptyItem('1125701960',evidence.RMPorVh);
          //ID:1130520286	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('1130520286',' ');
        }
        //ID:745026251	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('745026251',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:1680721126	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:380228377	Type:SECTION_HEADER	Title:Statistics
        //ID:1331683987	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:1115567858	Type:MULTIPLE_CHOICE	Title:Measures of Central Tendency
        //ID:697660925	Type:MULTIPLE_CHOICE	Title:Measures of Spread
        //ID:1207954043	Type:SECTION_HEADER	Title:Synaptic Parameters
        //ID:1498506657	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:2101587636	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:1049979847	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('1049979847',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:2034586341	Type:PARAGRAPH_TEXT	Title:Frequency (Hz)
        //ID:235747000	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:438893712	Type:PARAGRAPH_TEXT	Title:Average Amplitude (mV)
        //ID:1129144977	Type:PARAGRAPH_TEXT	Title:Average Potency (mV)
        //ID:1672428865	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (mV)
        //ID:1333223176	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:1722230147	Type:PARAGRAPH_TEXT	Title:Slope (ΔmV/Δms)
        //ID:1128717865	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:210463588	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:1660491963	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:1419551600	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:383108567	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:485354456	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:966881852	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:870077869	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:2066450643	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:1544827152	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:1242515027	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:525472789	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:598368260	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:2062462547	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:79299524	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:545884041	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:356195268	Type:TEXT	Title:τ - 2exp-Model (ms)
        //ID:2092075944	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:98267515	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:1450704949	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:1437374643	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:154136194	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:136546666	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:1908519546	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:496525878	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:1276453874	Type:MULTIPLE_CHOICE	Title:Quantal Events
        break;
      case 'mPSC':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Miniature Currents (mPSC)');
        //ID:372254299	Type:PAGE_BREAK	Title:Miniature Currents (mPSC)
        //ID:1501419860	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:1443996945	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:2008241553	Type:SECTION_HEADER	Title:Postsynaptic Membrane
        //ID:1529021711	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('1529021711',(dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}');
        //ID:1717332473	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:433898023	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('433898023',evidence.RMPorVh);
        } else {
          //ID:2122605218	Type:PARAGRAPH_TEXT	Title:Holding Potential (mV)
          pForm.prefillEmptyItem('2122605218',evidence.RMPorVh);
        }
        //ID:299044194	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('299044194',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:811674063	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:1793957866	Type:SECTION_HEADER	Title:Statistics
        //ID:295199985	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:522290452	Type:MULTIPLE_CHOICE	Title:Measure of Central Tendency
        pForm.setDescription('522290452',covariates.Statistics);
        //ID:947709270	Type:MULTIPLE_CHOICE	Title:Measure of Spread
        //ID:546827458	Type:SECTION_HEADER	Title:Synaptic Parameters
        //ID:1721613620	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:1491249590	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:1483871837	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('1483871837',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:1802972673	Type:PARAGRAPH_TEXT	Title:Frequency (Hz)
        //ID:518055529	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:688360125	Type:PARAGRAPH_TEXT	Title:Average Amplitude (pA)
        //ID:1862244492	Type:PARAGRAPH_TEXT	Title:Average Potency (pA)
        //ID:539118605	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (pA)
        //ID:1096603661	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:2122698640	Type:PARAGRAPH_TEXT	Title:Slope (ΔpA/Δms)
        //ID:1415148996	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:1973228331	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:1553881074	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:400101844	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:1729347751	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:874435967	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:2114002725	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:24599053	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:1219911699	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:773766981	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:1387783612	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:1190541058	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:1015230171	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:2009099775	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:620473599	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:1032008422	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:1926531773	Type:PARAGRAPH_TEXT	Title:τ - 2exp-Model (ms)
        //ID:37659067	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:310798130	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:1751302565	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:535425682	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:1105391309	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:556039140	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:802543493	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:479056123	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:172140614	Type:MULTIPLE_CHOICE	Title:Quantal Events
        break;
      case 'sPSP':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Spontaneous Potentials (sPSP)');
        //ID:1794492914	Type:PAGE_BREAK	Title:Spontaneous Potentials (sPSP)
        //ID:774049725	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:1214131409	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:903954085	Type:SECTION_HEADER	Title:Postsynaptic Membrane
        //ID:1121608872	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('1121608872',(dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}');
        //ID:1674601306	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:1972044961	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('1972044961',evidence.RMPorVh);
          //ID:1192989274	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('1192989274','0');
        } else {
          //ID:836922770	Type:PARAGRAPH_TEXT	Title:Steady State Membrane Potential (mV)
          pForm.prefillEmptyItem('836922770',evidence.RMPorVh);
          //ID:1192989274	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('1192989274',' ');
        }
        //ID:1078037906	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('1078037906',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:1071140908	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:1244871535	Type:SECTION_HEADER	Title:Statistics
        //ID:1877632183	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:1241806332	Type:MULTIPLE_CHOICE	Title:Measure of Central Tendency
        pForm.setDescription('1241806332',covariates.Statistics);
        //ID:1501204231	Type:MULTIPLE_CHOICE	Title:Measure of Spread
        //ID:608923935	Type:SECTION_HEADER	Title:Synaptic Parameters
        //ID:652885719	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:1434258078	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:1137103377	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('1137103377',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:213397466	Type:PARAGRAPH_TEXT	Title:Frequency (Hz)
        //ID:499561563	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:1658328815	Type:PARAGRAPH_TEXT	Title:Average Amplitude (mV)
        //ID:1735108054	Type:PARAGRAPH_TEXT	Title:Average Potency (mV)
        //ID:1540187881	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (mV)
        //ID:1714958994	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:949683117	Type:PARAGRAPH_TEXT	Title:Slope (ΔmV/Δms)
        //ID:1353510070	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:958366684	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:726275320	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:828149102	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:1050555616	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:1178901871	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:2109801314	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:1258556423	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:634377907	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:942294238	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:344568101	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:558404804	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:973066839	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:596226241	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:1324537746	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:831293913	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:1314203960	Type:PARAGRAPH_TEXT	Title:τ - 2exp-Model (ms)
        //ID:1643246172	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:1683923219	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:1041492391	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:1067630437	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:1271694539	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:1936442429	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:603567340	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:1577377655	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:1180557339	Type:MULTIPLE_CHOICE	Title:Quantal Events
        break;
      case 'sPSC':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Spontaneous Currents (sPSC)');
        //ID:592341402	Type:PAGE_BREAK	Title:Spontaneous Currents (sPSC)
        //ID:941536151	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:1177876013	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:649910150	Type:SECTION_HEADER	Title:Postsynaptic Membrane
        //ID:255478031	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('255478031',(dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}');
        //ID:1546411811	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:123299683	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('123299683',evidence.RMPorVh);
        } else {
          //ID:541384130	Type:PARAGRAPH_TEXT	Title:Holding Potential (mV)
          pForm.prefillEmptyItem('541384130',evidence.RMPorVh);
        }
        //ID:1560970458	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('1560970458',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:264936532	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:962229899	Type:SECTION_HEADER	Title:Statistics
        //ID:770295414	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:259066464	Type:MULTIPLE_CHOICE	Title:Measure of Central Tendency
        pForm.setDescription('259066464',covariates.Statistics);
        //ID:2117394549	Type:MULTIPLE_CHOICE	Title:Measure of Spread
        //ID:663660107	Type:SECTION_HEADER	Title:Synaptic Parameters
        //ID:221526871	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:237036393	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:1213009303	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('1213009303',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:1548908917	Type:PARAGRAPH_TEXT	Title:Frequency (Hz)
        //ID:1761331335	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:1932551949	Type:PARAGRAPH_TEXT	Title:Average Amplitude (pA)
        //ID:2103139120	Type:PARAGRAPH_TEXT	Title:Average Potency (pA)
        //ID:2081447891	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (pA)
        //ID:753201057	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:628161695	Type:PARAGRAPH_TEXT	Title:Slope (ΔmV/Δms)
        //ID:2143456017	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:847065709	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:709336773	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:602698390	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:1121298630	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:2085839814	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:563714426	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:1926689889	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:616935083	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:2141827831	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:221133860	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:1813163913	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:65137305	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:1444726798	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:1388386787	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:733489808	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:2078334143	Type:PARAGRAPH_TEXT	Title:τ - 2exp-Model (ms)
        //ID:1153442943	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:1743809599	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:1112756034	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:791546712	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:209834553	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:1244491732	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:1589840923	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:1595518338	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:357104569	Type:MULTIPLE_CHOICE	Title:Quantal Events
        break;
      case 'uPSP':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Unitary Potentials (uPSP)');
        //ID:570119060	Type:PAGE_BREAK	Title:Unitary Potentials (uPSP)
        //ID:1894463225	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:304789355	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:1670263156	Type:SECTION_HEADER	Title:Postsynaptic Membrane
        //ID:336517228	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('336517228',((dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}'));
        //ID:2013943367	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:766847912	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('766847912',evidence.RMPorVh);
          //ID:362152624	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('362152624','0');
        } else {
          //ID:1988223501	Type:PARAGRAPH_TEXT	Title:Steady State Membrane Potential (mV)
          pForm.prefillEmptyItem('1988223501',evidence.RMPorVh);
          //ID:362152624	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('362152624',' ');
        }
        //ID:1795633290	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('1795633290',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:576821608	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:2119507832	Type:SECTION_HEADER	Title:Statistics
        //ID:285582316	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:1717012201	Type:MULTIPLE_CHOICE	Title:Measure of Central Tendency
        pForm.setDescription('1717012201',covariates.Statistics);
        //ID:2120402679	Type:MULTIPLE_CHOICE	Title:Measure of Spread
        //ID:1130021906	Type:SECTION_HEADER	Title:Synaptic Parameters
        //ID:775905554	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:1781312653	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:419737772	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('419737772',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:232892583	Type:SECTION_HEADER	Title:Failure Rate
        //ID:1794092096	Type:PARAGRAPH_TEXT	Title:1st Failure Rate (%)
        //ID:1026036900	Type:PARAGRAPH_TEXT	Title:2nd Failure Rate (%)
        //ID:981609704	Type:PARAGRAPH_TEXT	Title:3rd Failure Rate (%)
        //ID:1194140927	Type:PARAGRAPH_TEXT	Title:4th Failure Rate (%)
        //ID:1955200773	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:2144516332	Type:PARAGRAPH_TEXT	Title:Average Amplitude (mV)
        //ID:1836999168	Type:PARAGRAPH_TEXT	Title:Average Potency (mV)
        //ID:1934662848	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (mV)
        //ID:567254740	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:1784257804	Type:PARAGRAPH_TEXT	Title:Slope (ΔmV/Δms)
        //ID:64225649	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:495838490	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:1011933436	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:313076518	Type:SECTION_HEADER	Title:Latency
        //ID:8981780	Type:PARAGRAPH_TEXT	Title:Latency (ms)
        //ID:128126354	Type:PARAGRAPH_TEXT	Title:Relative Delay (ms)
        //ID:1556713991	Type:SECTION_HEADER	Title:Latency-to-Kinetics
        //ID:1400936652	Type:PARAGRAPH_TEXT	Title:AP-10% Rise time (ms)
        //ID:1938060403	Type:PARAGRAPH_TEXT	Title:AP-20% Rise time (ms)
        //ID:1867625778	Type:PARAGRAPH_TEXT	Title:AP-100% Rise time (ms)
        //ID:895517847	Type:PARAGRAPH_TEXT	Title:AP-50% Decay time (ms)
        //ID:276580185	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:1474064521	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:1500820610	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:1214411446	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:587941151	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:1354343824	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:131189971	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:80368927	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:1097346288	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:2011931571	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:681193225	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:1635104349	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:1299814076	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:1933546017	Type:PARAGRAPH_TEXT	Title:τ - 2exp-Model (ms)
        //ID:1158616015	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:1661807984	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:868397452	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:650028441	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:809357765	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:687839622	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:2061253119	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:640776671	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:51372518	Type:SECTION_HEADER	Title:Short-Term Plasticity (ST-P)
        //ID:315691427	Type:PARAGRAPH_TEXT	Title:ST-P Sample Size
        //ID:845913872	Type:PARAGRAPH_TEXT	Title:Inter Stimulus Interval (ms)
        //ID:60313155	Type:MULTIPLE_CHOICE	Title:Qualitative ST-P
        //ID:1990689856	Type:PARAGRAPH_TEXT	Title:ST-P Type Ratios
        //ID:1942822576	Type:SECTION_HEADER	Title:2:1 Short-Term Plasticity
        //ID:1453635040	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio
        //ID:1047988903	Type:PARAGRAPH_TEXT	Title:(2-1):1 Paired-pulse amplitude ratio
        //ID:1025689105	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse slope ratio
        //ID:1512636320	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse summation ratio
        //ID:46789494	Type:SECTION_HEADER	Title:Multiple-pulse Short-Term Plasticity
        //ID:759362541	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s)
        pForm.prefillEmptyItem('759362541',covariates.IntStimProtocol);
        //ID:953695801	Type:PARAGRAPH_TEXT	Title:3:1 Paired-pulse amplitude ratio
        //ID:830413276	Type:PARAGRAPH_TEXT	Title:4:1 Paired-pulse amplitude ratio
        //ID:1123814716	Type:PARAGRAPH_TEXT	Title:5:1 Paired-pulse amplitude ratio
        //ID:736674823	Type:PARAGRAPH_TEXT	Title:6:1 Paired-pulse amplitude ratio
        //ID:852024941	Type:PARAGRAPH_TEXT	Title:7:1 Paired-pulse amplitude ratio
        //ID:153727569	Type:PARAGRAPH_TEXT	Title:8:1 Paired-pulse amplitude ratio
        //ID:778220895	Type:PARAGRAPH_TEXT	Title:9:1 Paired-pulse amplitude ratio
        //ID:1545348785	Type:PARAGRAPH_TEXT	Title:10:1 Paired-pulse amplitude ratio
        //ID:1647807764	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential induction time constants
        //ID:1426278114	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential induction time constants
        //ID:1618322066	Type:PARAGRAPH_TEXT	Title:Multiple-pulse single exponential recovery time constant
        //ID:906961504	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential recovery time constants
        //ID:230915588	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential recovery time constants
        //ID:846971764	Type:SECTION_HEADER	Title:Tsodyks and Markram Model Parameters
        //ID:1093021328	Type:PARAGRAPH_TEXT	Title:Synaptic Resource Recovery Time Constant (𝜏ᵣ)
        //ID:1899212293	Type:PARAGRAPH_TEXT	Title:Synaptic Facilitation Time Constant (𝜏ᶠ)
        //ID:294799600	Type:PARAGRAPH_TEXT	Title:Synaptic Release Probability (F)
        //ID:5529568	Type:SECTION_HEADER	Title:Long-Term Plasticity (LT-P)
        //ID:439284473	Type:PARAGRAPH_TEXT	Title:LT-P Sample Size
        //ID:1035761729	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s) 
        //ID:1881291135	Type:PARAGRAPH_TEXT	Title:Failure Rate change (%)
        //ID:1628854073	Type:PARAGRAPH_TEXT	Title:Amplitude change (%)
        //ID:1634725731	Type:PARAGRAPH_TEXT	Title:Potency change (%)
        //ID:413271726	Type:PARAGRAPH_TEXT	Title:Slope change (%)
        //ID:1459349338	Type:PARAGRAPH_TEXT	Title:Normalized Slope change (%)
        //ID:424263117	Type:PARAGRAPH_TEXT	Title:Conductance change (%)
        //ID:321808882	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio change (%)
        //ID:470776803	Type:PARAGRAPH_TEXT	Title:STDP
        //ID:1418426278	Type:SECTION_HEADER	Title:Other
        //ID:1220178917	Type:PARAGRAPH_TEXT	Title:Electrical coupling ratio (%)
        //ID:1023200219	Type:PARAGRAPH_TEXT	Title:Electrical coupling conductance (nS)
        //ID:638002243	Type:MULTIPLE_CHOICE	Title:Quantal Events
        break;
      case 'uPSC':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Unitary Currents (uPSC)');
        //ID:367793735	Type:PAGE_BREAK	Title:Unitary Currents (uPSC)
        //ID:646965923	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:2145805456	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:138331116	Type:SECTION_HEADER	Title:Postsynaptic Membrane (mV)
        //ID:1883690145	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('1883690145',(dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}');
        //ID:1347925473	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:1760358924	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('1760358924',evidence.RMPorVh);
        } else {
          //ID:182979407	Type:PARAGRAPH_TEXT	Title:Holding Potential (mV)
          pForm.prefillEmptyItem('182979407',evidence.RMPorVh);
        }
        //ID:1286889803	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('1286889803',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:87459969	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:269539464	Type:SECTION_HEADER	Title:Statistics
        //ID:270447370	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:1653208216	Type:MULTIPLE_CHOICE	Title:Measure of Central Tendency
        pForm.setDescription('1653208216',covariates.Statistics);
        //ID:1871613254	Type:MULTIPLE_CHOICE	Title:Measure of Spread
        //ID:1279672349	Type:SECTION_HEADER	Title:Synaptic Parameters
        //ID:89947352	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:1866547245	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:1380312248	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('1380312248',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:731983737	Type:SECTION_HEADER	Title:Failure Rate
        //ID:997663899	Type:PARAGRAPH_TEXT	Title:1st Failure Rate (%)
        //ID:198508083	Type:PARAGRAPH_TEXT	Title:2nd Failure Rate (%)
        //ID:639404367	Type:PARAGRAPH_TEXT	Title:3rd Failure Rate (%)
        //ID:890633062	Type:PARAGRAPH_TEXT	Title:4th Failure Rate (%)
        //ID:53050717	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:760261080	Type:PARAGRAPH_TEXT	Title:Average Amplitude (pA)
        //ID:1190957429	Type:PARAGRAPH_TEXT	Title:Average Potency (pA)
        //ID:948269845	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (pA)
        //ID:253865002	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:121238756	Type:PARAGRAPH_TEXT	Title:Slope (ΔpA/Δms)
        //ID:1956103429	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:526378277	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:1714579301	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:1627076043	Type:SECTION_HEADER	Title:Latency
        //ID:2049001586	Type:PARAGRAPH_TEXT	Title:Latency (ms)
        //ID:383251841	Type:PARAGRAPH_TEXT	Title:Relative Delay (ms)
        //ID:1401185160	Type:SECTION_HEADER	Title:Latency-to-Kinetics
        //ID:1839857003	Type:PARAGRAPH_TEXT	Title:AP-10% Rise time (ms)
        //ID:793548537	Type:PARAGRAPH_TEXT	Title:AP-20% Rise time (ms)
        //ID:382203936	Type:PARAGRAPH_TEXT	Title:AP-100% Rise time (ms)
        //ID:1031406091	Type:PARAGRAPH_TEXT	Title:AP-50% Decay time (ms)
        //ID:173056524	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:1069107988	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:766985641	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:1862458215	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:1141280999	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:2071663294	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:2087147582	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:1149335173	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:1316290031	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:299133008	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:395805674	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:1392753728	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:1622245305	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:1746234691	Type:PARAGRAPH_TEXT	Title:τ - 2exp-Model (ms)
        //ID:1621785824	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:1896626373	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:662577469	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:1622672508	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:1639135874	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:1149049987	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:501888621	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:1202545766	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:766387667	Type:SECTION_HEADER	Title:Short-Term Plasticity (ST-P)
        //ID:2003128042	Type:PARAGRAPH_TEXT	Title:ST-P Sample Size
        //ID:341058259	Type:PARAGRAPH_TEXT	Title:Inter Stimulus Interval (ms)
        //ID:1675575476	Type:MULTIPLE_CHOICE	Title:Qualitative ST-P
        //ID:861785565	Type:PARAGRAPH_TEXT	Title:ST-P Type Ratios
        //ID:1147819470	Type:SECTION_HEADER	Title:2:1 Short-Term Plasticity
        //ID:784731447	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio
        //ID:833127547	Type:PARAGRAPH_TEXT	Title:(2-1):1 Paired-pulse amplitude ratio
        //ID:107034740	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse slope ratio
        //ID:1152716817	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse summation ratio
        //ID:1487561528	Type:SECTION_HEADER	Title:Multiple-pulse Short-Term Plasticity
        //ID:1846413186	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s)
        pForm.prefillEmptyItem('1846413186',covariates.IntStimProtocol);
        //ID:837302549	Type:PARAGRAPH_TEXT	Title:3:1 Paired-pulse amplitude ratio
        //ID:1435683142	Type:PARAGRAPH_TEXT	Title:4:1 Paired-pulse amplitude ratio
        //ID:1527430622	Type:PARAGRAPH_TEXT	Title:5:1 Paired-pulse amplitude ratio
        //ID:909520179	Type:PARAGRAPH_TEXT	Title:6:1 Paired-pulse amplitude ratio
        //ID:1016705586	Type:PARAGRAPH_TEXT	Title:7:1 Paired-pulse amplitude ratio
        //ID:2035250173	Type:PARAGRAPH_TEXT	Title:8:1 Paired-pulse amplitude ratio
        //ID:2112662940	Type:PARAGRAPH_TEXT	Title:9:1 Paired-pulse amplitude ratio
        //ID:1953432461	Type:PARAGRAPH_TEXT	Title:10:1 Paired-pulse amplitude ratio
        //ID:381658574	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential induction time constants
        //ID:1680432018	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential induction time constants
        //ID:1614672499	Type:PARAGRAPH_TEXT	Title:Multiple-pulse single exponential recovery time constant
        //ID:1297989136	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential recovery time constants
        //ID:135686950	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential recovery time constants
        //ID:667424457	Type:SECTION_HEADER	Title:Tsodyks and Markram Model Parameters
        //ID:1753507516	Type:PARAGRAPH_TEXT	Title:Synaptic Resource Recovery Time Constant (𝜏ᵣ)
        //ID:1678160603	Type:PARAGRAPH_TEXT	Title:Synaptic Facilitation Time Constant (𝜏ᶠ)
        //ID:430278002	Type:PARAGRAPH_TEXT	Title:Synaptic Release Probability (F)
        //ID:410299224	Type:SECTION_HEADER	Title:Long-Term Plasticity (LT-P)
        //ID:1314938576	Type:PARAGRAPH_TEXT	Title:LT-P Sample Size
        //ID:1203535293	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s) 
        //ID:1550458073	Type:PARAGRAPH_TEXT	Title:Failure Rate change (%)
        //ID:1539495313	Type:PARAGRAPH_TEXT	Title:Amplitude change (%)
        //ID:1157241891	Type:PARAGRAPH_TEXT	Title:Potency change (%)
        //ID:88114802	Type:PARAGRAPH_TEXT	Title:Slope change (%)
        //ID:1173741870	Type:PARAGRAPH_TEXT	Title:Normalized Slope change (%)
        //ID:1757715651	Type:PARAGRAPH_TEXT	Title:Conductance change (%)
        //ID:571664364	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio change (%)
        //ID:980332733	Type:PARAGRAPH_TEXT	Title:STDP
        //ID:241195129	Type:SECTION_HEADER	Title:Other
        //ID:536216644	Type:PARAGRAPH_TEXT	Title:Electrical coupling ratio (%)
        //ID:1885441925	Type:PARAGRAPH_TEXT	Title:Electrical coupling conductance (nS)
        //ID:1955656292	Type:MULTIPLE_CHOICE	Title:Quantal Events
        break;
      case 'ePSP':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Evoked Potentials (ePSP)');
        //ID:954095570	Type:PAGE_BREAK	Title:Evoked Potentials (ePSP)
        //ID:758395333	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:356322618	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:1563201628	Type:SECTION_HEADER	Title:Postsynaptic Membrane
        //ID:1305317523	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('1305317523',(dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}');
        //ID:1519191194	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:725904432	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('725904432',evidence.RMPorVh);
          //ID:1322135857	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('1322135857','0');
        } else {
          //ID:280076797	Type:PARAGRAPH_TEXT	Title:Steady State Membrane Potential (mV)
          pForm.prefillEmptyItem('280076797',evidence.RMPorVh);
          //ID:1322135857	Type:PARAGRAPH_TEXT	Title:Clamped Current (nA)
          pForm.prefillEmptyItem('1322135857',' ');
        }      
        //ID:997575196	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('997575196',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:514597225	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:474306556	Type:SECTION_HEADER	Title:Statistics
        //ID:914924945	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:1712141964	Type:MULTIPLE_CHOICE	Title:Measure of Central Tendency
        pForm.setDescription('1712141964',covariates.Statistics);
        //ID:959794961	Type:MULTIPLE_CHOICE	Title:Measure of Spread
        //ID:1553760774	Type:SECTION_HEADER	Title:Synaptic Parameters
        //ID:509604390	Type:MULTIPLE_CHOICE	Title:Stimulation Method
        //ID:1675807610	Type:PARAGRAPH_TEXT	Title:Stimulation Region
        //ID:571191364	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s)
        pForm.prefillEmptyItem('571191364',covariates.ExtStimProtocol);
        //ID:230871403	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:52393348	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:1186412212	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('1186412212',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:769865310	Type:SECTION_HEADER	Title:Failure Rate
        //ID:1704608054	Type:PARAGRAPH_TEXT	Title:1st Failure Rate (%)
        //ID:1191559565	Type:PARAGRAPH_TEXT	Title:2nd Failure Rate (%)
        //ID:361339537	Type:PARAGRAPH_TEXT	Title:3rd Failure Rate (%)
        //ID:1678372418	Type:PARAGRAPH_TEXT	Title:4th Failure Rate (%)
        //ID:317495645	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:1836226693	Type:PARAGRAPH_TEXT	Title:Average Amplitude (mV)
        //ID:1873112576	Type:PARAGRAPH_TEXT	Title:Average Potency (mV)
        //ID:723111876	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (mV)
        //ID:537970811	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:531623263	Type:PARAGRAPH_TEXT	Title:Slope (ΔmV/Δms)
        //ID:327626835	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:718674941	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:811150005	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:1662495684	Type:SECTION_HEADER	Title:Latency
        //ID:1183233054	Type:PARAGRAPH_TEXT	Title:Latency (ms)
        //ID:844479697	Type:PARAGRAPH_TEXT	Title:Relative Delay (ms)
        //ID:2083361127	Type:SECTION_HEADER	Title:Latency-to-Kinetics
        //ID:883335161	Type:PARAGRAPH_TEXT	Title:AP-10% Rise time (ms)
        //ID:688189994	Type:PARAGRAPH_TEXT	Title:AP-20% Rise time (ms)
        //ID:270999779	Type:PARAGRAPH_TEXT	Title:AP-100% Rise time (ms)
        //ID:1807029658	Type:PARAGRAPH_TEXT	Title:AP-50% Decay time (ms)
        //ID:256727618	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:1213006805	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:707685809	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:2077607185	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:1452781406	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:1842981087	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:834433306	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:1405074222	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:410269381	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:1087952587	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:820192413	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:936308066	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:1779869163	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:1113231881	Type:PARAGRAPH_TEXT	Title:τ - 2exp-Model (ms)
        //ID:1274844501	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:330341292	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:610613378	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:412383801	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:499054789	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:600442765	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:87483279	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:1549461844	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:509579889	Type:SECTION_HEADER	Title:Short-Term Plasticity (ST-P)
        //ID:1125211831	Type:PARAGRAPH_TEXT	Title:ST-P Sample Size
        //ID:1457912889	Type:PARAGRAPH_TEXT	Title:Inter Stimulus Interval (ms)
        //ID:1127895128	Type:MULTIPLE_CHOICE	Title:Qualitative ST-P
        //ID:143930095	Type:PARAGRAPH_TEXT	Title:ST-P Type Ratios
        //ID:47027018	Type:SECTION_HEADER	Title:2:1 Short-Term Plasticity
        //ID:130218524	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio
        //ID:663312433	Type:PARAGRAPH_TEXT	Title:(2-1):1 Paired-pulse amplitude ratio
        //ID:247558582	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse slope ratio
        //ID:1483238125	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse summation ratio
        //ID:1342857036	Type:SECTION_HEADER	Title:Multiple-pulse Short-Term Plasticity
        //ID:133771767	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s)
        //ID:1944889336	Type:PARAGRAPH_TEXT	Title:3:1 Paired-pulse amplitude ratio
        //ID:1003578029	Type:PARAGRAPH_TEXT	Title:4:1 Paired-pulse amplitude ratio
        //ID:530970690	Type:PARAGRAPH_TEXT	Title:5:1 Paired-pulse amplitude ratio
        //ID:325012910	Type:PARAGRAPH_TEXT	Title:6:1 Paired-pulse amplitude ratio
        //ID:2017636474	Type:PARAGRAPH_TEXT	Title:7:1 Paired-pulse amplitude ratio
        //ID:913169454	Type:PARAGRAPH_TEXT	Title:8:1 Paired-pulse amplitude ratio
        //ID:2088424895	Type:PARAGRAPH_TEXT	Title:9:1 Paired-pulse amplitude ratio
        //ID:1258322380	Type:PARAGRAPH_TEXT	Title:10:1 Paired-pulse amplitude ratio
        //ID:1589395785	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential induction time constants
        //ID:45288	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential induction time constants
        //ID:661320042	Type:PARAGRAPH_TEXT	Title:Multiple-pulse single exponential recovery time constant
        //ID:366944239	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential recovery time constants
        //ID:2000974039	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential recovery time constants
        //ID:2016396700	Type:SECTION_HEADER	Title:Tsodyks and Markram Model Parameters
        //ID:1509125090	Type:PARAGRAPH_TEXT	Title:Synaptic Resource Recovery Time Constant (𝜏ᵣ)
        //ID:1503214232	Type:PARAGRAPH_TEXT	Title:Synaptic Facilitation Time Constant (𝜏ᶠ)
        //ID:321426725	Type:PARAGRAPH_TEXT	Title:Synaptic Release Probability (F)
        //ID:1454017149	Type:SECTION_HEADER	Title:Long-Term Plasticity (LT-P)
        //ID:843693811	Type:PARAGRAPH_TEXT	Title:LT-P Sample Size
        //ID:1062684050	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s) 
        //ID:2127747752	Type:PARAGRAPH_TEXT	Title:Failure Rate change (%)
        //ID:685810279	Type:PARAGRAPH_TEXT	Title:Amplitude change (%)
        //ID:90271655	Type:PARAGRAPH_TEXT	Title:Potency change (%)
        //ID:1985608298	Type:PARAGRAPH_TEXT	Title:Slope change (%)
        //ID:40293363	Type:PARAGRAPH_TEXT	Title:Normalized Slope change (%)
        //ID:138834462	Type:PARAGRAPH_TEXT	Title:Conductance change (%)
        //ID:588249608	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio change (%)
        //ID:272083772	Type:PARAGRAPH_TEXT	Title:STDP
        break;
      case 'ePSC':
        //ID:1173200506	Type:MULTIPLE_CHOICE	Title:Recorded Modality
        pForm.prefillItem('1173200506','Evoked Currents (ePSC)');
        //ID:714132856	Type:PAGE_BREAK	Title:Evoked Currents (ePSC)
        //ID:970590711	Type:MULTIPLE_CHOICE	Title:Section Marker
        //ID:82994963	Type:MULTIPLE_CHOICE	Title:Has Slow NMDA or GABA-B Component?
        //ID:606923254	Type:SECTION_HEADER	Title:Postsynaptic Membrane
        //ID:808792303	Type:PARAGRAPH_TEXT	Title:Fast Synaptic 𝐸ᵣₑᵥ (AMPA, GABA-A or Mixed)
        pForm.prefillEmptyItem('808792303',(dash2null(evidence.ErevAuthors)) ? tagRefIDUniversal(evidence.ErevAuthors,[covRefs,synRefs]) : evidence.ErevCalculated+'@{calculated}');
        //ID:635382742	Type:PARAGRAPH_TEXT	Title:Slow Synaptic 𝐸ᵣₑᵥ (NMDA, GABA-B or Mixed)
        if (String(evidence.RMPorVh).match('RMP')) {
          //ID:320612606	Type:PARAGRAPH_TEXT	Title:Resting Membrane Potential (mV)
          pForm.prefillEmptyItem('320612606',evidence.RMPorVh);
        } else {
          //ID:1994464049	Type:PARAGRAPH_TEXT	Title:Holding Potential (mV)
          pForm.prefillEmptyItem('1994464049',evidence.RMPorVh);
        }      
        //ID:781218021	Type:PARAGRAPH_TEXT	Title:Temperature (°C)
        pForm.prefillEmptyItem('781218021',tagRefIDUniversal(covariates.Temperature,[covRefs,synRefs]));
        //ID:1577542343	Type:PARAGRAPH_TEXT	Title:Q₁₀
        //ID:1714102517	Type:SECTION_HEADER	Title:Statistics
        //ID:38162426	Type:PARAGRAPH_TEXT	Title:Sample Size
        //ID:1555649244	Type:MULTIPLE_CHOICE	Title:Measure of Central Tendency
        pForm.setDescription('1555649244',covariates.Statistics);
        //ID:207137548	Type:MULTIPLE_CHOICE	Title:Measure of Spread
        //ID:1651813361	Type:SECTION_HEADER	Title:Synaptic Parameter
        //ID:925670235	Type:MULTIPLE_CHOICE	Title:Stimulation Method
        //ID:769938451	Type:PARAGRAPH_TEXT	Title:Stimulation Region
        //ID:1705092766	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s)
        pForm.prefillEmptyItem('1705092766',covariates.ExtStimProtocol);
        //ID:765592262	Type:MULTIPLE_CHOICE	Title:Recording Method
        //ID:1273711824	Type:MULTIPLE_CHOICE	Title:Traces
        //ID:1944774554	Type:PARAGRAPH_TEXT	Title:Averaged Traces Number
        if (findPranteses.test(covariates.Sweeps)) 
          pForm.prefillEmptyItem('1944774554',tagRefIDUniversal(findPranteses.exec(covariates.Sweeps)[1],covRefs));
        //ID:229786772	Type:SECTION_HEADER	Title:Failure Rate
        //ID:1002410325	Type:PARAGRAPH_TEXT	Title:1st Failure Rate (%)
        //ID:1754243754	Type:PARAGRAPH_TEXT	Title:2nd Failure Rate (%)
        //ID:192730840	Type:PARAGRAPH_TEXT	Title:3rd Failure Rate (%)
        //ID:341999553	Type:PARAGRAPH_TEXT	Title:4th Failure Rate (%)
        //ID:1348095000	Type:SECTION_HEADER	Title:Synaptic Amplitude
        //ID:1396592795	Type:PARAGRAPH_TEXT	Title:Average Amplitude (pA)
        //ID:686752152	Type:PARAGRAPH_TEXT	Title:Average Potency (pA)
        //ID:117246091	Type:PARAGRAPH_TEXT	Title:Max Peak Amplitude (pA)
        //ID:1553990745	Type:PARAGRAPH_TEXT	Title:Relative Amplitude
        //ID:1620115265	Type:PARAGRAPH_TEXT	Title:Slope (ΔpA/Δms)
        //ID:1963027358	Type:PARAGRAPH_TEXT	Title:Conductance (nS)
        //ID:295774390	Type:PARAGRAPH_TEXT	Title:Relative Conductance
        //ID:376428458	Type:PARAGRAPH_TEXT	Title:Charge Transfer (pC)
        //ID:330356756	Type:SECTION_HEADER	Title:Latency
        //ID:1301028007	Type:PARAGRAPH_TEXT	Title:Latency (ms)
        //ID:752831227	Type:PARAGRAPH_TEXT	Title:Relative Delay (ms)
        //ID:1142323946	Type:SECTION_HEADER	Title:Latency-to-Kinetics
        //ID:1132056001	Type:PARAGRAPH_TEXT	Title:AP-10% Rise time (ms)
        //ID:1688940686	Type:PARAGRAPH_TEXT	Title:AP-20% Rise time (ms)
        //ID:1902027996	Type:PARAGRAPH_TEXT	Title:AP-100% Rise time (ms)
        //ID:533362505	Type:PARAGRAPH_TEXT	Title:AP-50% Decay time (ms)
        //ID:1009773430	Type:SECTION_HEADER	Title:Rise Kinetics
        //ID:225713264	Type:PARAGRAPH_TEXT	Title:0-100% Rise time (ms)
        //ID:1061256993	Type:PARAGRAPH_TEXT	Title:10-90% Rise time (ms)
        //ID:741398298	Type:PARAGRAPH_TEXT	Title:20-80% Rise time (ms)
        //ID:883425764	Type:PARAGRAPH_TEXT	Title:Rise time constant (ms)
        //ID:1417034708	Type:PARAGRAPH_TEXT	Title:Rise time of unspecified type (ms)
        //ID:1963674722	Type:SECTION_HEADER	Title:Decay Kinetics
        //ID:1655699783	Type:PARAGRAPH_TEXT	Title:100-0% Decay time (ms)
        //ID:1922981520	Type:PARAGRAPH_TEXT	Title:100-37% Decay time (ms)
        //ID:246363078	Type:PARAGRAPH_TEXT	Title:100-50% Decay time (ms)
        //ID:2105925480	Type:PARAGRAPH_TEXT	Title:100-63% Decay time (ms)
        //ID:846098129	Type:PARAGRAPH_TEXT	Title:66-30% Decay time (ms)
        //ID:1277947413	Type:PARAGRAPH_TEXT	Title:τ - TM-Model (ms)
        //ID:460020503	Type:PARAGRAPH_TEXT	Title:τ - 2exp-Model (ms)
        //ID:853192977	Type:PARAGRAPH_TEXT	Title:τ₁ - Double exponential decay time constants
        //ID:1642439641	Type:PARAGRAPH_TEXT	Title:A₁ - Double exponential decay amplitude
        //ID:1537823484	Type:PARAGRAPH_TEXT	Title:τ₂ - Double exponential decay time constants
        //ID:488292679	Type:PARAGRAPH_TEXT	Title:Weighted decay time constant (ms)
        //ID:1223387519	Type:PARAGRAPH_TEXT	Title:Decay time of unspecified type (ms)
        //ID:561977513	Type:SECTION_HEADER	Title:Rise-to-Decay Kinetics
        //ID:1751338615	Type:PARAGRAPH_TEXT	Title:0-50% Rise-to-Decay time (ms)
        //ID:1145716053	Type:PARAGRAPH_TEXT	Title:50-50% Rise-to-Decay time (ms)
        //ID:1758054914	Type:SECTION_HEADER	Title:Short-Term Plasticity (ST-P)
        //ID:1318680464	Type:PARAGRAPH_TEXT	Title:ST-P Sample Size
        //ID:855104603	Type:PARAGRAPH_TEXT	Title:Inter Stimulus Interval (ms)
        //ID:716790583	Type:MULTIPLE_CHOICE	Title:Qualitative ST-P
        //ID:1116892820	Type:PARAGRAPH_TEXT	Title:ST-P Type Ratios
        //ID:1306269626	Type:SECTION_HEADER	Title:2:1 Short-Term Plasticity
        //ID:1487880668	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio
        //ID:1267335030	Type:PARAGRAPH_TEXT	Title:(2-1):1 Paired-pulse amplitude ratio
        //ID:526791698	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse slope ratio
        //ID:1358943788	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse summation ratio
        //ID:1542680192	Type:SECTION_HEADER	Title:Multiple-pulse Short-Term Plasticity
        //ID:1249403607	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s) 
        //ID:1572783839	Type:PARAGRAPH_TEXT	Title:3:1 Paired-pulse amplitude ratio
        //ID:706025634	Type:PARAGRAPH_TEXT	Title:4:1 Paired-pulse amplitude ratio
        //ID:1767481196	Type:PARAGRAPH_TEXT	Title:5:1 Paired-pulse amplitude ratio
        //ID:2008402536	Type:PARAGRAPH_TEXT	Title:6:1 Paired-pulse amplitude ratio
        //ID:325504146	Type:PARAGRAPH_TEXT	Title:7:1 Paired-pulse amplitude ratio
        //ID:1354653786	Type:PARAGRAPH_TEXT	Title:8:1 Paired-pulse amplitude ratio
        //ID:1935815107	Type:PARAGRAPH_TEXT	Title:9:1 Paired-pulse amplitude ratio
        //ID:883284448	Type:PARAGRAPH_TEXT	Title:10:1 Paired-pulse amplitude ratio
        //ID:300519626	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential induction time constants
        //ID:1714844189	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential induction time constants
        //ID:566127899	Type:PARAGRAPH_TEXT	Title:Multiple-pulse single exponential recovery time constant
        //ID:1227289623	Type:PARAGRAPH_TEXT	Title:τ₁ - Multiple-pulse double exponential recovery time constants
        //ID:627053018	Type:PARAGRAPH_TEXT	Title:τ₂ - Multiple-pulse double exponential recovery time constants
        //ID:1961644537	Type:SECTION_HEADER	Title:Tsodyks and Markram Model Parameters
        //ID:1819660186	Type:PARAGRAPH_TEXT	Title:Synaptic Resource Recovery Time Constant (𝜏ᵣ)
        //ID:298713428	Type:PARAGRAPH_TEXT	Title:Synaptic Facilitation Time Constant (𝜏ᶠ)
        //ID:606538783	Type:PARAGRAPH_TEXT	Title:Synaptic Release Probability (F)
        //ID:645612322	Type:SECTION_HEADER	Title:Long-Term Plasticity (LT-P)
        //ID:1112708990	Type:PARAGRAPH_TEXT	Title:LT-P Sample Size
        //ID:1736099880	Type:PARAGRAPH_TEXT	Title:Presynaptic Stimulation Protocol(s) 
        //ID:1825502761	Type:PARAGRAPH_TEXT	Title:Failure Rate change (%)
        //ID:1475416330	Type:PARAGRAPH_TEXT	Title:Amplitude change (%)
        //ID:1950923689	Type:PARAGRAPH_TEXT	Title:Potency change (%)
        //ID:269416649	Type:PARAGRAPH_TEXT	Title:Slope change (%)
        //ID:612391809	Type:PARAGRAPH_TEXT	Title:Normalized Slope change (%)
        //ID:340120784	Type:PARAGRAPH_TEXT	Title:Conductance change (%)
        //ID:76525192	Type:PARAGRAPH_TEXT	Title:2:1 Paired-pulse amplitude ratio change (%)
        //ID:1007419556	Type:PARAGRAPH_TEXT	Title:STDP
        break;
      default:
        Logger.log('error in switch');
        break;
  }});
  //ID:801057430	Type:PAGE_BREAK	Title:Quantal Measures
  //ID:1681492433	Type:MULTIPLE_CHOICE	Title:Quantal Model
  //ID:1688337328	Type:PARAGRAPH_TEXT	Title:Release Sites # (n)
  //ID:905089759	Type:PARAGRAPH_TEXT	Title:Release Probability (p)
  //ID:11305912	Type:PARAGRAPH_TEXT	Title:Quanta Size or Amplitude [q] (mV or pA)
  //ID:1717456567	Type:PARAGRAPH_TEXT	Title:Mean = npq
  //ID:959549769	Type:PARAGRAPH_TEXT	Title:CV=√(q/M - 1/n)
  //ID:236503412	Type:PARAGRAPH_TEXT	Title:CV⁻² = np/(1-p)
  //ID:1029731155	Type:PARAGRAPH_TEXT	Title:Failure rate = F = (1-(M/(n.q)))^n
  //ID:362229739	Type:PARAGRAPH_TEXT	Title:Variance = qM - M²⁄n
  //ID:1880936807	Type:PARAGRAPH_TEXT	Title:V/M = q - M/n
  
  //ID:360422995	Type:PAGE_BREAK	Title:Covariates
  //ID:1383516774	Type:MULTIPLE_CHOICE	Title:Species
  //ID:1929289061	Type:PARAGRAPH_TEXT	Title:Strain
  //ID:1268392618	Type:MULTIPLE_CHOICE	Title:Slice Region
  //ID:49449155	Type:MULTIPLE_CHOICE	Title:Slice Orientation
  //ID:665351252	Type:PARAGRAPH_TEXT	Title:Slice Thickness (µm)
  //ID:2031543787	Type:MULTIPLE_CHOICE	Title:Subcellular Recording Domain
  //ID:1755334452	Type:PARAGRAPH_TEXT	Title:Input Resistance (MΩ)
  //ID:186450486	Type:PARAGRAPH_TEXT	Title:Membrane Time Constant (ms)
  //ID:978939684	Type:PARAGRAPH_TEXT	Title:Membrane Capacitance (pF)
  
  // Covariates
  //ID:1383516774	Type:MULTIPLE_CHOICE	Title:Species
  pForm.setDescription('1383516774',covariates.Species);
  //ID:1929289061	Type:PARAGRAPH_TEXT	Title:Strain
  pForm.prefillEmptyItem('1929289061',covariates.Strain);
  //ID:1268392618	Type:MULTIPLE_CHOICE	Title:Slice Region
  //ID:49449155	Type:MULTIPLE_CHOICE	Title:Slice Orientation
  //ID:665351252	Type:PARAGRAPH_TEXT	Title:Slice Thickness (µm)
  pForm.setDescription('665351252',covariates.SliceOrientation);
  pForm.prefillEmptyItem('665351252',tagRefIDUniversal(getEverythingWithinParentheses(covariates.SliceOrientation),covRefs));
  //ID:2031543787	Type:MULTIPLE_CHOICE	Title:Subcellular Recording Domain
  //ID:1755334452	Type:PARAGRAPH_TEXT	Title:Input Resistance (MΩ)
  pForm.prefillEmptyItem('1755334452',covariates.PostSynRin);
  //ID:186450486	Type:PARAGRAPH_TEXT	Title:Membrane Time Constant (ms)
  pForm.prefillEmptyItem('186450486',tagRefIDUniversal(covariates.PostSynTau,[covRefs,synRefs]));
  //ID:978939684	Type:PARAGRAPH_TEXT	Title:Membrane Capacitance (pF)
  pForm.prefillEmptyItem('978939684',covariates.PostSynCapacitance);
  
  //-------------------------------------
  
  var dID = getMaxOf('SD','Data ID')+1
  //ID:1630267501	Type:TEXT	Title:Data ID
  pForm.prefillItem('1630267501',dID);
  var eColumnObj = aR.getSheet().getRange('1:1').getValues().reduce(to1D).reduce(function(p,v,i){p[v]=i+1; return p},{});
  saveSingleColumnRange(aR,eColumnObj.dID,String(evidence.dID).split(/\s*[,;]+\s*/g).filter(Null).concat(String(dID)).filter(onlyUnique).join('; '));
  
  if (!(evidence.dSec === 'mPSP' || evidence.dSec === 'mPSP' || evidence.dSec === 'mPSC' || evidence.dSec === 'sPSP' || evidence.dSec === 'sPSC' || evidence.dSec === 'uPSP' || evidence.dSec === 'uPSC' || evidence.dSec === 'ePSP' || evidence.dSec === 'ePSC'))
    saveSingleColumnRange(aR,eColumnObj.dSec,(evidence.dSec+','+dSec).split(/\s*[,;]+\s*/g).filter(onlyUnique).filter(Null).join(','));
  
  
  //-------------------------------------

  return pForm.getPrefilledUrl();
}

function getEverythingWithinParentheses(txt) {
  return txt.split(/\s*,+\s*/g)
  .map(function(v){
    if (v) {
      var thickness = /\((.+?)\)/.exec(v)
      return (thickness) ? thickness[1] : ''
    } else {
      return ''
    }
  }).filter(Null).filter(onlyUnique).join(',') 
}