//Change Log
// since PMID -> 21060720 TrisGTP and TrisGDP should be Tris2GTP and Tris2GDP, respectively


//var reports = SpreadsheetApp.openById('1xTfv5-ZP5C7XQdHNJnGd0c_j8L7j1uWON8n92lVTA5s').getSheetByName('Erev');
//reports.clear();
//reports.appendRow(
//     ['Bath','Pipette','Temperature','Bath Ionic Strength','Pipette Ionic Strength','Experimental Junction Potential','Calculated Junction Potential','Vh without Vj correction',
//      'Vh with Vj correction','Vss without Vj correction', 'Vss with Vj correction', 'RMP without Vj correction','RMP with Vj correction',
//      'Erev_Glutamatergic_Calculated_AMPA_Ca_Impermeable','Erev_Glutamatergic_Calculated_AMPA_Ca_Permeable','Erev_Glutamatergic_Calculated_NMDA',
//      'Erev_Glutamatergic_Experimental_EPSC_without Vj correction','Erev_Glutamatergic_Experimental_EPSC_with Vj correction',
//      'Erev_Glutamatergic_Experimental_EPSP_without Vj correction','Erev_Glutamatergic_Experimental_EPSP_with Vj correction',
//      
//      'Erev_GABAergic_Calculated_GABA-A_gluconate_Impermeable','Erev_Calculated_GABA-A_gluconate_Permeable','Erev_GABAergic_Calculated_GABA-B',
//      'Erev_GABAergic_Experimental_IPSC_without Vj correction','Erev_GABAergic_Experimental_IPSC_with Vj correction',
//      'Erev_GABAergic_Experimental_IPSP_without Vj correction','Erev_GABAergic_Experimental_IPSP_with Vj correction']);
function eRev(){
//---------------whole-cell
  //24050405 Beed 2013 Inhibitory gradient along the dorsoventral axis in the medial entorhinal cortex.
//  new solution(celsius=35,
//               eSolution='119 NaCl, 26 NaHCO3, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4',
//               pSolution='145 KCl, 2 Na2ATP, 10 HEPES, 0.1 EGTA, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:-80},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='119 NaCl, 26 NaHCO3, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4',
//               pSolution='150 K-gluconate, 0.5 MgCl2, 1.1 EGTA, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:-80},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //23334580 Couey 2013 Recurrent inhibitory circuitry as a mechanism for grid formation.
//  new solution(celsius=34,
//               eSolution='127 NaCl, 25 NaHCO3, 2.5 KCl, 1.6 CaCl2, 1.25 NaH2PO4, 1.5 MgSO4',
//               pSolution='120 K-gluconate, 10 KCl, 10 HEPES, 10 K2-phosphocreatine, 4 MgATP, 0.4 K2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-56,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //21172609 Beed 2010 Analysis of excitatory microcircuitry in the medial entorhinal cortex reveals cell-type-specific differences.
//  new solution(celsius=33,
//               eSolution='119 NaCl, 26 NaHCO3, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4',
//               pSolution='150 K-gluconate, 0.5 MgCl2, 1.1 EGTA, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //18771693 Bendels 2008 A novel control software that improves the experimental workflow of scanning photostimulation experiments.
//  new solution(celsius=33,
//               eSolution='119 NaCl, 26 NaHCO3, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4',
//               pSolution='150 K-gluconate, 0.5 MgCl2, 1.1 EGTA, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //16641241 Kumar 2006 Hyperexcitability, interneurons, and loss of GABAergic synapses in entorhinal cortex in a model of temporal lobe epilepsy.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 26 NaHCO3, 3 KCl, 1.25 NaH2PO4, 2 MgSO4, 2 CaCl2',
//               pSolution='120 Cs-methanesulfonate, 10 HEPES, 8 NaCl, 2 MgATP, 0.3 Na2GTP, 5 QX314-Br, 0.1 BAPTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-58,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //20512133 Varga 2010 Target-selective GABAergic control of entorhinal cortex output.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='40 CsCl, 90 K-gluconate, 1.8 NaCl, 1.7 MgCl2, 3.5 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-55.63,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //15386594 Woodhall 2005 Fundamental differences in spontaneous synaptic inhibition between deep and superficial layers of the rat entorhinal cortex.
//  new solution(celsius=31,
//               eSolution='126 NaCl, 4.0 KCl, 2.0 CaCl2, 2.0 MgSO4, 1.25 NaH2PO4, 24.0 NaHCO3',
//               pSolution='120 CsCl, 10 HEPES, 5 QX314-Cl, 10 EGTA, 0.34 CaCl2, 1 MgCl2, 4 Na2ATP, 0.4 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //26606996 Sürmeli 2015 Molecularly Defined Circuitry Reveals Input-Output Segregation in Deep Layers of the Medial Entorhinal Cortex.
//  new solution(celsius=32,
//               eSolution='124 NaCl, 1.2 NaH2PO4, 2.5 KCl, 25 NaHCO3, 25 Glucose, 2 CaCl2, 1 MgCl2',
//               pSolution='130 K-gluconate, 10 KCl, 10 HEPES, 2 MgCl2, 0.1 EGTA, 2 Na2ATP, 0.3 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-64,Vh:NaN,Vss:-50},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12.5,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //22933799 Tahvildari 2012 Selective functional interactions between excitatory and inhibitory cortical neurons and differential contribution to persistent activity of the slow oscillation.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 25 NaHCO3, 1.25 NaH2PO4, 1 MgSO4, 1.2 CaCl2, 3 myo-inositol, 3 Na-pyruvate, 0.5 L-ascorbate',
//               pSolution='130 K-gluconate, 7 KCl, 10 HEPES, 4 MgATP, 0.3 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.4,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 25 NaHCO3, 1.25 NaH2PO4, 1 MgSO4, 1.2 CaCl2, 3 myo-inositol, 3 Na-pyruvate, 0.5 L-ascorbate',
//               pSolution='130 Cs-gluconate, 3.5 CsCl, 10 HEPES, 4 MgATP, 0.3 Na2GTP, 10 Na2-phosphocreatine, 3.5 QX314-Cl, 1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.4,CO2:true}).log();
  //26180200 Salkoff 2015 Synaptic Mechanisms of Tight Spike Synchrony at Gamma Frequency in Cerebral Cortex.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 25 NaHCO3, 1.25 NaH2PO4, 1.0 MgSO4, 1.3 CaCl2, 3 myo-inositol, 3 Na-pyruvate, 0.5 ascorbate',
//               pSolution='130 Cs–methanesulfonate, 8.0 NaCl, 10 HEPES, 4 MgATP, 0.3 Na2GTP, 6.0 QX314–Cl, 0.5 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.4,CO2:true}).log(); 
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 25 NaHCO3, 1.25 NaH2PO4, 1.0 MgSO4, 1.3 CaCl2, 3 myo-inositol, 3 Na-pyruvate, 0.5 ascorbate',
//               pSolution='130 K–gluconate, 10 Na-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 NaCl, 4 MgATP, 0.3 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.4,CO2:true}).log(); 
  //26711115 Fuchs 2016 Local and Distant Input Controlling Excitation in Layer II of the Medial Entorhinal Cortex.
//  new solution(celsius=34,
//               eSolution='125 NaCl, 2.5 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='130 K–gluconate, 10 Na-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 NaCl, 4 MgATP, 0.3 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //26446215 Böhm 2015 Functional Diversity of Subicular Principal Cells during Hippocampal Ripples.
//  new solution(celsius=31.5,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 1.0 NaH2PO4, 26 NaHCO3',
//               pSolution='120 Cs-gluconate, 10 HEPES, 5 EGTA, 10 KCl, 2 MgSO4, 1 Na2GTP, 3 MgATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-59.8,Vh:-53,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //IPSC:-65,EPSC:6 We are not sure the reported Erev is measured experimentally.
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.4,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 1.0 NaH2PO4, 26 NaHCO3',
//               pSolution='135 K-gluconate, 6 KCl, 2 MgCl2, 0.2 EGTA, 5 Na2-phosphocreatine, 2 Na2ATP, 0.5 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-62.7,Vh:NaN,Vss:-60},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //15147307 Kogo 2004 Depression of GABAergic input to identified hippocampal neurons by group III metabotropic glutamate receptors in the rat.
//  new solution(celsius=31,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2, 1.5 MgSO4',
//               pSolution='130 KCl, 4 MgATP, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=31,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2, 1.5 MgSO4',
//               pSolution='125 CsCl, 4 MgATP, 0.3 Na2GTP, 5 Na2-phosphocreatine, 10 QX314-Cl, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //17185334 Bullis 2007 Reversed somatodendritic I(h) gradient in a class of rat hippocampal neurons with pyramidal morphology.
//  new solution(celsius=31,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 25 NaHCO3, 1 NaH2PO4',
//               pSolution='120 K-methylsulfate, 20 KCl, 10 HEPES, 4 Na2ATP, 2 MgCl2, 0.3 Tris2GTP, 1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-67,Vh:NaN,Vss:-55},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //17332410 Lamsa 2007 Anti-Hebbian long-term potentiation in the hippocampal feedback inhibitory circuit.
//  new solution(celsius=31.5,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 25 NaHCO3, 1 NaH2PO4',
//               pSolution='117.5 Cs-gluconate, 17.5 CsCl, 10 KOH-HEPES, 10 BAPTA, 8 NaCl, 2 MgATP, 0.3 Na2GTP, 0.1 HCl4-spermine, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-65.2,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-4.73,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//  new solution(celsius=31.5,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 25 NaHCO3, 1 NaH2PO4',
//               pSolution='117.5 Cs-gluconate, 17.5 CsCl, 10 KOH-HEPES, 10 BAPTA, 8 NaCl, 2 MgATP, 0.3 Na2GTP, 0.1 HCl4-spermine, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-65.2,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-4.18,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //7517996 McBain 1994 Activation of metabotropic glutamate receptors differentially affects two classes of hippocampal interneurons and potentiates excitatory synaptic transmission.
//  new solution(celsius=23.5,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 1.5 CaCl2, 1.5 MgSO4',
//               pSolution='140 Cs-methanesulfonate, 10 HEPES, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-55.4,Vh:-70,Vss:-60},
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:3,correctedAlready:true}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //8757246 Maccaferri 1996 Long-term potentiation in distinct subtypes of hippocampal nonpyramidal neurons.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 CaCl2, 1.2 MgSO4',
//               pSolution='100 K-gluconate, 0.2 EGTA, 3.25 MgCl2, 3.75 NaCl, 2.0 Na2ATP, 0.3 Na2GTP, 40 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-49.8,Vh:NaN,Vss:-75},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
  //16177037 Zsiros 2005 Electrical coupling between interneurons with different excitable properties in the stratum lacunosum-moleculare of the juvenile CA1 rat hippocampus.
//  new solution(celsius=33,
//               eSolution='130 NaCl, 3.5 KCl, 1.25 NaH2PO4, 1 MgSO4, 1.5 CaCl2, 24 NaHCO3',
//               pSolution='125 K-methylsulfate, 4 NaCl, 4 MgATP, 0.3 Na2GTP, 16 KHCO3',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-67},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:8.5,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //20547684 Marchionni 2010 Distinctive properties of CXC chemokine receptor 4-expressing Cajal-Retzius cells versus GABAergic interneurons of the postnatal hippocampus.
//  new solution(celsius=33.5,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2',
//               pSolution='125 K-methylsulfate, 4 MgATP, 20 NaCl, 0.3 Na2GTP, 16 KHCO3, 10 QX314–Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//        //responses in this setting are in the presence of 4-AP and therefore the network is epileptic
//  new solution(celsius=33.5,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='125 K-methylsulfate, 4 MgATP, 20 NaCl, 0.3 Na2GTP, 16 KHCO3, 10 QX314–Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-35,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=33.5,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='125 KCl, 4 MgATP, 10 NaCl, 0.3 Na2GTP, 16 KHCO3, 10 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //10864941 Kirson 2000 Unique properties of NMDA receptors enhance synaptic excitation of radiatum giant cells in rat hippocampus.
//  new solution(celsius=22.5,
//               eSolution='125 NaCl, 2.5 KCl, 26.7 NaHCO3, 2.5 CaCl2, 1 MgCl2, 13 HEPES',
//               pSolution='120 K-gluconate, 1 EGTA, 10 HEPES, 2 MgCl2, 4 NaCl,1 CaCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:-64},
//               Erev:{IPSC:NaN,EPSC:-3.51789,IPSP:NaN,EPSP:NaN}, //AMPA RGC n=9
//               Vj:{exp:4,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:false}).log();
//  new solution(celsius=22.5,
//               eSolution='125 NaCl, 2.5 KCl, 26.7 NaHCO3, 2.5 CaCl2, 1 MgCl2, 13 HEPES',
//               pSolution='120 K-gluconate, 1 EGTA, 10 HEPES, 2 MgCl2, 4 NaCl,1 CaCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:-65},
//               Erev:{IPSC:NaN,EPSC:-2.79741,IPSP:NaN,EPSP:NaN}, //AMPA PC n=6
//               Vj:{exp:4,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:false}).log();
  //voltage clamp
//  new solution(celsius=22.5,
//               eSolution='125 NaCl, 2.5 KCl, 26.7 NaHCO3, 2.5 CaCl2, 13 HEPES, 1 MgCl2',
//               pSolution='110 CsF, 20 TEA-Cl, 10 BAPTA, 10 HEPES, 2 MgCl2, 4 NaCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-3.52,IPSP:NaN,EPSP:NaN},//AMPA RGC n=9
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=22.5,
//               eSolution='125 NaCl, 2.5 KCl, 26.7 NaHCO3, 2.5 CaCl2, 13 HEPES, 1 MgCl2',
//               pSolution='110 CsF, 20 TEA-Cl, 10 BAPTA, 10 HEPES, 2 MgCl2, 4 NaCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-2.80,IPSP:NaN,EPSP:NaN},//AMPA PC n=6
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=22.5,
//               eSolution='125 NaCl, 2.5 KCl, 26.7 NaHCO3, 2.5 CaCl2, 13 HEPES',//Mg free
//               pSolution='110 CsF, 20 TEA-Cl, 10 BAPTA, 10 HEPES, 2 MgCl2, 4 NaCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-3.52,IPSP:NaN,EPSP:NaN},//AMPA RGC n=9
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//    new solution(celsius=22.5,
//               eSolution='125 NaCl, 2.5 KCl, 26.7 NaHCO3, 2.5 CaCl2, 13 HEPES',//Mg free
//               pSolution='110 CsF, 20 TEA-Cl, 10 BAPTA, 10 HEPES, 2 MgCl2, 4 NaCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-2.80,IPSP:NaN,EPSP:NaN},//AMPA PC n=6
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //11306657 Bertrand 2001 Unitary synaptic currents between lacunosum-moleculare interneurones and pyramidal cells in rat hippocampus.
//  new solution(celsius=23,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 4 MgSO4, 4 CaCl2',
//               pSolution='140 K-gluconate, 5 NaCl, 0.5 EGTA, 2 MgCl2, 0.5 HEPES, 10 Na2-phosphocreatine, 2 Tris2ATP, 0.4 Tris2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-40,Vss:NaN},
//               Erev:{IPSC:-73.7,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //21060720 Chamberland 2010 Synapse-specific inhibitory control of hippocampal feedback inhibitory circuit.
//  new solution(celsius=31.5,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='130 K-methanesulfonate, 2 MgCl2, 10 Na2-phosphocreatine, 10 HEPES, 2 Tris2ATP, 0.2 Tris2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-40,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=31.5,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 4 MgSO4, 4 CaCl2',
//               pSolution='130 Cs-methylsulfate, 2 MgCl2, 10 Na2-phosphocreatine, 10 HEPES, 2 Tris2ATP, 0.2 Tris2GTP, 2 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:10,Vss:NaN},
//               Erev:{IPSC:-71.9,EPSC:10,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //22125513 Iball 2011 Endocannabinoid Release Modulates Electrical Coupling between CCK Cells Connected via Chemical and Electrical Synapses in CA1.
//  new solution(celsius=21,
//               eSolution='121 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 26 NaHCO3, 5 Na-pyruvate',
//               pSolution='144 K-gluconate, 3 MgCl2, 0.2 EGTA, 10 HEPES, 2 Na2ATP, 0.2 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:NaN,Vss:-55},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //22246433 Lovett-Barron 2012 Regulation of neuronal input transformations by tunable dendritic inhibition.
//  new solution(celsius=32.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2, 3 Na-pyruvate, 1 Na-ascorbate',
//               pSolution='130 K-gluconate, 8 KCl, 4 NaCl, 10 HEPES, 4 Mg2ATP, 0.3 Tris2GTP, 14 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-65},
//               Erev:{IPSC:-65,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
  //20107060 Nissen 2010 Cell type-specific long-term plasticity at glutamatergic synapses onto hippocampal interneurons expressing either parvalbumin or CB1 cannabinoid receptor.
//  new solution(celsius=32,
//               eSolution='119 NaCl, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4, 25 NaHCO3',
//               pSolution='145 CsCl, 20 HEPES, 0.2 Cs-EGTA, 8 NaCl, 2 MgATP, 0.3 Na2GTP, 5 QX314-Br, 0.5 HCl4-Spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-3.37,IPSP:NaN,EPSP:NaN}, //AACs CP-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='119 NaCl, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4, 25 NaHCO3',
//               pSolution='145 CsCl, 20 HEPES, 0.2 Cs-EGTA, 8 NaCl, 2 MgATP, 0.3 Na2GTP, 5 QX314-Br, 0.5 HCl4-Spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-11.178,IPSP:NaN,EPSP:NaN},//PV BC CP-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='119 NaCl, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4, 25 NaHCO3',
//               pSolution='145 CsCl, 20 HEPES, 0.2 Cs-EGTA, 8 NaCl, 2 MgATP, 0.3 Na2GTP, 5 QX314-Br, 0.5 HCl4-Spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:1.53076,IPSP:NaN,EPSP:NaN},//CB1 BC CI-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//        //PMID 8035215 for AAC RMP
//        new solution(celsius=34.5,
//               eSolution='126 NaCl, 3 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='1500 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-65.1,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//        //PMID 12562998 for CCK BC
//        new solution(celsius=34.5,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-CeSO4',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-64.5,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//        //PMID 11784700 CA1 Schaffer collateral associated
//        new solution(celsius=35,
//               eSolution='130 NaCl, 3.5 KCl, 2 CaCl2, 1.25 NaH2PO4, 1 MgSO4, 24 NaHCO3',
//               pSolution='126 K-gluconate, 4 KCl, 10 HEPES, 4 Mg-ATP, 0.3 Na-GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-60.6,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  
  //12097498 Maccaferri 2002 Control of feedforward dendritic inhibition by NMDA receptor-dependent spike timing in hippocampal interneurons.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2, 1.5 MgSO4',
//               pSolution='120 K-gluconate, 4 NaCl, 4 MgATP, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-63},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//  new solution(celsius=30,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2, 1.5 MgSO4',
//               pSolution='120 CsCl, 4 MgATP, 0.3 Na2GTP, 5 QX314-Br, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //15937481 Lamsa 2005 Hebbian LTP in feed-forward inhibitory interneurons and the temporal fidelity of input discrimination. CA1:SR Interneuron to CA1 Pyramidal
//  new solution(celsius=31.5,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 25 NaHCO3, 1 NaH2PO4',
//               pSolution='117.5 Cs-gluconate, 17.5 CsCl, 10 KOH–HEPES, 10 BAPTA, 8 NaCl, 2 Mg–ATP, 0.3 Na2-GTP, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-2.5,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //21486769 Evstratova 2011 Cell type-specific and activity-dependent dynamics of action potential-evoked Ca2+ signals in dendrites of hippocampal inhibitory interneurons.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='130 K-methanesulfonate, 2 MgCl2, 10 Na2-phosphocreatine, 10 HEPES, 3 ATP-Tris, 0.2 GTP-Tris',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //10747186 Maccaferri 2000 Cell surface domain specific postsynaptic currents evoked by identified GABAergic neurones in rat hippocampus in vitro.
//  new solution(celsius=30,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2, 1.5 MgSO4',
//               pSolution='100 CsCl, 2 MgCl2, 0.1 EGTA, 2 ATP, 0.3 GTP, 40 HEPES, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //20660272 Karayannis 2010 Slow GABA transient and receptor desensitization shape synaptic responses evoked by hippocampal neurogliaform cells.
//  new solution(celsius=31,
//               eSolution='130 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 2 MgCl2',
//               pSolution='88 KCl, 42 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 MgATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN},
//               Erev:{IPSC:-11,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //calculation not a measurement
//               Vj:{exp:11,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=31,
//               eSolution='130 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 2 MgCl2',
//               pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:16,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //16914682 Hardie 2006 Active and passive membrane properties and intrinsic kinetics shape synaptic inhibition in hippocampal CA1 pyramidal neurons.
//  new solution(celsius=33,
//               eSolution='127 NaCl, 1.21 KH2PO4, 1.87 KCl, 26 NaHCO3, 2.17 CaCl2, 1.44 MgSO4',
//               pSolution='140 K-gluconate, 10 HEPES, 5 NaCl, 4 MgATP, 10 Na2-phosphocreatine, 0.3 Na2GTP, 5 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-77,Vss:-96},
//               Erev:{IPSC:-79,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //24836505 Lee 2014 Parvalbumin-positive basket cells differentiate among hippocampal pyramidal cells.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='126 K–gluconate, 4 KCl, 10 HEPES, 4 MgATP, 0.3 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:-75.7,EPSC:NaN,IPSP:NaN,EPSP:NaN},//not a measurement calculated by authors
//               Vj:{exp:14.6,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
//  new solution(celsius=33,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='40 CsCl, 90 K–gluconate, 1.8 NaCl, 1.7 MgCl2, 3.5 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-80.9,Vh:-70,Vss:NaN},
//               Erev:{IPSC:-26.3,EPSC:NaN,IPSP:NaN,EPSP:NaN},//not a measurement calculated by authors
//               Vj:{exp:10.2,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //19339609 Karson 2009 Synaptic cross talk between perisomatic-targeting interneuron classes expressing cholecystokinin and parvalbumin in hippocampus.
//  new solution(celsius=22,
//               eSolution='120 NaCl, 3 KCl, 2 MgSO4, 2.5 CaCl2, 1 NaH2PO4, 25 NaHCO3',
//               pSolution='85 K-gluconate, 50 KCl, 10 HEPES, 3 MgATP, 0.3 TrisGTP, 0.1 CaCl2, 1 K-BAPTA, 1 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //20345910 Ali 2010 Asynchronous release of GABA via tonic cannabinoid receptor activation at identified interneuron synapses in rat CA1.
//  new solution(celsius=21,
//               eSolution='121 NaCl, 2 CaCl, 2.5 KCl, 1 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='144 K-gluconate, 0.2 EGTA, 10 HEPES, 3 MgCl2, 0.2 Na2ATP, 0.2 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-55},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //17567776 Ali 2007 Presynaptic Inhibition of GABAA receptor-mediated unitary IPSPs by cannabinoid receptors at synapses between CCK-positive interneurons in rat hippocampus.
//  new solution(celsius=21,
//               eSolution='121 NaCl, 2 CaCl, 2.5 KCl, 1 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='144 K-gluconate, 0.2 EGTA, 10 HEPES, 3 MgCl2, 0.2 Na2ATP, 0.2 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-55},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=21,
//               eSolution='121 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 26 NaHCO3',
//               pSolution='144 K-gluconate, 3 MgCl2, 0.2 EGTA, 10 HEPES, 2 Na2ATP, 0.2 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-55},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //21123660 Ali 2011 CB1 modulation of temporally distinct synaptic facilitation among local circuit interneurons mediated by N-type calcium channels in CA1.
//  new solution(celsius=21,
//               eSolution='121 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 26 NaHCO3',
//               pSolution='144 K-gluconate, 0.2 EGTA, 10 HEPES, 2 Na2ATP, 0.2 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-53,Vh:NaN,Vss:-55},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //24457215 Kitamura 2014 Island Cells Control Temporal Association Memory
//  new solution(celsius=36,
//               eSolution='124 NaCl, 3 KCl, 2 CaCl2, 1.3 MgSO4 , 25 NaHCO3, 1.2 NaH2PO4',
//               pSolution='110 K–gluconate, 10 KCl, 10 HEPES, 4 Na2ATP, 0.3 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-55.6,Vh:-70,Vss:-53},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
  //26858602 Jappy 2016 GABABR-Dependent Long-Term Depression at Hippocampal Synapses between CB1-Positive Interneurons and CA1 Pyramidal Cells.
//  new solution(celsius=24,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='100 Cs-gluconate, 40 CsCl, 10 HEPES, 8 NaCl, 4 MgATP, 0.3 MgGTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //26402609 Milstein 2015 Inhibitory Gating of Input Comparison in the CA1 Microcircuit.
//  new solution(celsius=34.5,
//               eSolution='119 NaCl, 25 NaHCO3, 3 KCl, 1.25 NaH2PO4, 1 MgCl2, 1.3 CaCl2, 3 Na-pyruvate, 1 ascorbic-acid',
//               pSolution='134 K-gluconate, 6 KCl, 4 NaCl, 0.3 TrisGTP, 4 Mg2ATP, 14 Tris2-phosphocreatine, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //25390033 Sun 2014 Dendritic Na+ spikes enable cortical input to drive action potential output from hippocampal CA2 pyramidal neurons.
//  new solution(celsius=35,
//               eSolution='125 NaCl, 2.5 KCl, 25 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-gluconate, 5 KCl, 0.1 Na-EGTA, 10 HEPES, 2 NaCl, 5 Mg ATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-75.6,Vh:NaN,Vss:-73},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //8985013 Magee 1997 A synaptically controlled, associative signal for Hebbian plasticity in hippocampal neurons.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 2.5 KCl, 1.2 NaH2PO4, 25 NaHCO3, 2.5 CaCl2, 1.5 MgCl2',
//               pSolution='120 K-gluconate, 20 KCl, 10 HEPES, 4 NaCl, 4 MgATP, 0.3 MgGTP, 14 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-74,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
  //12096061 Losonczy 2002 Cell type dependence and variability in the short-term plasticity of EPSCs in identified mouse hippocampal interneurones.
//  new solution(celsius=26,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2 MgCl2, 2 CaCl2',
//               pSolution='130 K-gluconate, 5 KCl, 2 MgCl2, 0.05 EGTA, 10 HEPES, 2 Mg–ATP, 0.4 Mg–GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
  //18184315 Elfant 2008 Specific inhibitory synapses shift the balance from feedforward to feedback inhibition of hippocampal CA1 pyramidal cells.
//  new solution(celsius=33,
//               eSolution='130 NaCl2, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 2 MgCl2',
//               pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //18367092 Fuentealba 2008 Ivy cells: a population of nitric-oxide-producing, slow-spiking GABAergic neurons and their involvement in hippocampal network activity.
//  new solution(celsius=33,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1.0 MgSO4, 2.5 CaCl2',
//               pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //18596171 Price 2008 GABA(B) receptor modulation of feedforward inhibition through hippocampal neurogliaform cells.
//  new solution(celsius=33,
//               eSolution='130 NaCl, 3.5 KCl, 2.5 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3',
//               pSolution='126 Cs-methanesulfonate, 4 CsCl,10 HEPES, 10 Na2-phosphocreatine, 4 MgATP, 0.3 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:true}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=33,
//               eSolution='130 NaCl, 3.5 KCl, 2.5 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3',
//               pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:true}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=33,
//               eSolution='130 NaCl, 3.5 KCl, 3.5 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3',
//               pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:true}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=33,
//               eSolution='130 NaCl, 3.5 KCl, 1 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3',
//               pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:true}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //15098728 Ganter 2004 Properties of horizontal axo-axonic cells in stratum oriens of the hippocampal CA1 area of rats in vitro.
//  new solution(celsius=22,
//               eSolution='126 NaCl, 3 KCl, 1.25 NaH2PO4, 2 MgSO4, 3 CaCl2, 26 NaHCO3',
//               pSolution='126 K–gluconate, 10 HEPES, 4 MgATP, 0.3 NaGTP, 4 KCl, 10 Na2–phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:-67},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.2,CO2:true}).log();
  //23042082 Leão 2012 OLM interneurons differentially modulate CA3 and entorhinal inputs to hippocampal CA1 neurons.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3.5 KCl, 1.25 NaH2PO4, 1.5 MgCl2, 1.5 CaCl2, 24 NaHCO3',
//               pSolution='133 CsCl, 9 NaCl, 1 MgCl2, 3 MgATP, 0.3 GTP-Tris, 1 HEPES, 0.2 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //23536064 Quattrocolo 2013 Novel GABAergic circuits mediating excitation/inhibition of Cajal-Retzius cells in the developing hippocampus.
//  new solution(celsius=31,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='125 KCl, 10 NaCl, 0.3 Na3GTP, 4 MgATP, 16 KHCO3, 10 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //25253849 Quattrocolo 2014 Optogenetic activation of cajal-retzius cells reveals their glutamatergic output and a novel feedforward circuit in the developing mouse hippocampus.
//  new solution(celsius=32,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='125 Cs-methanesulfonate, 0.3 NaGTP, 4 Mg2ATP, 16 KHCO3, 10 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='125 KCl 0.3 NaGTP, 4 Mg2ATP, 16 KHCO3, 10 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //24671999 Tyan 2014 Dendritic inhibition provided by interneuron-specific cells controls the firing rate and timing of the hippocampal feedback inhibitory circuitry.
//  new solution(celsius=32,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='130 K-methylsulfate, 2 MgCl2, 10 Na2-phosphocreatine, 10 HEPES, 2 Tris2ATP, 0.2 Tris2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-40},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='80 Cs-methylsulfate, 50 CsCl, 10 Na2-phosphocreatine, 10 HEPES, 2 Tris2ATP, 0.2 Tris2GTP, 2 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-40},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='130 Cs-methylsulfate, 2 CsCl, 10 Na2-phosphocreatine, 10 HEPES, 2 Tris2ATP, 0.2 Tris2GTP, 2 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:-45},
//               Erev:{IPSC:-71.9,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
//    new solution(celsius=32,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 1 CaCl2',//1 Ca
//               pSolution='130 Cs-methylsulfate, 2 CsCl, 10 Na2-phosphocreatine, 10 HEPES, 2 Tris2ATP, 0.2 Tris2GTP, 2 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:-45},
//               Erev:{IPSC:-71.9,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
//    new solution(celsius=32,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 3.8 CaCl2',//3.8 Ca
//               pSolution='130 Cs-methylsulfate, 2 CsCl, 10 Na2-phosphocreatine, 10 HEPES, 2 Tris2ATP, 0.2 Tris2GTP, 2 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:-45},
//               Erev:{IPSC:-71.9,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
  //26446209 Le Duigou 2015 Induction of Anti-Hebbian LTP in CA1 Stratum Oriens Interneurons: Interactions between Group I Metabotropic Glutamate Receptors and M1 Muscarinic Receptors.
//  new solution(celsius=31,
//               eSolution='119 NaCl, 2.5 KCl, 26 NaHCO3, 1 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2',
//               pSolution='110 K-gluconate, 17.5 KCl, 10 HEPES, 0.2 EGTA, 8 NaCl, 2 MgATP, 0.3 Na3GTP, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-100},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:-9.50},//correct your data
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.2,CO2:true}).log();
  //16435315 Cossart 2006 Interneurons targeting similar layers receive synaptic inputs with similar kinetics.
//  new solution(celsius=31,
//               eSolution='124 NaCl, 3 KCl, 1.25 KH2PO4, 26 NaHCO3, 1.3 MgSO4-7H2O, 2 CaCl2',
//               pSolution='135 Cs-gluconate, 10 MgCl2, 0.1 CaCl2, 1 Na2EGTA, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:-60,EPSC:10,IPSP:NaN,EPSP:NaN}, //calculated not measured
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
  //24005307 Piskorowski 2013 Delta-opioid receptors mediate unique plasticity onto parvalbumin-expressing interneurons in area CA2 of the hippocampus.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2, 1 MgCl2',
//               pSolution='135 Cs-methylsulfate, 5 KCl, 0.1 NaEGTA, 10 HEPES, 2 NaCl, 5 ATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:-73},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:3,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //10655521 Vida 2000 A hippocampal interneuron associated with the mossy fiber system.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='78 K-gluconate, 78 KCl, 0.1 EGTA, 10 HEPES, 2 MgCl2, 2 ATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //24298136 Nicholson 2014 Long-term potentiation in hippocampal oriens interneurons: postsynaptic induction, presynaptic expression and evaluation of candidate retrograde factors.
//  new solution(celsius=24,
//               eSolution='119 NaCl, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 2 MgCl2, 1.25 NaH2PO4, 25 NaHCO3',
//               pSolution='80 K-gluconate, 8 NaCl, 20 KOH-HEPES, 0.2 EGTA, 25 BAPTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-70},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //26465002 Nasrallah 2015 Inhibitory Plasticity Permits the Recruitment of CA2 Pyramidal Neurons by CA3(1,2,3).
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2, 1 MgCl2',
//               pSolution='135 Cs-methylsulfate, 5 KCl, 0.1 Na-EGTA, 10 HEPES, 2 NaCl, 5 Na2ATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:10,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//   //[Cl]p=7
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-methylsulfate, 5 KCl, 0.1 Na-EGTA, 10 HEPES, 2 NaCl, 5 Na2ATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-73},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},//IPSC:-77 calculated not measured
//               Vj:{exp:1.2,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//   //[Cl]p=16
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-methylsulfate, 14 KCl, 0.1 Na-EGTA, 10 HEPES, 2 NaCl, 5 Na2ATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-73},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},//IPSC:-55 calculated not measured
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //26582498 Anstötz 2016 Developmental Profile, Morphology, and Synaptic Connectivity of Cajal-Retzius Cells in the Postnatal Mouse Hippocampus.
//  new solution(celsius=30,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='105 K-methylsulfate, 10 NaCl, 20 KCl, 4 MgATP, 0.3 Na3GTP, 16 KHCO3',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-60},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //26744409 Basu 2016 Gating of hippocampal activity, plasticity, and memory by entorhinal cortex long-range inhibition.
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2, 3 Na-pyruvate, 1 ascorbate',
//               pSolution='135 K-methylsulfate, 5 KCl, 2 NaCl, 0.2 EGTA, 10 HEPES, 10 Na2-phosphocreatine, 5 MgATP, 0.4 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-68,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:NaN,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2, 3 Na-pyruvate, 1 ascorbate',
//               pSolution='135 Cs-methylsulfate, 5 KCl, 2 NaCl, 0.2 EGTA, 10 HEPES, 10 Na2-phosphocreatine, 5 MgATP, 0.4 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:10,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:NaN,CO2:true}).log();
//     // PMID 20510860 for RMP only
//     new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-methylsulfate, 5 KCl, 0.1 EGTA-Na, 10 HEPES, 2 NaCl, 5 ATP, 0.4 GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-74.4,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2, 3 Na-pyruvate, 1 ascorbate',
//               pSolution='135 K-methylsulfate, 5 KCl, 2 NaCl, 0.2 EGTA, 10 HEPES, 10 Na2-phosphocreatine, 5 MgATP, 0.4 Na2GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-68,Vh:10,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:NaN,CO2:true}).log();
  //9334415  Hájos 1997 Synaptic communication among hippocampal interneurons: properties of spontaneous IPSCs in morphologically identified cells.
//  new solution(celsius=22.5,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='135 Cs-gluconate, 5 CsCl, 20 HEPES, 2 MgCl2, 2 MgATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:NaN},
//               Erev:{IPSC:-44.6,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
  //25429143 Kelsch 2014 GluN2B-containing NMDA receptors promote glutamate synapse development in hippocampal interneurons.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 1 MgCl2, 2 CaCl2',
//               pSolution='120 K-gluconate, 10 HEPES, 15 KCl, 4 MgATP, 7 Na2-phosphocreatine, 0.3 Na2GTP, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 1 MgCl2, 2 CaCl2',
//               pSolution='105 Cs-gluconate, 25 CsCl, 10 HEPES, 4 MgATP, 0.3 Na2GTP, 10 Tris2-phosphocreatine, 2.5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //9751780 Scanziani 1998 Target cell-specific modulation of transmitter release at terminals from a single axon.
//  new solution(celsius=24,
//               eSolution='119 NaCl, 2.5 KCl, 1 NaH2PO4, 4 MgCl2, 4 CaCl2, 26 NaHCO3',
//               pSolution='122.5 Cs-gluconate, 10 CsCl, 10 HEPES, 10 BAPTA, 8 NaCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //11734656 Alle 2001 PTP and LTP at a hippocampal mossy fiber-interneuron synapse.
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 10 BAPTA, 2 MgCl2, 4 Na2ATP, 4 K2ATP, 0.5 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-gluconate, 20 KCl, 0.2 EGTA, 7 Na2-phosphocreatine, 2 MgCl2, 4 Na2ATP, 4 K2ATP, 0.5 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //16648849 Glickfeld 2006 Distinct timing in the activity of cannabinoid-sensitive and cannabinoid-insensitive basket cells.
//  new solution(celsius=33,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2, 26 NaHCO3',
//               pSolution='150 K-gluconate, 1.5 MgCl2, 5 HEPES, 1.1 EGTA,10 Na2-phosphocreatine, 2 MgATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:-85,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
//  new solution(celsius=33,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2, 26 NaHCO3',
//               pSolution='150 K-gluconate, 1.5 MgCl2, 5 HEPES, 1.1 EGTA,10 Na2-phosphocreatine, 2 MgATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-85,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
  //19741117 Daw 2009 Asynchronous transmitter release from cholecystokinin-containing inhibitory interneurons is widespread and target-cell independent.
//  new solution(celsius=34,
//               eSolution='125 NaCl, 3.5 KCl, 1.25 H2PO4, 25 NaHCO3, 1.5 MgSO4, 2.5 CaCl2',
//               pSolution='130 KCl, 8.5 NaCl, 4 MgATP, 0.3 NaGTP, 5 HEPES, 0.5 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //25583495 Strüber 2015 Strength and duration of perisomatic GABAergic inhibition depend on distance between synaptically connected cells.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-gluconate, 40 KCl, 10 HEPES, 2 MgCl2 , 2 Na2ATP, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN},//-65 is calculated not measured
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.20,CO2:true}).log();
  //24336151 Kohara 2014 Cell type-specific genetic and optogenetic tools reveal hippocampal CA2 circuits.
//  new solution(celsius=36,
//               eSolution='124 NaCl, 3 KCl, 2 CaCl2, 1.3 MgSO4, 25 NaHCO3, 1.2 NaH2PO4',
//               pSolution='110 K-gluconate, 10 KCl, 10 HEPES, 4 Na2ATP, 0.3 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-72,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:1.55,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
//     //PMID 20510860 for CA2 Pyramidal RMP
//     new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2 and 1 MgCl2',
//               pSolution='135 K-methylsulfate, 5 KCl, 0.1 EGTA-Na, 10 HEPES, 2 NaCl, 5 Na2ATP, 0.4 Na2GTP, 10 Na2phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-75.3,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
  //11353016 Savić 2001 Electrophysiological characterization of "giant" cells in stratum radiatum of the CA3 hippocampal region.
//  new solution(celsius=23,
//               eSolution='126 NaCl, 3.5 KCl, 1.2 NaH2PO4, 3.7 MgCl2, 25 NaHCO3, 1 EGTA',
//               pSolution='130 K-gluconate, 10 KCl, 10 HEPES, 0.4 EGTA, 1 MgCl2 , 0.3 NaGTP, 2 Na2ATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-57,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='126 NaCl, 3.5 KCl, 1.2 NaH2PO4, 3.7 MgCl2, 25 NaHCO3, 1 EGTA',
//               pSolution='130 Cs-methanesulfonate, 10 CsCl, 10 HEPES, 0.4 EGTA, 1 MgCl2, 0.3 NaGTP, 2 Na2ATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:-58.76,EPSC:-8.32,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:10,correctedAlready:true}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='126 NaCl, 3.5 KCl, 1.2 NaH2PO4, 3.7 MgCl2, 25 NaHCO3, 1 EGTA',
//               pSolution='130 Cs-methanesulfonate, 10 CsCl, 10 HEPES, 0.4 EGTA, 1 MgCl2, 0.3 NaGTP, 2 Na2ATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:-58.76,EPSC:-2.49,IPSP:NaN,EPSP:NaN},//NMDA
//               Vj:{exp:10,correctedAlready:true}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //20181582 Galván 2010 Critical involvement of postsynaptic protein kinase activation in long-term potentiation at hippocampal mossy fiber synapses on CA3 interneurons.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-methylsulfate, 10 NaCl, 10 KCl, 10 HEPES, 0.5 EGTA, 4.5 MgATP, 0.3 Na2GTP, 14 Na2-phosphocreatine, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70},
//               Erev:{IPSC:NaN,EPSC:-3.61882,IPSP:NaN,EPSP:NaN},//CI-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-methylsulfate, 10 NaCl, 10 KCl, 10 HEPES, 0.5 EGTA, 4.5 MgATP, 0.3 Na2GTP, 14 Na2-phosphocreatine, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70},
//               Erev:{IPSC:NaN,EPSC:-0.513905,IPSP:NaN,EPSP:NaN},//CP-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
  //25637803 Galván 2015 Synapse-specific compartmentalization of signaling cascades for LTP induction in CA3 interneurons.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-methylsulfate, 10 NaCl, 10 KCl, 10 HEPES, 0.5 EGTA, 4 MgATP, 0.3 Na2GTP, 14 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-60}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
      //AMPAR rectification experiments
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 Cs-methanesulfonate, 10 KCl, 10 HEPES, 0.5 EGTA, 8 Na2-phosphocreatine, 4 MgATP, 0.3 Na2GTP, 0.5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:0.11,IPSP:NaN,EPSP:NaN}, //CP AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 Cs-methanesulfonate, 10 KCl, 10 HEPES, 0.5 EGTA, 8 Na2-phosphocreatine, 4 MgATP, 0.3 Na2GTP, 0.5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:-4.31,IPSP:NaN,EPSP:NaN}, //CI AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //11069934 Toth 2000 Differential mechanisms of transmission at three types of mossy fiber synapse.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 CaCl2, 1.25 MgCl2',
//               pSolution='100 Cs-gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 1 CaCl2, 3 MgCl2',
//               pSolution='100 Cs-gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
//    new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3.8 CaCl2, 0.8 MgCl2',
//               pSolution='100 Cs-gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
  //20876200 Astori 2010 Spike-timing-dependent plasticity in hippocampal CA3 neurons.
//  new solution(celsius=31,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2, 0.01 Picrotoxin, 0.01 Bicuculline, 0.01 Glycine',
//               pSolution='130 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 10 Na-gluconate, 4 MgATP, 0.3 Na2GTP, 4 NaCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-71.95,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:15.2,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //21068319 Gulyás 2010 Parvalbumin-containing fast-spiking basket cells generate the field potential oscillations induced by cholinergic receptor activation in the hippocampus.
//  new solution(celsius=35,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 MgCl2, 2 CaCl2, 26 NaHCO3',
//               pSolution='80 CsCl, 60 Cs-gluconate, 1 MgCl2, 2 MgATP, 3 NaCl, 10 HEPES, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.28,CO2:true}).log();
  //27609885 Guzman 2016 Synaptic mechanisms of pattern completion in the hippocampal CA3 network.
//  new solution(celsius=22,//22,34
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-68.2,Vh:-70,Vss:-60}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:true}).log();
//  new solution(celsius=22,//22,34
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 CaCl2, 1 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-68.2,Vh:-70,Vss:-60}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:true}).log();
//  new solution(celsius=34,//22,34
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-68.2,Vh:-70,Vss:-60}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:true}).log();
  //15331617 Laezza 2004 Voltage-controlled plasticity at GluR2-deficient synapses onto hippocampal interneurons.
//  new solution(celsius=23,
//               eSolution='130 NaCl, 3.5 KCl, 1.4 CaCl2, 1.5 MgSO4, 24 NaHCO3, 1.25 Na2HPO4',
//               pSolution='130 Cs-methanesulfonate, 10 HEPES, 2 MgCl2, 2 MgATP, 0.3 Na3GTP, 0.06 HCl4-spermin',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:3.28,IPSP:NaN,EPSP:NaN}, //Ca-permeable type II
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
  //10464102 Laezza 1999 Long-term depression in hippocampal interneurons: joint requirement for pre- and postsynaptic events.
//  new solution(celsius=23,
//               eSolution='130 NaCl, 3.5 KCl, 1.4 CaCl2, 1.5 MgSO4, 24 NaHCO3, 1.25 Na2HPO4',
//               pSolution='130 Cs-methanesulfonate, 10 HEPES, 2 MgCl2, 2 MgATP, 0.3 Na3GTP, 0.06 HCl4-spermin',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:40,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:3.12,IPSP:NaN,EPSP:NaN}, //Ca-permeable type II
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
//  new solution(celsius=23,
//               eSolution='130 NaCl, 3.5 KCl, 1.4 CaCl2, 1.5 MgSO4, 24 NaHCO3, 1.25 Na2HPO4',
//               pSolution='130 Cs-methanesulfonate, 10 HEPES, 2 MgCl2, 2 MgATP, 0.3 Na3GTP, 0.06 HCl4-spermin',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:6.55,IPSP:NaN,EPSP:NaN}, //Ca-impermeable type I
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
  //27174042 Mishra 2016 Symmetric spike timing-dependent plasticity at CA3-CA3 synapses optimizes storage and recall in autoassociative networks.
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='140 K-gluconate, 20 KCl, 10 HEPES, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 NaGTP, 5 QX314-Cl, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
//  new solution(celsius=33,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='140 K-gluconate, 20 KCl, 10 HEPES, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 NaGTP, 5 QX314-Cl, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='140 K-gluconate, 20 KCl, 10 HEPES, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-20}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
  //10196564 Tóth 1998 Afferent-specific innervation of two distinct AMPA receptor subtypes on single hippocampal interneurons.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 Ca2Cl, 1.2 MgSO4',
//               pSolution='100 Cs-gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:0.21,IPSP:NaN,EPSP:NaN}, //Ca Permeable - High density
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:NaN}).log();
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 Ca2Cl, 1.2 MgSO4',
//               pSolution='100 Cs-gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:-2.38,IPSP:NaN,EPSP:NaN}, //Ca Permeable - Low density
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:NaN}).log();
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 Ca2Cl, 1.2 MgSO4',
//               pSolution='100 Cs-gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:0.78,IPSP:NaN,EPSP:NaN}, //CI
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:NaN}).log();
  //14734812 Losonczy 2004 Persistently active cannabinoid receptors mute a subpopulation of hippocampal interneurons.
//  new solution(celsius=24,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2 MgCl2, 2 CaCl2',
//               pSolution='40 CsCl, 90 K-gluconate, 1.2 NaCl, 3.5 KCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 MgGTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:NaN}).log();
  //20529124 Szabó 2010 Distinct synaptic properties of perisomatic inhibitory cell types and their different modulation by cholinergic receptor activation in the CA3 region of the mouse hippocampus.
//  new solution(celsius=24,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 MgCl2, 2 CaCl2, 26 NaHCO3',
//               pSolution='80 CsCl, 60 Cs-gluconate, 1 MgCl2, 2 MgATP, 3 NaCl, 10 HEPES, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //25044969 Szabó 2014 Anatomically heterogeneous populations of CB1 cannabinoid receptor-expressing interneurons in the CA3 region of the hippocampus show homogeneous input-output characteristics.
//  new solution(celsius=24,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 MgCl2, 2 CaCl2, 26 NaHCO3',
//               pSolution='80 CsCl, 60 Cs-gluconate, 1 MgCl2, 2 MgATP, 3 NaCl, 10 HEPES, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //15486016 Gloveli 2005 Differential involvement of oriens/pyramidale interneurones in hippocampal network oscillations in vitro.
//  new solution(celsius=29,
//               eSolution='126 NaCl, 3 KCl, 1.25 NaH2PO4, 2 CaCl2, 2 MgSO4, 24 NaHCO3',
//               pSolution='135 K-gluconate, 5 KCl, 2 ATPMg, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-61.2,Vh:-70,Vss:-60}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //19496174 Ascoli 2009 Quantitative morphometry of electrophysiologically identified CA3b interneurons reveals robust local geometry and distinct cell classes.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 3.0 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2.0 CaCl2, 1.0 MgCl2',
//               pSolution='120 K-methylsulfate, 10 KCl, 10 HEPES, 0.5 EGTA, 4.5 Mg-ATP, 0.3 Na2GTP, 14 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-72.17,Vh:-70,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.4,CO2:true}).log();
  //23843535 Hájos 2013 Input-output features of anatomically identified CA3 neurons during hippocampal sharp wave/ripple oscillation in vitro.
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='138 K-gluconate, 3 CsCl, 10 Na2-phosphocreatine, 4 MgATP, 0.4 TrisGTP, 10 HEPES, 0.2 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:NaN}, 
//               Erev:{IPSC:-80,EPSC:10,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.38,CO2:true}).log();
  //23733415 Papp 2013 Different input and output properties characterize parvalbumin-positive basket and Axo-axonic cells in the hippocampal CA3 subfield.
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='110 K-gluconate, 4 NaCl, 20 HEPES, 0.1 EGTA, 10 Tris2-phosphocreatine, 2 Mg-ATP, 0.3 Na-GTP, 0.1 spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-45,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='80 CsCl, 60 Cs-gluconate, 1 MgCl2, 2 MgATP, 10 HEPES, 3 NaCl, 5 QX314-Cl, 0.1 spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:3.90,IPSP:NaN,EPSP:NaN}, //BC CP-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='80 CsCl, 60 Cs-gluconate, 1 MgCl2, 2 MgATP, 10 HEPES, 3 NaCl, 5 QX314-Cl, 0.1 spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:-5.51956,IPSP:NaN,EPSP:NaN}, //BC CI-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='80 CsCl, 60 Cs-gluconate, 1 MgCl2, 2 MgATP, 10 HEPES, 3 NaCl, 5 QX314-Cl, 0.1 spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:-12.5452,IPSP:NaN,EPSP:NaN}, //AAC CP-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='80 CsCl, 60 Cs-gluconate, 1 MgCl2, 2 MgATP, 10 HEPES, 3 NaCl, 5 QX314-Cl, 0.1 spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:-5.266,IPSP:NaN,EPSP:NaN}, //AAC CI-AMPA
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //19830814 Cosgrove 2010 Area CA3 interneurons receive two spatially segregated mossy fiber inputs.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-methylsulfate, 10 NaCl, 10 KCl, 10 HEPES, 0.5 EGTA, 4.5 MgATP, 0.3 Na2GTP, 14 Na2-phosphocreatine, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
  //12040087 Nakazawa 2002 Requirement for hippocampal CA3 NMDA receptors in associative memory recall.
//  new solution(celsius=30.5,
//               eSolution='124 NaCl, 2.5 KCl, 25 NaHCO3, 4 MgCl2, 3.5 CaCl2',
//               pSolution='120 K-gluconate, 20 KCl, 10 HEPES, 2 MgCl2, 4 ATP, 0.3 TrisGTP, 7 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-67,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //20554881 Szabadics 2010 Granule cells in the CA3 area.
//  new solution(celsius=35.5,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-gluconate, 43.5 KCl, 1.8 NaCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-74.8,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:false}).log();
//  new solution(celsius=35.5,
//               eSolution='126 NaCl, 10.2 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-gluconate, 43.5 KCl, 1.8 NaCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-78,Vh:-78,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:false}).log();
  //9478900 Maccaferri 1998 Target-specific expression of presynaptic mossy fiber plasticity.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2, 1.5 MgSO4',
//               pSolution='100 Cs-gluconate, 5 MgCl2, 10 HEPES, 30 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //11306622 Bartos 2001 Rapid signaling at inhibitory synapses in a dentate gyrus interneuron network.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-gluconate, 40 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-55,Vh:-70,Vss:-65},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='87 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 0.5 CaCl2, 7 MgCl2',
//               pSolution='70 K-gluconate, 70 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-55,Vh:-70,Vss:-65},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //8753890 Urban 1996 Induction of hebbian and non-hebbian mossy fiber long-term potentiation by distinct patterns of high-frequency stimulation.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 2 KCl, 26 NaHCO3, 1 MgCl2, 2.5 CaCl2',
//               pSolution='120 CsF, 20 CsCl, 1 BAPTA, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //19339618 Szabadics 2009 Functional specificity of mossy fiber innervation of GABAergic cells in the hippocampus.
//  new solution(celsius=36,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-gluconate, 43.5 KCl, 1.8 NaCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:false}).log();
  //21452204 Armstrong 2011 Neurogliaform cells in the molecular layer of the dentate gyrus as feed-forward γ-aminobutyric acidergic modulators of entorhinal-hippocampal interplay.
//  new solution(celsius=36,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='40 CsCl, 90 K-gluconate, 1.8 NaCl, 1.7 MgCl2, 3.5 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
//  new solution(celsius=36,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-gluconate, 1.8 NaCl, 1.7 MgCl2, 27.4 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN}, 
//               Erev:{IPSC:-73.65,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
  //21983681 Markwardt 2011 Ivy/neurogliaform interneurons coordinate activity in the neurogenic niche.
//  new solution(celsius=22,
//               eSolution='125 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 25 NaHCO3',
//               pSolution='190 K-gluconate, 45 KCl, 4 MgCl2, 10 HEPES, 4 MgATP, 0.3 NaGTP, 7 Na2-phosphocreatine, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:false}).log();
  //23259953 Jinde 2012 Hilar mossy cell degeneration causes transient dentate granule cell hyperexcitability and impaired pattern separation.
//  new solution(celsius=33,
//               eSolution='124 NaCl, 4.5 KCl, 26 NaHCO3, 1.2 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='125 Cs-methanesulfonate, 4 Mg2ATP, 4 NaCl, 0.3 Na2GTP, 16 KHCO3, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-67,Vss:NaN}, 
//               Erev:{IPSC:-70.6,EPSC:3,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //10908596 Kraushaar 2000 Efficacy and stability of quantal GABA release at a hippocampal interneuron-principal neuron synapse.
//    new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 0.5 CaCl2, 4 MgCl2',
//               pSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 4 CaCl2, 0.5 MgCl2',
//               pSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 0.5 CaCl2, 2.5 MgCl2',
//               pSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='140 K-methylsulfate, 2 KCl, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-30,Vss:NaN}, 
//               Erev:{IPSC:-71.4,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
  //20037579 Larimer 2010 Representing information in cell assemblies: persistent activity mediated by semilunar granule cells.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 K-methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:-74,EPSC:NaN,IPSP:NaN,EPSP:NaN},//Authors say IPSP reversal potential but we assume IPSC
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 Cs-methylsulfate, 4 NaCl, 10 HEPES, 1 EGTA, 25 TEA-OH, 5 QX314-Br, 4 MgATP, 0.3 Na3GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:55,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //19020015 Larimer 2008 Nonrandom local circuits in the dentate gyrus.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 K-methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-55}, 
//               Erev:{IPSC:-76.7,EPSC:NaN,IPSP:NaN,EPSP:NaN},//Authors say IPSP reversal potential but we assume IPSC
//               Vj:{exp:10,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //12235359 Bartos 2002 Fast synaptic inhibition promotes synchronized gamma oscillations in hippocampal interneuron networks.
//  new solution(celsius=33.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-gluconate, 40 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //20810902 Sambandan 2010 Associative plasticity at excitatory synapses facilitates recruitment of fast-spiking interneurons in the dentate gyrus.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.5 Na2GTP, 10 HEPES, 7 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 Cs-gluconate, 20 CsCl, 10 EGTA, 2 MgCl2 , 2 Na2ATP, 0.5 Na2GTP, 1 QX314-Br, 10 HEPES, 8 TEA-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:15.19,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
//  new solution(celsius=21,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 Cs-gluconate, 20 CsCl, 10 EGTA, 2 MgCl2 , 2 Na2ATP, 0.5 Na2GTP, 1 QX314-Br, 10 HEPES, 8 TEA-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:15.19,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 Cs-gluconate, 20 CsCl, 10 EGTA, 2 MgCl2 , 2 Na2ATP, 0.5 Na2GTP, 1 QX314-Br, 10 HEPES, 8 TEA-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:17.02,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
//  new solution(celsius=21,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 Cs-gluconate, 20 CsCl, 10 EGTA, 2 MgCl2 , 2 Na2ATP, 0.5 Na2GTP, 1 QX314-Br, 10 HEPES, 8 TEA-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:17.02,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //18077687 Williams 2007 Semilunar granule cells: glutamatergic neurons in the rat dentate gyrus with axon collaterals in the inner molecular layer.
//  new solution(celsius=32,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 K-methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-64,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 K-methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-50,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //24920624 Savanthrapadian 2014 Synaptic properties of SOM- and CCK-expressing cells in dentate gyrus interneuron networks.
//  new solution(celsius=31.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='140 K-gluconate, 4 KCl, 5 HEPES, 2 MgCl2, 4 Na2ATP, 0.1 EGTA, 0.5 NaGTP, 7 Na-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=31.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-gluconate, 40 KCl, 10 HEPES, 2 MgCl2, 2 Na2ATP, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //25252134 Dasgupta 2015 Calcium permeable AMPA receptor-dependent long lasting plasticity of intrinsic excitability in fast spiking interneurons of the dentate gyrus decreases inhibition in the granule cell layer.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 1 MgCl2, 2 CaCl, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='135 K-gluconate, 7 KCl, 10 HEPES, 10 Na2-phosphocreatine, 5 MgATP, 0.5 Na2GTP, 0.2 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-65},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 1 MgCl2, 2 CaCl, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='137 Cs-gluconate, 7 CsCl, 0.2 EGTA, 10 HEPES, 3 QX222-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-20}, 
//                 Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//                 Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //26045570 Hsu 2016 Differential Recruitment of Dentate Gyrus Interneuron Types by Commissural Versus Perforant Pathways.
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='121.5 Cs-methanesulfonate, 0.1 EGTA, 4 MgCl2, 13.5 CsCl, 10 HEPES, 5 QX314-Br, 2 Na2ATP, 10 Na2-phosphocreatine, 0.3 Na3GTP, 0.3 Na3GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:10,Vss:NaN}, 
//               Erev:{IPSC:-25,EPSC:4,IPSP:NaN,EPSP:NaN}, //authors say 10 mV based on 2nd order polynomial fits but I think it should be 4 mV based on linear model Fig. S3
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='121.5 Cs-methanesulfonate, 0.1 EGTA, 4 MgCl2, 13.5 CsCl, 10 HEPES, 5 QX314-Br, 2 Na2ATP, 10 Na2-phosphocreatine, 0.3 Na3GTP, 0.3 Na3GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-25,Vss:NaN}, 
//               Erev:{IPSC:-25,EPSC:4,IPSP:NaN,EPSP:NaN}, //authors say 10 mV based on 2nd order polynomial fits but I think it should be 4 mV based on linear model Fig. S3
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='136.8 K-gluconate, 7.2 KCl, 0.2 EGTA, 4 MgATP, 10 HEPES, 7 Na2-phosphocreatine, 0.5 Na3GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-75,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //12367604 Harney 2002 Pre- and postsynaptic properties of somatic and dendritic inhibition in dentate gyrus.
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 11 MgCl2',
//               pSolution='140 KCl, 10 EGTA,10 HEPES, 20 Na2-phosphocreatine, 2 Mg2ATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //16158066 Hefft 2005 Asynchronous GABA release generates long-lasting inhibition at a hippocampal interneuron-principal neuron synapse.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 KCl, 35 K-gluconate, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES, 0.75 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //24453325 Liu 2014 Rapid dynamic changes of dendritic inhibition in the dentate gyrus by presynaptic activity patterns.
//    new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='15 K-gluconate, 140 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//                 Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//                 Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='15 K-gluconate, 140 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //16033887 Price 2005 Neurogliaform neurons form a novel inhibitory network in the hippocampal CA1 area.
//  new solution(celsius=32,
//           eSolution='130 NaCl, 3.5 KCl, 2.5 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3',
//           pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 NaGTP',
//           recordingMethod='whole-cell',
//           voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//           Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//           Vj:{exp:NaN,correctedAlready:false}},
//           pH={e:NaN,i:7.3,CO2:true}).log();
//    new solution(celsius=32,
//           eSolution='130 NaCl, 3.5 KCl, 2.5 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3',
//           pSolution='126 K-gluconate, 10 HEPES, 10 Na2-phosphocreatine, 4 KCl, 4 MgATP, 0.3 NaGTP',
//           recordingMethod='whole-cell',
//           voltages={Vm:{RMP:-63.1,Vh:-50,Vss:NaN}, 
//           Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//           Vj:{exp:NaN,correctedAlready:false}},
//           pH={e:NaN,i:7.3,CO2:true}).log();
  //Jarolimek 1999 A furosemide-sensitive K+-Cl- cotransporter counteracts intracellular Cl- accumulation and depletion in cultured rat midbrain neurons
  //[K]o= 2 [A-]pip= 4.5: Experimental Erev in Dendrites=−97.7 ± 1.8 in Soma=−83.4 ± 0.9
//  new solution(celsius=22,
//               eSolution='156 NaCl, 2 KCl, 1 CsCl, 2 CaCl2, 1 MgCl2',
//               pSolution='140 K-glucuronate, 0.25 CaCl2, 2 Mg-ATP, 4 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:-83.4,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:17.5,correctedAlready:true}},
//               pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o=10 [A-]pip= 4.5: Experimental Erev in Dendrites=−72.5 ± 2.1 in Soma=−73.7 ± 0.9
//  new solution(celsius=22,
//               eSolution='148 NaCl,10 KCl, 5 CsCl, 2 CaCl2, 1 MgCl2',
//               pSolution='140 K-glucuronate, 0.25 CaCl2, 0 MgCl2, 2 Mg-ATP, 4 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:15.8,correctedAlready:true}},
//               pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o=10 [A-]pip=15  : Experimental Erev in Dendrites=−63.0 ± 0.9 in Soma=−56.5 ± 0.3
//  new solution(celsius=22,
//               eSolution='148 NaCl,10 KCl, 5 CsCl, 2 CaCl2, 1 MgCl2',
//               pSolution='130 K-glucuronate, 0.25 CaCl2, 0.5 MgCl2, 2 Mg-ATP, 5 QX314-Br, 3.5 NaCl, 5 KCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:15.8,correctedAlready:true}},
//               pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o= 2 [A-]pip=15  : Experimental Erev in Dendrites=−75.7 ± 1.8 in Soma=−59.8 ± 1.1
//  new solution(celsius=22,
//               eSolution='156 NaCl, 2 KCl, 1 CsCl, 2 CaCl2, 1 MgCl2',
//               pSolution='130 K-glucuronate, 0.25 CaCl2, 0.5 MgCl2, 2 Mg-ATP, 5 QX314-Br, 3.5 NaCl, 5 KCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:-59.8 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:17.5,correctedAlready:true}},
//               pH={e:7.3,i:7.3,CO2:false}).log();
  //23324316 Yu 2013 Status epilepticus enhances tonic GABA currents and depolarizes GABA reversal potential in dentate fast-spiking basket cells.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4, 26 NaHCO3',
//               pSolution='125 KCl, 10 K-gluconate, 10 HEPES, 2 MgCl2, 0.2 EGTA, 2 NaATP, 0.5 NaGTP, 10 Na2-phosphocreatine.',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //25603947 Yu 2015 Dentate total molecular layer interneurons mediate cannabinoid-sensitive inhibition.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4, 26 NaHCO3',
//               pSolution='125 KCl, 10 K-gluconate, 10 HEPES, 2 MgCl2, 0.2 EGTA, 2 NaATP, 0.5 NaGTP, 10 Na2-phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //20043282 Ledri 2011 Tuning afferent synapses of hippocampal interneurons by neuropeptide Y.
//  new solution(celsius=32,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgSO4, 2.5 CaCl2, 26.2 NaHCO3, 1 NaH2PO4',
//               pSolution='135 CsCl, 10 CsOH, 0.2 CsOH-EGTA, 2 MgATP, 0.3 Na3GTP, 8 NaCl, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-67.4,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgSO4, 2.5 CaCl2, 26.2 NaHCO3, 1 NaH2PO4',
//               pSolution='117.5 Cs-gluconate, 17.5 CsCl, 8 NaCl, 10 CsOH-HEPES, 0.2 CsOH-EGTA, 2 MgATP, 0.3 Na3GTP, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-67.4,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //9208867 Geiger 1997 Submillisecond AMPA receptor-mediated signaling at a principal neuron-interneuron synapse.
//  new solution(celsius=22,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1.5 CaCl2, 3 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='outside–out',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.2,i:7.3,CO2:true}).log();
//  new solution(celsius=22,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1.5 CaCl2, 3 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.2,i:7.3,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1.5 CaCl2, 3 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.2,i:7.3,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-52,Vh:-70,Vss:-70}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.2,i:7.3,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 Cs-gluconate, 20 CsCl, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES, 8 TEA-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.2,i:7.3,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-62,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:5.71,IPSP:NaN,EPSP:NaN}, //5.71 is according to Geiger 1995
//               Vj:{exp:9.8,correctedAlready:false}},        //9.8 is according to Geiger 1995
//               pH={e:7.2,i:7.3,CO2:true}).log();
  //23055500 Geiger 1995 Relative abundance of subunit mRNAs determines gating and Ca2+ permeability of AMPA receptors in principal neurons and interneurons in rat CNS.
//  new solution(celsius=22.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='140 KCl, 10 Na-EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:5.71,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:9.8,correctedAlready:false}},
//               pH={e:7.2,i:7.3,CO2:true}).log();
  //  Goswami 2012 Miniature IPSCs in hippocampal granule cells are triggered by voltage-gated Ca2+ channels via microdomain coupling.
//  new solution(celsius=22.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 KCl, 35 K-gluconate, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //1357584 Otis 1992 Modulation of decay kinetics and frequency of GABAA receptor-mediated spontaneous inhibitory postsynaptic currents in hippocampal neurons.
//  new solution(celsius=35,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 CsCl, 10 HEPES, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:-0.63 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //Fig. 1C-sIPSC 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();-2.7
//  new solution(celsius=35,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 CsCl, 10 HEPES, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-55,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:-1.77 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //Fig. 1C-eIPSC 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 CsCl, 10 HEPES, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:-2.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //Both eIPSC and sIPSC -2.7±0.4 (n=5)
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 CsCl, 10 HEPES, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-50,Vss:NaN}, 
//               Erev:{IPSC:-2.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //Both eIPSC and sIPSC -2.7±0.4 (n=5)
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//         //PMID 1707966
//         new solution(celsius=22,
//               eSolution='125 NaCl, 2.5 KCl, 2 CaCl2, 1 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 NMDG, 125 HCl, 2 CaCl2, 10 EGTA, 2 ATP, 1 MgCl2, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-50,Vss:NaN}, 
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //Both eIPSC and sIPSC -2.7±0.4 (n=5)
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 CsCl, 10 HEPES, 2 MgCl2, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-70,Vss:-55},
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 CsCl, 10 HEPES, 2 MgCl2, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-65,Vss:-55},
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='135 Cs-gluconate, 10 HEPES, 5 CsCl, 2 MgCl2, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:6,Vss:NaN},
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='135 Cs-gluconate, 10 HEPES, 5 CsCl, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:20,Vss:NaN},
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='110 Cs–gluconate, 5 CsCl, 1 BAPTA, 1.1 CaCl2, 10 HEPES, 2 MgCl2, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN},
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//    new solution(celsius=34,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='140 CsCl, 10 HEPES, 2 MgCl2, 11 BAPTA, 1.1 CaCl2, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-75,Vss:NaN},
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
//  new solution(celsius=34,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='130 Cs–gluconate, 5 CsCl, 10 HEPES, 2 MgCl2',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN},
//               Erev:{IPSC:NaN ,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.35,i:7.2,CO2:true}).log();
  //10200201 Okazaki 1999 Recurrent mossy fiber pathway in rat dentate gyrus: synaptic currents evoked in presence and absence of seizure-induced growth.
//  new solution(celsius=22,
//               eSolution='122 NaCl, 25 NaHCO3, 3.1 KCl, 1.8 CaCl2, 1.2 MgSO4, 0.4 KH2PO4',
//               pSolution='120 Cs-gluconate, 10 HEPES, 2 MgATP, 10 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:10,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  
  
  
  //---------------sharp electrode  
  //--> it is necessary to make Vj corrections
  
  //2319304 Sayer 1990 The time course and amplitude of EPSPs evoked at synapses between pairs of CA3/CA1 neurons in the hippocampal slice.
//  new solution(celsius=32.5,
//               eSolution='124 NaCl, 2 KCl, 2 MgSO4, 2 CaCl2, 1.25 KH2PO4, 26 NaHCO3',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-60},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //11029534 Dhillon 2000 Laminar differences in recurrent excitatory transmission in the rat entorhinal cortex in vitro.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 3 KCl, 2 CaCl2, 2 MgSO4, 1.25 NaH2PO4, 24 NaHCO3',
//               pSolution='3000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-74,Vh:NaN,Vss:-65},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //7478170 Empson 1995 Electrophysiology and morphology of a new type of cell within layer II of the rat lateral entorhinal cortex in vitro.
//  new solution(celsius=34,
//               eSolution='124 NaCl, 26 NaHCO3, 3 KCl, 1.25 NaH2PO4, 1.6 CaCl2, 1.8 MgSO4',
//               pSolution='2500 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-50,Vh:NaN,Vss:-70},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //18997013 Middleton 2008 NMDA receptor-dependent switching between different gamma rhythm-generating microcircuits in entorhinal cortex.
//  new solution(celsius=34,
//               eSolution='126 NaCl, 3 KCl, 1.25 NaH2PO4, 24 NaHCO3, 1.2 MgSO4, 1.6 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-30},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //15700275 Knopp 2005 Cellular and network properties of the subiculum in the pilocarpine model of temporal lobe epilepsy.
//  new solution(celsius=32,
//               eSolution='129 NaCl, 1.25 NaH2PO4, 21 NaHCO3, 3 KCl, 4 CaCl2, 4 MgSO4',
//               pSolution='2500 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-50,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //10215927 Ali 1999 IPSPs elicited in CA1 pyramidal cells by putative basket cells in slices of adult rat hippocampus.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1.0 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-65,Vh:NaN,Vss:-55},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-72.4,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //12562998 Pawelzik 2003 Modulation of inhibitory autapses and synapses on rat CA1 interneurones by GABA(A) receptor ligands.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-56,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-73,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-56,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-72,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-56,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-68,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //9490840 Ali 1998 CA1 pyramidal to basket and bistratified cell EPSPs: dual intracellular recordings in rat hippocampal slices.
//  new solution(celsius=34.5,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1.0 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-76},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //9490837 Ali 1998 Facilitating pyramid to horizontal oriens-alveus interneurone inputs: dual intracellular recordings in slices of rat hippocampus.
//  new solution(celsius=34.5,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1.0 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-68,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //18367092 Fuentealba 2008 Ivy cells: a population of nitric-oxide-producing, slow-spiking GABAergic neurons and their involvement in hippocampal network activity.
//  new solution(celsius=34.5,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1.0 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-69.5,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //9503336 Vida 1998 Unitary IPSPs evoked by interneurons at the stratum radiatum-stratum lacunosum-moleculare border in the CA1 area of the rat hippocampus in vitro.
//  new solution(celsius=34.5,
//               eSolution='126 NaCl, 2.0 CaCl2, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4',
//               pSolution='1500 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-63,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-70.2,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //9219929 Cobb 1997 Synaptic effects of identified interneurons innervating both interneurons and pyramidal cells in the rat hippocampus.
//  new solution(celsius=34.5,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1500 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-64,Vh:NaN,Vss:-61},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //7477292 Cobb 1995 Synchronization of neuronal activity in hippocampus by individual GABAergic interneurons.
//  new solution(celsius=34.5,
//               eSolution='126 NaCl, 3 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='1500 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-69,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.2,i:NaN,CO2:true}).log();
  //11807843 Pawelzik 2002 Physiological and morphological diversity of immunocytochemically defined parvalbumin- and cholecystokinin-positive interneurones in CA1 of the adult rat hippocampus.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 KCeSO4',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-61,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //8895869 Deuchars 1996 CA1 pyramid-pyramid connections in rat hippocampus in vitro: dual intracellular recordings with biocytin filling.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-67,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //3612227 Lacaille 1987 Local circuit interactions between oriens/alveus interneurons and CA1 pyramidal cells in hippocampal slices: electrophysiology and morphology.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 5 KCl, 1.25 NaH2PO4, 2 MgSO4, 2 CaCl2, 26 NaHCO3',
//               pSolution='4000 K-acetate, 10 KCl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-40,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //3357023 Lacaille 1988 Stratum lacunosum-moleculare interneurons of hippocampal CA1 region. I. Intrasomatic and intradendritic recordings of local circuit synaptic interactions
  //3357024 Lacaille 1988 Stratum lacunosum-moleculare interneurons of hippocampal CA1 region. II. Intrasomatic and intradendritic recordings of local circuit synaptic interactions
//  new solution(celsius=35.5,
//               eSolution='124 NaCl, 5 KCl, 1.25 NaH2PO4, 2 MgSO4, 2 CaCl2, 26 NaHCO3',
//               pSolution='4000 K-acetate, 10 KCl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-60,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-74.3,EPSP:NaN}, //from PMID 3357024
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //8035215 Buhl 1994 Physiological properties of anatomically identified axo-axonic cells in the rat hippocampus.
//  new solution(celsius=34.5,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1500 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-66,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-66.5,EPSP:9.90},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //8259211 Gulyás 1993 Hippocampal pyramidal cells excite inhibitory neurons through a single release site.
//  new solution(celsius=24,
//               eSolution='128 NaCl, 26 NaHCO3, 3 KCl, 1.25 NaH2PO4, 4 CaCl2, 4 MgCl2',
//               pSolution='500 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-65,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:false}).log();
  //22431345 Mercer 2012 SP-SR interneurones: a novel class of neurones of the CA2 region of the hippocampus.
//  new solution(celsius=24,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-59,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //20882544 Mercer 2012 Local circuitry involving parvalbumin-positive basket cells in the CA2 region of the hippocampus.
//  new solution(celsius=35.5,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-67,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //2231426 Miles 1990 Synaptic excitation of inhibitory cells by single CA3 hippocampal pyramidal cells of the guinea-pig in vitro.
//  new solution(celsius=37,
//               eSolution='124 NaCl, 4 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3',
//               pSolution='3000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-65,Vh:NaN,Vss:NaN}, //RMP Interneuron
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:-7},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //2230936 Jaffe 1990 Induction of long-term potentiation at hippocampal mossy-fiber synapses follows a Hebbian rule.
//  new solution(celsius=33,
//               eSolution='124 NaCl, 3 KCl, 26 NaHCO3, 3 CaCl2, 3 MgCl2',
//               pSolution='3000 KCl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-54,Vh:NaN,Vss:-80}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:false}).log();
//  new solution(celsius=33,
//               eSolution='124 NaCl, 3 KCl, 26 NaHCO3, 3 CaCl2, 3 MgCl2',
//               pSolution='2000 Cs-acetate, 100 QX314-Cl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:-2,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:false}).log();
  //2845578 Williams 1988 Muscarinic depression of long-term potentiation in CA3 hippocampal neurons.
//  new solution(celsius=33,
//               eSolution='124 NaCl, 3 KCl, 26 NaHCO3, 3 CaCl2, 3 MgCl2',
//               pSolution='3000 KCl, 100 QX314-Cl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-80,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:0.32,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:false}).log();
//  new solution(celsius=33,
//               eSolution='124 NaCl, 3 KCl, 26 NaHCO3, 3 CaCl2, 3 MgCl2',
//               pSolution='3000 KCl, 100 QX314-Cl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-80,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:-1.86,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:false}).log();
  //2114039 Zalutsky 1990 Comparison of two forms of long-term potentiation in single hippocampal neurons.
//  new solution(celsius=35,
//               eSolution='125 NaCl, 2.5 KCl, 4 MgCl2, 4 CaCl2, 26 NaHCO3, 1 NaH2PO4',
//               pSolution='3000 CsCl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //8607999 Miles 1996 Differences between somatic and dendritic inhibition in the hippocampus.
  //3000 KCl {to shift the IPSP reversal potential (to about -30 mV) and so enhance IPSP amplitude. Measurements were not taken until at least 15 min after recording was established to allow intracellular chloride equilibration}
//  new solution(celsius=35,
//               eSolution='128 NaCl, 5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2',
//               pSolution='3000 KCl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-30,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='128 NaCl, 5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2',
//               pSolution='2000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:(-72-64)/2,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='128 NaCl, 5 KCl, 26 NaHCO3, 2 CaCl2, 1.6 MgCl2',
//               pSolution='4000 K-acetate, 100 KCl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-55.7,Vh:NaN,Vss:NaN}, //PMID 2357533
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //8283200 Buckmaster 1993 A comparison of rat hippocampal mossy cells and CA3c pyramidal cells.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 5 KCl,1.25 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2 CaCl2',
//               pSolution='4000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-61,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-74,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //8159242 Buhl 1994 Diverse sources of hippocampal unitary inhibitory postsynaptic potentials and the number of synaptic release sites.
//  new solution(celsius=35,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1500 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-67,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-77,EPSP:NaN}, //extrapolated
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
//  new solution(celsius=35,
//               eSolution='124 NaCl, 3.3 KCl, 1.2 KH2PO4, 25.5 NaHCO3, 1.0 MgSO4, 2.5 CaCl2',
//               pSolution='2000 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-68,Vh:NaN,Vss:NaN}, //PV+ Basket from Pawelzik 2002
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, //extrapolated
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //8085161 Sik 1994 Inhibitory CA1-CA3-hilar region feedback in the hippocampus.
//  new solution(celsius=32,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-70,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //9104599 Sik 1997 Interneurons in the hippocampal dentate gyrus: an in vivo intracellular study.
//  new solution(celsius=36.7,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1000 K-acetate, 50 Tris',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-71,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //14580952 Scharfman 2003 Perforant path activation of ectopic granule cells that are born after pilocarpine-induced seizures.
//    new solution(celsius=32,
//               eSolution='126 NaCl, 5 KCl, 2.0 CaCl2, 2.0 MgSO4, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='1000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-80,Vh:NaN,Vss:-55}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //7472322 Scharfman 1995 Electrophysiological evidence that dentate hilar mossy cells are excitatory and innervate both granule cells and interneurons.
//  new solution(celsius=33.5,
//               eSolution='126 NaCl, 5 KCl, 2 CaCl2, 2 MgSO4, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='1000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-81,Vh:NaN,Vss:-57}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //7931561 Scharfman 1994 EPSPs of dentate gyrus granule cells during epileptiform bursts of dentate hilar "mossy" cells and area CA3 pyramidal cells in disinhibited rat hippocampal slices.
//  new solution(celsius=34.5,
//               eSolution='126 NaCl, 5 KCl, 2 CaCl2, 2 MgSO4, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='1000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-72,Vh:NaN,Vss:-75}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //7884451 Scharfman 1994 Evidence from simultaneous intracellular recordings in rat hippocampal slices that area CA3 pyramidal cells innervate dentate hilar mossy cells.
//  new solution(celsius=33.5,
//               eSolution='126 NaCl, 5.0 KCl, 2 CaCl, 2 MgSO4, 1.25 NaH2PO4, 26 NaHCO3',
//               pSolution='1000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-65,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //8105429 Scharfman 1993 Activation of dentate hilar neurons by stimulation of the fimbria in rat hippocampal slices.
//  new solution(celsius=34.5,
//               eSolution='126 NaCl, 5 KCl, 1.25 NaH2PO4, 2.0 CaCl2, 2.0 MgSO4, 26.0 NaHCO3',
//               pSolution='1000 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-65,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //8261117 Han 1993 A high degree of spatial selectivity in the axonal and dendritic domains of physiologically identified local-circuit neurons in the dentate gyrus of the rat hippocampus.
//  new solution(celsius=35,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1500 K-methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-40,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //7623286 Empson 1995 The perforant path projection to hippocampal area CA1 in the rat hippocampal-entorhinal cortex combined slice.
//  new solution(celsius=34,
//               eSolution='124 NaCl, 26 NaHCO3, 3 KCl, 1.25 NaH2PO4, 1.6 CaCl2, 1.8 MgSO4',
//               pSolution='2500 K-acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-63.9,Vh:NaN,Vss:-55}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-66.9,EPSP:-40}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
 

  //---------------perforated patch

  //17332410 Lamsa 2007 Anti-Hebbian long-term potentiation in the hippocampal feedback inhibitory circuit.
//  new solution(celsius=31.5,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 25 NaHCO3, 1 NaH2PO4',
//               pSolution='145 K-gluconate, 8 NaCl, 22.5 KOH-HEPES, 0.2 EGTA, 5 QX314-Br',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:-65.2,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:-4.73,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();  
  //8757246 Maccaferri 1996 Long-term potentiation in distinct subtypes of hippocampal nonpyramidal neurons.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 CaCl2, 1.2 MgSO4',
//               pSolution='100 K-gluconate, 10 TEA-Cl, 40 HEPES',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-75},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //21060720 Chamberland 2010 Synapse-specific inhibitory control of hippocampal feedback inhibitory circuit.
//  new solution(celsius=32,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='130 K-methanesulfonate, 2 MgCl2, 10 Na2–phosphocreatine, 10 HEPES, 2 QX314-Br',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:NaN,Vh:-40,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //20107060 Nissen 2010 Cell type-specific long-term plasticity at glutamatergic synapses onto hippocampal interneurons expressing either parvalbumin or CB1 cannabinoid receptor.
//  new solution(celsius=32,
//               eSolution='119 NaCl, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4, 25 NaHCO3',
//               pSolution='145 K-gluconate, 8 NaCl, 23 K-HEPES, 0.2 EGTA, 5 QX314-Br',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:0.478,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:false}).log();
  //15937481 Lamsa 2005 Hebbian LTP in feed-forward inhibitory interneurons and the temporal fidelity of input discrimination.
//  new solution(celsius=31.5,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 MgCl2, 2.5 CaCl2, 25 NaHCO3, 1 NaH2PO4',
//               pSolution='145 K-gluconate, 8 NaCl, 22 KOH-HEPES, 0.2 EGTA, 5 QX314-Br',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:-70.7,Vh:-25,Vss:-78},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:true}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //26446209 Le Duigou 2015 Induction of Anti-Hebbian LTP in CA1 Stratum Oriens Interneurons: Interactions between Group I Metabotropic Glutamate Receptors and M1 Muscarinic Receptors.
//  new solution(celsius=31,
//               eSolution='119 NaCl, 2.5 KCl, 26 NaHCO3, 1 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2',
//               pSolution='145 K-gluconate, 8 NaCl, 20 HEPES, 0.2 EGTA, 5 QX-314-Br',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-75},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.2,CO2:true}).log();
  //22573673 Szabo 2012 Calcium-permeable AMPA receptors provide a common mechanism for LTP in glutamatergic synapses of distinct hippocampal interneuron types.
//  new solution(celsius=32,
//               eSolution='119 NaCl, 2.5 KCl, 2.5 CaCl2, 1.3 MgSO4, 1.25 NaH2PO4, 25 NaHCO3',
//               pSolution='145 K-gluconate, 5 QX314-Br',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:-66,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //26465002 Nasrallah 2015 Inhibitory Plasticity Permits the Recruitment of CA2 Pyramidal Neurons by CA3(1,2,3).
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 Na-pyruvate, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-methylsulfate, 4 CaCl2, 5 KCl, 0.1 NaOH-EGTA, 10 HEPES, 2 NaCl, 5 ATP, 0.4 GTP, 10 Na2-phosphocreatine',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-73},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //25429131 Yang 2014 Dopamine D1 and D5 receptors modulate spike timing-dependent plasticity at medial perforant path to dentate granule cell synapses.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgSO4, 2 CaCl2',
//               pSolution='140 K-gluconate, 5 KCl, 10 HEPES, 0.2 EGTA, 2 MgCl2, 4 MgATP, 0.3 Na2GTP, 10 Na2-phosphocreatine',
//               recordingMethod='perforated patch',
//               voltages={Vm:{RMP:-79.5,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  
  //Dallwig 1999 On the mechanism of GABA-induced currents in cultured rat cortical neurons -> HCO3-Cl cotransport
  //exp10 = new experiment(22,'125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','',Vm=-70,isSharpElectrode=false,O2_CO2_95_5=true,pHo=7.4,pHi=NaN).log();    //Perforated-patch:HCO3/CO2-buffered saline: Experimental Erev in Soma=–59, GHK at -70 mV RMP =-58.8
  //exp11 = new experiment(22,'125 NaCl, 2.5 KCl, 26 Na-gluconate, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','',Vm=-65,isSharpElectrode=false,O2_CO2_95_5=false,pHo=7.4,pHi=NaN).log(); //Perforated-patch:Hepes-buffered saline: Experimental Erev in Soma=-73, GHK at -65 mV RMP=-64.86
  
//---------------outside-out

  //exp18 = new experiment(22,'125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','140 KCl, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',RMP=NaN,isSharpElectrode=false,O2_CO2_95_5=true,pHo=7.2,pHi=7.3).log(); //Experimental Erev in patch=4.5 {ENa}, 9.8 {ECa}, GHK=-3.95

//---------------cell-attached

  //22700932 Dugladze 2012 Segregation of axonal and somatic activity during fast network oscillations.
//  new solution(celsius=35,
//               eSolution='125 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 25 NaHCO3',
//               pSolution='135 K-gluconate, 5 KCl, 2 MgATP, 0.3 Na3GTP, 10 HEPES',
//               recordingMethod='cell-attached',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:NaN,CO2:true}).log();
  //26446209 Le Duigou 2015 Induction of Anti-Hebbian LTP in CA1 Stratum Oriens Interneurons: Interactions between Group I Metabotropic Glutamate Receptors and M1 Muscarinic Receptors.
//  new solution(celsius=31,
//               eSolution='119 NaCl, 2.5 KCl, 26 NaHCO3, 1 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2',
//               pSolution='',
//               recordingMethod='cell-attached',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.2,CO2:true}).log();
}

var solution = function(celsius,eSolution,pSolution,recordingMethod,voltages,pH) {
  /*
  eSolution = extracellular solution
  pSolution = recording pipette solution
  iSolution = intracellular solution
  var voltages = {Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{Vh:NaN,Vss:NaN}, Vj:{exp:NaN,correctedAlready:false}};
  var pH = {e:NaN,i:NaN,CO2:NaN};
    Outside-out & Whole-cell {pipette solution almost entirely determines intracellular concentrations}
    Sharp-electrode {Sharp electrodes have a high resistance tip that makes the ion exchange difficult. Some researchers consider 15 minutes enough time for the pipette solution and the cytoplasmic solution to reach equilibrium [161]. In sharp electrode recording method usually a very high concentration of ions is used in the recording pipette solution. However, I think intracellular concentrations will be 1.5% of these high concentrations because of high tip resistance.}
    Cell-attached {extracellular solution determines the intracellular concentrations not the pipette solution. Cells concentrate K in the cell, and dilute Na, Ca, and Cl. Cells can make HCO3 internally and the concentration is a function of pH, oxygenation and extracellular HCO3. If a cell is cultured in a solution that an ion, for example K, is substituted by another ion, Cs for instance, then it will be hard to imagine any K inside that cell. In contrast, if a cell actively concentrates an ion, intracellular concentration of that ion might reach the cell’s goal even in low extracellular concentrations of that ion.}
  */
  var self = this;
  recordingMethod = recordingMethod.toLowerCase();
  Logger.log(recordingMethod)
  var R    = 8.314;            // Gas Constant,       unit=J/(mol*K)
  var F    = 96485;		       // Faraday's Constant, unit=coulombs/mol
  var T    = 273.15 + celsius; // Kelvin
  var F_RT = F/R/T;
  var epsilon = 78.478761;     // Dielectric Constants of water
  var A = 1.82e6 * Math.pow((epsilon * T),-3/2); // a constant needed to calculate the ionic activity, A = 0.5085 M-1/2 at 25 degree celsius
  var ionConcentration = function(solution,name) {
    if (solution && name){
      return solution.replace(/^.*[@:]\s*/,'').split(/\s*[,;]\s*/g).filter(Null).reduce(
        function(p,concentrationSformula) {
          var [concentration,formula] = concentrationSformula.split(/\s+/g);
          //Logger.log([concentration,formula])
          var ionAtomsPerMolecule = 0;
          if (formula.match(RegExp(name+'\\d+','g'))) {
            ionAtomsPerMolecule =  Number(formula.replace(RegExp('.*'+name+'(\\d+).*','g'),'$1'));
          } else if (formula.match(name)) {
            //Logger.log(formula)
            ionAtomsPerMolecule = 1;
          };
          p = p + Number(concentration) * ionAtomsPerMolecule;
          return p;
        },0);
    }
  }
 // Calculate the concentrations of ions in the extracellular solution and in recording pipette
 // HEPES has little or no effect on Ionic Strength and activity -> PMID: 18022379
 this.Ions = 
   ["acetate","ATP","Ba","Br","Ca","Cl","Cs","EGTA","F","gluconate","glucuronate",
    "GTP","H2PO4","HCO3","HEPES","HPO4","K","NMDG","methylsulfate","methanesulfonate","Mg",
    "Na","OH","SO4","TEA","Tris","QX314","Zn","CeSO4","phosphocreatine","pyruvate"
   ].filter(function(ionName){
     return (pSolution.match(ionName) || eSolution.match(ionName))
   }).reduce(
   function(p,ionName){
     var extCmM     = ionConcentration(eSolution,ionName);
     var pipetteCmM = ionConcentration(pSolution,ionName);
     p[ionName]     = new Ion(ionName);
     p[ionName].eC  = (isNaN(extCmM)    )? 0 : extCmM     * 1e-3; // convert mM to M
     p[ionName].pC  = (isNaN(pipetteCmM))? 0 : pipetteCmM * 1e-3;
     p[ionName].iC  = 0;//Make sure all ions have iC
     return p;
   },{});//Logger.log(this.Ions);
  
 /* Ions derived from weak acids like HEPES or are polyvalent chelating agents like EGTA are not fully ionized in the solution.

    For example, if titrating 10 mM HEPES with NaOH requires about 5 mM NaOH to bring the pH to about 7.4, 
    then at this pH the free HEPES- concentration will be about 5 mM along with an additional 5 mM of Na+ 
    (plus any other Na+ contributions), so it would be these values which should be entered into the program. 

    Similarly, if 5 mM EGTA and 2 mM CaCl2 are added to the solution, 
    then contributions from EGTA2- and Ca-EGTA will be close to about 3 mM and 2 mM at pH 7.4, 
    since virtually all the Ca2+ will be chelated mostly in the form Ca-EGTA, and 
    the remaining  EGTA will mostly be in the EGTA2- form.
  */
  
  if (this.Ions.HEPES) {
    if (!/\d+\s(?:(?:K|Cs)(?:OH)?-?)HEPES/.test(pSolution)) {
      this.Ions.HEPES.pC = this.Ions.HEPES.pC / 2;
      if (this.Ions.Cs)     
        this.Ions.Cs.pC += this.Ions.HEPES.pC
      else if (this.Ions.K) 
        this.Ions.K.pC  += this.Ions.HEPES.pC;
    }
    if (!/\d+\s(?:(?:K|Cs)(?:OH)?-?)HEPES/.test(eSolution)) {
      this.Ions.HEPES.eC = this.Ions.HEPES.eC / 2;
      if (this.Ions.Cs)     
        this.Ions.Cs.eC += this.Ions.HEPES.eC
      else if (this.Ions.K) 
        this.Ions.K.eC  += this.Ions.HEPES.eC;
    }
  }
  if (this.Ions.EGTA && this.Ions.Ca) {
    if (this.Ions.EGTA.pC >= this.Ions.Ca.pC) {
      this.Ions.EGTA.pC -= this.Ions.Ca.pC;
      this.Ions.Ca.pC    = 0;
    } else {
      this.Ions.Ca.pC   -= this.Ions.EGTA.pC;
      this.Ions.EGTA.pC  = 0;
    }
  }
 //calculate the intracellular concentrations knowing the pipette solution concentrations
  var normal = {Cl:4e-3, Na:10e-3, Ca:1e-7, K:140e-3, Mg:0.8e-3, HCO3:12e-3, H2PO4:60e-3}
 switch (recordingMethod) {
   case 'whole-cell':
   case 'outside–out':
     Object.keys(self.Ions).forEach(function(ionName){
       self.Ions[ionName].iC = self.Ions[ionName].pC;
     })
     break;
   case 'sharp electrode':
     // sharp electrodes do not change intracellular concentration significantly 
     // they need tens of minutes (15 min in one study) to change 1.5% (empirical value by Keivan)
     Object.keys(self.Ions).forEach(function(ionName){
       self.Ions[ionName].iC = self.Ions[ionName].pC * 0.015
     })
     Object.keys(normal).forEach(function(ionName){
       if (self.Ions[ionName])
         self.Ions[ionName].iC = normal[ionName] + 0.01 * (self.Ions[ionName].pC - normal[ionName]);
     })
     // if extracellular solution had Cl but the recording pippet did not set [Cl]i to 4 mM
     // if pipette solution concentration is higher than normal intracelular concentration it will increase it
     // else it should dilute the itracellular solution
     //     // if extracellular solution had HCO3 but the recording pippet did not calculate [HCO3]i by pH difference
     //     if (self.Ions.HCO3)
     //       if (self.Ions.HCO3.pC === 0)
     //         self.Ions.HCO3.iC = Math.exp(((pH.e)?pH.e:7.35) - ((pH.i)?pH.i:7.3)) * self.Ions.HCO3.eC;
     
     break;
   case 'cell-attached':
     Object.keys(normal).forEach(function(ionName){
       if (self.Ions[ionName])
         self.Ions[ionName].iC = normal[ionName];
     })
     break;
   case 'perforated patch':
     //Ma 2012 Bicarbonate efflux via GABA(A) receptors depolarizes membrane potential and inhibits two-pore domain potassium channels of astrocytes in rat hippocampal slices
     // in perforated patch clamp setting the intracellular concentrations are unknown
     // knowing the RMP it is possible to estimate the [K]i and [Cl]i assuming that EK=ECl=Vm
     // [K]i = Math.exp(Vm * -F_RT)*[K]o
     // Question: what happens in the presence of TEA
     // this.Ions.K.iC = Math.exp(-1 * voltages.Vm.RMP /1000 * F_RT) * this.Ions.K.eC; 
     Object.keys(normal).forEach(function(ionName){
       if (self.Ions[ionName])
         self.Ions[ionName].iC = normal[ionName] + ((self.Ions[ionName].charge === 1)? 0.01 * (self.Ions[ionName].pC - normal[ionName]) : 0);
     })
     // In cell attached mode pH.i is assumed a fixed value
     // if (self.Ions.HCO3)  self.Ions.HCO3.iC  = Math.exp(((pH.e)?pH.e:7.35) - (pH.i=7.3)) * self.Ions.HCO3.eC;// 10e-3;
     break;
   default:
     Logger.log("Unexpected recordingMethod")
     break;
 }
 
 this.strength = Object.keys(self.Ions).reduce(
   function(p,ionName){
     var ion = self.Ions[ionName];
     //Logger.log(ionName)
     p.e += 0.5 * ion.charge * ion.charge * ion.eC;
     p.p += 0.5 * ion.charge * ion.charge * ion.pC;
     p.i += 0.5 * ion.charge * ion.charge * ion.iC;
     return p;
   },{e:0,p:0,i:0})
 
 if (this.strength.p>0.5 || this.strength.e>0.5)
   Logger.log("ionic strength is more than 0.5 -> ionic activities are not accurate anymore")
 
 var activity = function(z,I) {// z= ionic valence, I = ionic strength
   var sqrtI = Math.sqrt(I);
   return Math.pow(10,-A * z * z * (sqrtI/(1 + sqrtI) - 0.3 * I)); //Davies equation valid up to I < 0.5 M
 }
 
 Object.keys(this.Ions).forEach(
   function(ionName){
     var ion = self.Ions[ionName];
     ion.eAc = activity(ion.charge, self.strength.e);
     ion.pAc = activity(ion.charge, self.strength.p);
     ion.iAc = activity(ion.charge, self.strength.i);
     ion.eA = ion.eC * ion.eAc;
     ion.pA = ion.pC * ion.pAc;
     ion.iA = ion.iC * ion.iAc;
   })
 
 voltages.Vj.cal = (function(){
   //Barry 1994 JPCalc
   var zigmas = Object.keys(self.Ions).reduce(
     function(p,ionName){
       var ion    = self.Ions[ionName];
       var pA     = ion.pA;  // pipette              solution ionic activity
       var eA     = ion.eA;  // extracellular (bath) solution ionic activity
       var iA     = ion.iA;  // intracellular (bath) solution ionic activity
       var z      = ion.charge;
       var zmu    = ion.mu * z;
       p.pAz2ma  += z * zmu *  pA;
       p.eAz2ma  += z * zmu *  eA;
       p.iAz2ma  += z * zmu *  iA;
       var eSFnum =     zmu * (eA - pA);
       var iSFnum =     zmu * (iA - pA);
       p.eSFnum  +=     eSFnum;
       p.eSFdenum+= z * eSFnum;
       p.iSFnum  +=     iSFnum;
       p.iSFdenum+= z * iSFnum;
       return p;
     },{eSFnum:0,eSFdenum:0,iSFnum:0,iSFdenum:0,pAz2ma:0,eAz2ma:0,iAz2ma:0});//Logger.log(zigmas)
   var VjBetweenPipetteAndExtracellular = (zigmas.eSFnum === 0)?0:round(R*T/F * (zigmas.eSFnum / zigmas.eSFdenum) * Math.log(zigmas.pAz2ma / zigmas.eAz2ma) * 1000,2);  // = pE-eE
   var VjBetweenPipetteAndIntracellular = (zigmas.iSFnum === 0)?0:round(R*T/F * (zigmas.iSFnum / zigmas.iSFdenum) * Math.log(zigmas.pAz2ma / zigmas.iAz2ma) * 1000,2);  // = pE-iE
//   Logger.log('\nVj Between Pipette & Bath='+VjBetweenPipetteAndExtracellular+
//              '\nVj Between Pipette & Intracellular='+VjBetweenPipetteAndIntracellular);
   return (recordingMethod === 'sharp electrode')?round(VjBetweenPipetteAndIntracellular - VjBetweenPipetteAndExtracellular,2):VjBetweenPipetteAndExtracellular;
   }())
 
 this.Vj = round(((voltages.Vj.correctedAlready)? 0 : (voltages.Vj.exp) ? voltages.Vj.exp : voltages.Vj.cal),2)
 
 this.ErevCaImpermeableAMPA = (function(){
   //Jatzke 2002 Voltage and concentration dependence of Ca2+ permeability in recombinant glutamate receptor subtypes
   //Traynelis 2010 Glutamate Receptor Ion Channels - Structure, Regulation, and Function
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Na,0.84);    //PNa/PCs-AMPA GluA1       ('Na',145,20  ,0.84,1);
   channel.addIon(self.Ions.K ,1.08);    //PK /PCs-AMPA GluA1       ('K' ,4  ,150 ,1.08,1);
   channel.addIon(self.Ions.Cs,1.00);    //PCs/PCs-AMPA GluA1       ('Cs',4  ,150 ,1.00,1);
   return channel.Erev();
 }())
 this.ErevCaPermeableAMPA = (function(Vh){//Vh or Vss in mV
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Na,0.84);    //PNa/PCs-AMPA GluA1       ('Na',145,20  ,0.84,1);
   channel.addIon(self.Ions.K ,1.08);    //PK /PCs-AMPA GluA1       ('K' ,4  ,150 ,1.08,1);
   channel.addIon(self.Ions.Cs,1.00);    //PCs/PCs-AMPA GluA1       ('Cs',4  ,150 ,1.00,1);
   var P = [{CaPerCs : 0.60, V:-60},{CaPerCs : 0.92, V:-20}];//PCa/PCs-AMPA GluA1 or 2 at -60 and -20 mV {PCa/PCs=PCa/PNa * PNa/Pcs}  ('Ca',2.5,1e-4,0.60,2)
   var PCaPerCs = P[0].CaPerCs;
   if (isNumeric(Vh)) {if (Vh > P[0].V) PCaPerCs = P[0].CaPerCs + (P[1].CaPerCs - P[0].CaPerCs)/(P[1].V - P[0].V)*(Vh - P[0].V)};
   channel.addIon(self.Ions.Ca,PCaPerCs);
   return channel.Erev();
 }())
 this.ErevNMDA = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Na,0.77);    //PNa/PCs-NMDA NR1/2A
   channel.addIon(self.Ions.K ,0.88);    //PK /PCs-NMDA NR1/2A
   channel.addIon(self.Ions.Cs,1.00);    //PCs/PCs-NMDA NR1/2A
   channel.addIon(self.Ions.Ca,2.31);    //PCa/PCs-NMDA NR1/2A or 2B
   return channel.Erev();
 }())
 this.ErevGABAA = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Cl       ,1   );    //PCl/PCl
   channel.addIon(self.Ions.HCO3     ,0.44);    //PK /PCl=[0.18 to 6] in different studies -> reviewd in Farrant 2007 The cellular, molecular and ionic basis of GABAA receptor signalling
   channel.addIon(self.Ions.Br       ,1.4 );    //PBr/PCl
   channel.addIon(self.Ions.F        ,0.09);    //PF /PCl  Fluoride
   return channel.Erev();
 }())
 this.ErevGABAAwithgluconate = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Cl       ,1   );    //PCl/PCl
   channel.addIon(self.Ions.HCO3     ,0.44);    //PK /PCl=[0.18 to 6] in different studies -> reviewd in Farrant 2007 The cellular, molecular and ionic basis of GABAA receptor signalling
   channel.addIon(self.Ions.Br       ,1.4 );    //PBr/PCl
   channel.addIon(self.Ions.F        ,0.09);    //PF /PCl
   channel.addIon(self.Ions.gluconate,0.11);    //PF /PCl
   return channel.Erev();
 }())
 this.ErevGABAB = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.K,1);
   channel.addIon(self.Ions.Na,0.02);
   return channel.Erev();
 }())
 
 this.log = function() {
//   reports.appendRow([
//     eSolution,
//     pSolution,
//     celsius,
//     round(self.strength.e,2),
//     round(self.strength.p,2),
//     voltages.Vj.exp,
//     voltages.Vj.cal,
//     voltages.Vm.Vh,
//     (isNumeric(voltages.Vm.Vh))? round(voltages.Vm.Vh - self.Vj,2):NaN,
//     voltages.Vm.Vss,
//     (isNumeric(voltages.Vm.Vss))? round(voltages.Vm.Vss + self.Vj,2):NaN,
//     voltages.Vm.RMP,
//     (isNumeric(voltages.Vm.RMP))? round(voltages.Vm.RMP + self.Vj,2):NaN,
//     this.ErevCaImpermeableAMPA,
//     this.ErevCaPermeableAMPA,
//     this.ErevNMDA,
//     voltages.Erev.EPSC,
//     (isNumeric(voltages.Erev.EPSC))? round(voltages.Erev.EPSC - self.Vj,2):NaN,
//     voltages.Erev.EPSP,
//     (isNumeric(voltages.Erev.EPSP))? round(voltages.Erev.EPSP + self.Vj,2):NaN,
//     this.ErevGABAA,
//     this.ErevGABAAwithgluconate,
//     this.ErevGABAB,
//     voltages.Erev.IPSC,
//     (isNumeric(voltages.Erev.IPSC))?round(voltages.Erev.IPSC - self.Vj,2):NaN,
//     voltages.Erev.IPSP,
//     (isNumeric(voltages.Erev.IPSP))?round(voltages.Erev.IPSP + self.Vj,2):NaN
//   ])
   Logger.log(
     '\n𝗕𝗮𝘁𝗵:\t'+eSolution+
     '\n𝗣𝗶𝗽𝗲𝘁𝘁𝗲:\t'+pSolution+
     '\n𝗧𝗲𝗺𝗽𝗲𝗿𝗮𝘁𝘂𝗿𝗲:\t\t\t\t\t\t'+celsius+'°C'+
     '\n\n𝗕𝗮𝘁𝗵 𝗜𝗼𝗻𝗶𝗰 𝗦𝘁𝗿𝗲𝗻𝗴𝘁𝗵:\t\t\t\t'+round(self.strength.e,2)+
     '\n𝗣𝗶𝗽𝗲𝘁𝘁𝗲 𝗜𝗼𝗻𝗶𝗰 𝗦𝘁𝗿𝗲𝗻𝗴𝘁𝗵:\t\t\t\t'+round(self.strength.p,2)+
       '\n\n𝗘𝘅𝗽𝗲𝗿𝗶𝗺𝗲𝗻𝘁𝗮𝗹 𝗝𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗣𝗼𝘁𝗲𝗻𝘁𝗶𝗮𝗹:\t\t'+voltages.Vj.exp+
         '\n𝗖𝗮𝗹𝗰𝘂𝗹𝗮𝘁𝗲𝗱 𝗝𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗣𝗼𝘁𝗲𝗻𝘁𝗶𝗮𝗹:\t\t'+voltages.Vj.cal+'\n'+
           ((isNumeric(voltages.Vm.Vh))?'\n𝗩ₕ\t\t'+voltages.Vm.Vh+'{without Vj correction};'+round(voltages.Vm.Vh - self.Vj,2)+'{with Vj correction}@{Vh}':'')+
             ((isNumeric(voltages.Vm.Vss))?'\n𝗩ₛₛ\t\t'+voltages.Vm.Vss+'{without Vj correction};'+round(voltages.Vm.Vss + self.Vj,2)+'{with Vj correction}@{Vss}':'')+
               ((isNumeric(voltages.Vm.RMP))?'\n𝗥𝗠𝗣:'+
                '\n 𝗖-𝗖𝗹𝗮𝗺𝗽:'+voltages.Vm.RMP+'{without Vj correction};'+round(voltages.Vm.RMP + self.Vj,2)+'{with Vj correction}@{RMP}'+
                '\n 𝗩-𝗖𝗹𝗮𝗺𝗽:'+voltages.Vm.RMP+'{without Vj correction};'+round(voltages.Vm.RMP - self.Vj,2)+'{with Vj correction}@{RMP}':'')+
                 '\n𝗘ᵣₑᵥ'+
                   '\n  𝗚𝗹𝘂𝘁𝗮𝗺𝗮𝘁𝗲𝗿𝗴𝗶𝗰:'+
                     '\n\t  𝗖𝗮𝗹𝗰𝘂𝗹𝗮𝘁𝗲𝗱:'+
                       '\n\t\t'+this.ErevCaImpermeableAMPA+' {AMPA Ca Impermeable}; '+this.ErevCaPermeableAMPA+' {AMPA Ca Permeable}; '+this.ErevNMDA+' {NMDA}'+
                         '\n\t  𝗘𝘅𝗽𝗲𝗿𝗶𝗺𝗲𝗻𝘁𝗮𝗹:'+
                           '\n\t\t'+((isNumeric(voltages.Erev.EPSC))?+voltages.Erev.EPSC+' {without Vj correction}; '+round(voltages.Erev.EPSC - self.Vj,2)+' {with Vj correction}':'')+
                                    ((isNumeric(voltages.Erev.EPSP))?+voltages.Erev.EPSP+' {without Vj correction}; '+round(voltages.Erev.EPSP + self.Vj,2)+' {with Vj correction}':'')+
                               '\n\n  𝗚𝗔𝗕𝗔𝗲𝗿𝗴𝗶𝗰:'+
                                 '\n\t  𝗖𝗮𝗹𝗰𝘂𝗹𝗮𝘁𝗲𝗱:'+
                                   '\n\t\t'+this.ErevGABAA+' {GABA-A}; '+this.ErevGABAAwithgluconate+' {GABA-A-gluconate Permeable}; '+this.ErevGABAB+' {GABA-B}'+
                                     '\n\t  𝗘𝘅𝗽𝗲𝗿𝗶𝗺𝗲𝗻𝘁𝗮𝗹:'+
                                       '\n\t\t'+((isNumeric(voltages.Erev.IPSC))?+voltages.Erev.IPSC+' {without Vj correction}; '+round(voltages.Erev.IPSC - self.Vj,2)+' {with Vj correction}':'')+
                                                ((isNumeric(voltages.Erev.IPSP))?+voltages.Erev.IPSP+' {without Vj correction}; '+round(voltages.Erev.IPSP + self.Vj,2)+' {with Vj correction}':'')+
                                           '\n'//+ Object.keys(self.Ions).reduce(
//                                             function(p,ionName) {
//                                               var ion  = self.Ions[ionName];
//                                               return p+='\n'+ionName+
//                                                 ':\n\teAc\t\t'+round(ion.eAc,2)+'\t\teC\t\t'+round(ion.eC*1000,2)+
//                                                   '\n\tiAc\t\t'+round(ion.iAc,2)+'\t\tiC\t\t'+round(ion.iC*1000,2)+
//                                                     '\n\tpAc\t\t'+round(ion.pAc,2)+'\t\tpC\t\t'+round(ion.pC*1000,2)
//                                               },'')
                                             )
 }
}

var GHK = function (celsius){
  var self = this;
  var T = 273.15 + celsius; // Kelvin
  var R = 8.314             // J/(mol*K)
  var F = 96485;		    // coulombs/mol
  var F_RT = F/R/T;
  this.ions = {};
  this.addIon = function(ion,P){
    if (ion) {
      this.ions[ion.name]={
        P    : P,
        cOut : ion.eC, // ionic concentration or activity is in Mols
        cIn  : ion.iC,
        z    : ion.charge,
        zF   : ion.charge * F, 
        zF_RT: ion.charge * F_RT
      };
    };
  }
  var result = Number.MAX_VALUE;
  this.I_GHK = function (ion,V){//V is in volts
    var VzF_RT = V * ion.zF_RT
    var expVzF_RT = Math.exp(VzF_RT);
    var res = ion.P * ion.zF * VzF_RT * (ion.cOut - ion.cIn * expVzF_RT) / (1 - expVzF_RT);
    if (isNumeric(res)) result = res;
    return result;
  };
  this.I = function(V){//in volts
    return Object.keys(this.ions).reduce(
      function(p,key){
        return p + self.I_GHK(self.ions[key],V);
      },0)
  }
  this.ErevAnalytic = function(V){
    //both V and Erev in Volts
    //Lewis 1979 Ion-concentration dependence of the reversal potential and the single channel conductance of ion channels at the frog neuromuscular junction
    return Math.log((Object.keys(this.ions).reduce(
      function(p,key){
        var ion = self.ions[key];
        switch (ion.z){
          case 1:
            return p + ion.cOut * ion.P
            break;
          case -1:
            return p + ion.cIn  * ion.P
            break;
          case 2:
            return p + ion.cOut * ion.P * (1 / (1+Math.exp(V*F_RT)))*4
            break;
          default:
            return p;
            break;
        }
      },0))/(Object.keys(this.ions).reduce(
      function(p,key){
        var ion = self.ions[key];
        var cOut = (ion.cOut)?ion.cOut:0;
        var cIn  = (ion.cIn )?ion.cIn :0;
        switch (ion.z){
          case 1:
            return p + ion.cIn * ion.P
            break;
          case -1:
            return p + ion.cOut * ion.P
            break;
          case 2:
            return p + ion.cIn * ion.P * (1/(1+Math.exp(V*F_RT)))*4*Math.exp(V*F_RT)
            break;
          default:
            return p;
            break;
        }
      },0))) / F_RT
  };
  
  this.Erev = function(){
    var E0 = this.ErevAnalytic()
    //Logger.log('E0='+round(E0 * 1000,2));
    if (E0 || (E0 === 0)) {
      return round(E0 * 1000,2)
    } else {
      var E = E0 = 0;//0 is a good initial condition since it is the point where GHK current equation becomes numerically unstable.
      while(Math.abs(E0 - (E=this.ErevAnalytic(E0)))> 1e-6) {E0 = E};
      // the while loop above is the most efficient iterative solution but I keep using optimization method in case there was ions that are not covered with analytic solution.
      objective = function(V){return Math.abs(self.I(V[0]))}
      E = numeric.uncmin(objective,[this.ErevAnalytic(E0)]).solution[0];
      //Logger.log(['E='+E*1000,'E0='+E0*1000, 'E0='+this.ErevAnalytic(E)*1000]);
      //var E = numeric.uncmin(objective,[this.ErevAnalytic(E)]).solution[0];
      if (isNaN(E)) Logger.log('unexpected condition in Erev function');
      //Logger.log(['E='+E*1000,'E0='+E0*1000, 'E0='+this.ErevAnalytic(E)*1000]);
      return round(E*1000,2);
    };
  }
}

/**
* An Ion. You must have an instance of this class for every ion type
* you have in the solutions.
*/
var Ion = function(name) {
  /**
  * Create an Ion with the given name. Please write the name
  * as "Na", "K", "Cl" and so on. Avoid numbers and symbols
  * like "+" and "-".
  * For some common ions, e.g. "Na" or "K", the physical parameters
  * charge and mobility are automatically set.
  * @param n the name.
  */
  
  // mu = D * charge / kBoltzmann / T = / 1.38064852E-23 / (273+27)
  Ion.e     = 1.6E-19;
  Ion.Nav   = 6.02E23;
  Ion.rel2mu= 4.772743801652893E11 //  m^2/s/V
  this.name = name
  this.eC   = 0.0;     // extracellular concentration
  this.iC   = 0.0;     // intracellular concentration
  this.eA   = 0.0;     // extracellular ionic activity
  this.iA   = 0.0;     // intracellular ionic activity
  this.eAc  = 0.0;     // extracellular ionic activity coefficient
  this.iAc  = 0.0;     // intracellular ionic activity coefficient
  switch (name) {
    case "acetate":
      this.charge = -1;
      this.mu = 2.65098576E11;
      break;
    case "pyruvate":
      this.charge = -1;
      this.mu = 1.1820668345177665E11; // = 1.5734268E11 (gluconate mu) * 1.48 (pyruvate Reduced mobility) / 1.97 (gluconate Reduced mobility) DOI: 10.1021/jp051274h
      break;
    case "ATP":
      this.charge = -2; // -2,-3 or -4 The relative proportions of each valency species depends on pH and the ionic composition of the solution.
      this.mu = 0.715194E11;
      break;
    case "Ba":
      this.charge = +2;
      this.mu = 2.06343E11;
      break;
    case "Br":
      this.charge = -1;
      this.mu = 5.06774E11;
      break;
    case "Ca":
      this.charge = +2;
      this.mu = 1.92944E11;
      break;
    case "CeSO4": // ceriumsulfate
      this.charge = -1;
      this.mu = 3.16592544E11; //find the real value
      break;  
    case "Cl":
      this.charge = -1;
      this.mu = 4.95159E11;
      break;
    case "Cs":
      this.charge = +1;
      this.mu = 5.00934E11;
      break;
    case "EGTA":
      this.charge = -2;
      this.mu = 0.24 * Ion.rel2mu;
      break;
    case "F": //Fluoride
      this.charge = -1;
      this.mu = 3.59027388E11;
      break;  
    case "H2PO4":
      this.charge = -1;
      this.mu = 2.33596E11;
      break;
    case "HCO3":
      this.charge = -1;
      this.mu = 2.88751E11;
      break;
    case "HEPES":
      this.charge = -1;
      this.mu = 0.3 * Ion.rel2mu;
      break;   
    case "HPO4":
      this.charge = -2;
      this.mu = 1.8493E11;
      break;
    case "glucuronate":
      this.charge = -1;
      this.mu = 1.5734268E11; //assuming gluconate's mu
      break;      
    case "gluconate":
      this.charge = -1;
      this.mu = 0.33 * Ion.rel2mu; // 1.5734268E11;
      break;
    case "GTP":
      this.charge = -1;
      this.mu = 0.715194E11;  //assuming ATP's mu
      break;
    case "K":
      this.charge = +1;
      this.mu = 4.76796E11;
      break;
    case "Mg":
      this.charge = +2;
      this.mu = 1.71953E11;
      break;
    case "Na":
      this.charge = +1;
      this.mu = 3.24958E11;
      break;
    case "OH":
      this.charge = -1;
      this.mu = 1.28478E12;
      break;
    case "NMDG":
      this.charge = 1;
      this.mu = 0.33 * Ion.rel2mu;
      break;
    case "methylsulfate": // methylsulfate MeSO4
      this.charge = -1;
      this.mu = 3.16592544E11;
      break;  
    case "methanesulfonate": //Methylsulfonate (pseudonym: methanesulfonate, MeSO3) 
      this.charge = -1;
      this.mu = 3.16592544E11;
      break;
    case "phosphocreatine":
      this.charge = -2;
      this.mu = (6.9+9.2+7.1)/3 * 1E10; // https://doi.org/10.1006/jmrb.1994.1038
      break;
    case "SO4":
      this.charge = -2;
      this.mu = 2.59551E11;
      break;
    case "TEA":
      this.charge = +1;
      this.mu = 2.11697424E11;
      break;      
    case "Tris":
      this.charge = +1;
      this.mu = 1.907184E11;
      break;
    case "QX314":
      this.charge = +1;
      this.mu = 2.22663732E11; // Assumed Triethylammonium's mobility instead
      break;
    case "Zn":
      this.charge = +2;
      this.mu = 1.71304E11;
      break;
    default:
      this.charge = 1;
      this.mu = 2e11;
      Logger.log("unexpected ion name");
      break;
  }
};