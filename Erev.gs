//Change Log
//from eID 307 the Vj calculation method changed this change will affect only sharp eletrode recordings
function eRev(){
//---------------whole-cell
  //Glickfeld 2006 Distinct timing in the activity of cannabinoid-sensitive and cannabinoid-insensitive basket cells.
//  new solution(celsius=33,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2, 26 NaHCO3',
//               pSolution='150 K-Gluconate, 1.5 MgCl2, 5 HEPES, 1.1 EGTA,10 Na2-Phosphocreatine, 2 MgATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
//               Erev:{IPSC:-85,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
//  new solution(celsius=33,
//               eSolution='119 NaCl, 2.5 KCl, 1.3 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2, 26 NaHCO3',
//               pSolution='150 K-Gluconate, 1.5 MgCl2, 5 HEPES, 1.1 EGTA,10 Na2-Phosphocreatine, 2 MgATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-85,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:12,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
  //Daw 2009 Asynchronous transmitter release from cholecystokinin-containing inhibitory interneurons is widespread and target-cell independent.
//  new solution(celsius=36,
//               eSolution='125 NaCl, 3.5 KCl, 1.25 H2PO4, 25 NaHCO3, 1.5 MgSO4, 2.5 CaCl2',
//               pSolution='130 KCl, 8.5 NaCl, 4 MgATP, 0.3 NaGTP, 5 HEPES, 0.5 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Strüber 2015 Strength and duration of perisomatic GABAergic inhibition depend on distance between synaptically connected cells.
//  new solution(celsius=36,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-Gluconate, 40 KCl, 10 HEPES, 2 MgCl2 , 2 Na2ATP, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-70,Vh:-70,Vss:NaN},
//               Erev:{IPSC:-65,EPSC:0,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.20,CO2:true}).log();
  //Kohara 2014 Cell type-specific genetic and optogenetic tools reveal hippocampal CA2 circuits.
//  new solution(celsius=36,
//               eSolution='124 NaCl, 3 KCl, 2 CaCl2, 1.3 MgSO4, 25 NaHCO3, 1.2 NaH2PO4',
//               pSolution='110 K-Gluconate, 10 KCl, 10 HEPES, 4 ATP, 0.3 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-72,Vh:-70,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
  //Savić 2001 Electrophysiological characterization of "giant" cells in stratum radiatum of the CA3 hippocampal region.
//  new solution(celsius=32,
//               eSolution='126 NaCl, 3.5 KCl, 1.2 NaH2PO4, 3.7 MgCl2, 25 NaHCO3, 1 EGTA',
//               pSolution='130 Cs-Methanesulfonate, 10 CsCl, 10 HEPES, 0.4 EGTA, 1 MgCl2, 0.3 NaGTP, 2 Na2ATP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:-58.36,EPSC:-10.20,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:10,correctedAlready:true}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //Galván 2010 Critical involvement of postsynaptic protein kinase activation in long-term potentiation at hippocampal mossy fiber synapses on CA3 interneurons.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-Methylsulfate, 10 NaCl, 10 KCl, 10 HEPES, 0.5 EGTA, 4.5 MgATP, 0.3 Na2GTP, 14 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70},
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.25,CO2:true}).log();
  //Galván 2015 Synapse-specific compartmentalization of signaling cascades for LTP induction in CA3 interneurons.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 3 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-Methylsulfate, 10 NaCl, 10 KCl, 10 HEPES, 0.5 EGTA, 4 MgATP, 0.3 Na2GTP, 14 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //Toth 2000 Differential mechanisms of transmission at three types of mossy fiber synapse.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 CaCl 2, 1.5 MgCl2',
//               pSolution='100 Cs-Gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:true}).log();
  //Astori 2010 Spike-timing-dependent plasticity in hippocampal CA3 neurons.
//  new solution(celsius=31,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2, 0.01 Picrotoxin, 0.01 Bicuculline, 0.01 Glycine',
//               pSolution='130 K-Gluconate, 10 Hepes, 10 Na2-Phosphocreatine, 10 Na-Gluconate, 4 MgATP, 0.3 Na2GTP, 4 NaCl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:-15.2,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //Gulyás 2010 Parvalbumin-containing fast-spiking basket cells generate the field potential oscillations induced by cholinergic receptor activation in the hippocampus.
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 MgCl2, 2 CaCl2, 26 NaHCO3',
//               pSolution='80 CsCl, 60 Cs-Gluconate, 1 MgCl2, 2 MgATP, 3 NaCl, 10 HEPES, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.28,CO2:true}).log();
  //Guzman 2016 Synaptic mechanisms of pattern completion in the hippocampal CA3 network.
//  new solution(celsius=34,//22,34
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-Gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-68.2,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:true}).log();
  //Laezza 2004 Voltage-controlled plasticity at GluR2-deficient synapses onto hippocampal interneurons.
//  new solution(celsius=23,
//               eSolution='130 NaCl, 3.5 KCl, 1.4 CaCl2, 1.5 MgSO4, 24 NaHCO3, 1.25 Na2HPO4',
//               pSolution='130 Cs-Methanesulfonate, 10 HEPES, 2 MgCl2, 2 MgATP, 0.3 Na3GTP, 0.06 HCl4-spermin',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
  //Laezza 1999 Long-term depression in hippocampal interneurons: joint requirement for pre- and postsynaptic events.
//  new solution(celsius=23,
//               eSolution='130 NaCl, 3.5 KCl, 1.4 CaCl2, 1.5 MgSO4, 24 NaHCO3, 1.25 Na2HPO4',
//               pSolution='130 Cs-Methanesulfonate, 10 HEPES, 2 MgCl2, 2 MgATP, 0.3 Na3GTP, 0.06 HCl4-spermin',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:40,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:0,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
  //Mishra 2016 Symmetric spike timing-dependent plasticity at CA3-CA3 synapses optimizes storage and recall in autoassociative networks.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='140 K-Gluconate, 20 KCl, 10 HEPES, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 NaGTP, 5 QX314-Cl ',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-70}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='140 K-Gluconate, 20 KCl, 10 HEPES, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-20}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.28,CO2:NaN}).log();
  //Tóth 1998 Afferent-specific innervation of two distinct AMPA receptor subtypes on single hippocampal interneurons.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 2.5 Ca2Cl, 1.2 MgSO4',
//               pSolution='100 Cs-Gluconate, 0.6 EGTA, 5 MgCl2, 8 NaCl, 2 Na2ATP, 0.3 NaGTP, 40 HEPES, 0.1 spermine, 1 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:0.43,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:NaN}).log();
  //Losonczy 2004 Persistently active cannabinoid receptors mute a subpopulation of hippocampal interneurons.
//  new solution(celsius=24,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2 MgCl2, 2 CaCl2',
//               pSolution='40 CsCl, 90 K-Gluconate, 1.2 NaCl, 3.5 KCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Mg-GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.25,CO2:NaN}).log();
  //Szabó 2010 Distinct synaptic properties of perisomatic inhibitory cell types and their different modulation by cholinergic receptor activation in the CA3 region of the mouse hippocampus.
//  new solution(celsius=24,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 MgCl2, 2 CaCl2, 26 NaHCO3',
//               pSolution='80 CsCl, 60 Cs-Gluconate, 1 MgCl2, 2 MgATP, 3 NaCl, 10 HEPES, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Szabó 2014 Anatomically heterogeneous populations of CB1 cannabinoid receptor-expressing interneurons in the CA3 region of the hippocampus show homogeneous input-output characteristics.
//  new solution(celsius=24,
//               eSolution='126 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 MgCl2, 2 CaCl2, 26 NaHCO3',
//               pSolution='80 CsCl, 60 Cs-Gluconate, 1 MgCl2, 2 Mg-ATP, 3 NaCl, 10 HEPES, 5 QX314-Br',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-65,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Gloveli 2005 Differential involvement of oriens/pyramidale interneurones in hippocampal network oscillations in vitro.
//  new solution(celsius=29,
//               eSolution='126 NaCl, 3 KCl, 1.25 NaH2PO4, 2 CaCl2, 2 MgSO4, 24 NaHCO3',
//               pSolution='135 K-Gluconate, 5 KCl, 2 ATPMg, 0.3 Na2GTP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-60}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Hájos 2013 Input-output features of anatomically identified CA3 neurons during hippocampal sharp wave/ripple oscillation in vitro.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 3.0 KCl, 1.25 Na2HPO4, 25 NaHCO3, 2.0 CaCl2, 1.0 MgCl2',
//               pSolution='120 K-Methylsulfate, 10 KCl, 10 HEPES, 0.5 EGTA, 4.5 Mg-ATP, 0.3 Na2GTP, 14 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-72.17,Vh:-70,Vss:-70}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.4,CO2:true}).log();
  //Hájos 2013 Input-output features of anatomically identified CA3 neurons during hippocampal sharp wave/ripple oscillation in vitro.
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='138 K-Gluconate, 3 CsCl, 10 Na2-Phosphocreatine, 4 MgATP, 0.4 TrisGTP, 10 HEPES, 0.2 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:0,Vss:NaN}, Erev:{IPSC:-80,EPSC:0,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.38,CO2:true}).log();
  //Papp 2013 Different input and output properties characterize parvalbumin-positive basket and Axo-axonic cells in the hippocampal CA3 subfield.
//  new solution(celsius=31,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='110 K-Gluconate, 4 NaCl, 20 HEPES, 0.1 EGTA, 10 Na2-Phosphocreatine, 2 Mg-ATP, 0.3 Na-GTP, 0.1 spermine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-45,Vh:-60,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Nakazawa 2002 Requirement for hippocampal CA3 NMDA receptors in associative memory recall.
//  new solution(celsius=30.5,
//               eSolution='124 NaCl, 2.5 KCl, 25 NaHCO3, 4 MgCl2, 3.5 CaCl2',
//               pSolution='120 K-Gluconate, 20 KCl, 10 HEPES, 2 MgCl2, 4 ATP, 0.3 TrisGTP, 7 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Szabadics 2010 Granule cells in the CA3 area.
//  new solution(celsius=35.5,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-Gluconate, 43.5 KCl, 1.8 NaCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:false}).log();
//  new solution(celsius=35.5,
//               eSolution='126 NaCl, 10.2 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-Gluconate, 43.5 KCl, 1.8 NaCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:false}).log();
  //Maccaferri 1998 Target-specific expression of presynaptic mossy fiber plasticity.
//  new solution(celsius=24,
//               eSolution='130 NaCl, 24 NaHCO3, 3.5 KCl, 1.25 NaH2PO4, 3 CaCl2, 1.5 MgSO4',
//               pSolution='100 Cs-Gluconate, 5 MgCl2, 10 HEPES, 30 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //Bartos 2001 Rapid signaling at inhibitory synapses in a dentate gyrus interneuron network.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-Gluconate, 70 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //Urban 1996 Induction of hebbian and non-hebbian mossy fiber long-term potentiation by distinct patterns of high-frequency stimulation.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 2 KCl, 26 NaHCO3, 1 MgCl2, 2.5 CaCl2',
//               pSolution='120 CsF, 20 CsCl, 1 BAPTA, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:NaN,CO2:true}).log();
  //Szabadics 2009 Functional specificity of mossy fiber innervation of GABAergic cells in the hippocampus.
//  new solution(celsius=36,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-Gluconate, 43.5 KCl, 1.8 NaCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:false}).log();
  //Armstrong 2011 Neurogliaform cells in the molecular layer of the dentate gyrus as feed-forward γ-aminobutyric acidergic modulators of entorhinal-hippocampal interplay.
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='40 CsCl, 90 K-Gluconate, 1.8 NaCl, 1.7 MgCl2, 3.5 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               pSolution='90 K-Gluconate, 1.8 NaCl, 1.7 MgCl2, 27.4 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();  
  //Markwardt 2011 Ivy/neurogliaform interneurons coordinate activity in the neurogenic niche.
//  new solution(celsius=22,
//               eSolution='125 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 25 NaHCO3',
//               pSolution='190 K-Gluconate, 45 KCl, 4 MgCl2, 10 HEPES, 4 MgATP, 0.3 NaGTP, 7 Na2-Phosphocreatine, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:false}).log();
  //Jinde 2012 Hilar mossy cell degeneration causes transient dentate granule cell hyperexcitability and impaired pattern separation.
//  new solution(celsius=33,
//               eSolution='124 NaCl, 4.5 KCl, 26 NaHCO3, 1.2 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               pSolution='125 Cs-Methanesulfonate, 4 Mg2ATP, 4 NaCl, 0.3 Na2GTP, 16 KHCO3, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-67,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:3}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Kraushaar 2000 Efficacy and stability of quantal GABA release at a hippocampal interneuron-principal neuron synapse.
//    new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 0.5 CaCl2, 2.5 MgCl2',
//               pSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='140 K-Methylsulfate, 2 KCl, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-71.4,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
  //Larimer 2010 Representing information in cell assemblies: persistent activity mediated by semilunar granule cells.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 K-Methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:-74,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 Cs-Methylsulfate, 4 NaCl, 10 HEPES, 1 EGTA, 25 TEA-OH, 5 QX314-Br, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:55,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //Larimer 2008 Nonrandom local circuits in the dentate gyrus.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 K-Methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:-76.7,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //Bartos 2002 Fast synaptic inhibition promotes synchronized gamma oscillations in hippocampal interneuron networks.
//  new solution(celsius=33.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-Gluconate, 40 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:17.019,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //Sambandan 2010 Associative plasticity at excitatory synapses facilitates recruitment of fast-spiking interneurons in the dentate gyrus.
//  new solution(celsius=30,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='120 K-Gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.5 Na2GTP, 10 HEPES, 7 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:17.019,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //Williams 2007 Semilunar granule cells: glutamatergic neurons in the rat dentate gyrus with axon collaterals in the inner molecular layer.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               pSolution='140 K-Methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-50,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Savanthrapadian 2014 Synaptic properties of SOM- and CCK-expressing cells in dentate gyrus interneuron networks.
//  new solution(celsius=31.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='140 K-Gluconate, 4 KCl, 5 HEPES, 2 MgCl2, 4 Na2ATP, 0.1 EGTA, 0.5 NaGTP, 7 Na-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=31.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 K-Gluconate, 40 KCl, 10 HEPES, 2 MgCl2, 2 Na2ATP, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //Dasgupta 2015 Calcium permeable AMPA receptor-dependent long lasting plasticity of intrinsic excitability in fast spiking interneurons of the dentate gyrus decreases inhibition in the granule cell layer.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 1 MgCl2, 2 CaCl, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='135 K-Gluconate, 7 KCl, 10 HEPES, 10 Na2-Phosphocreatine, 5 MgATP, 0.5 Na2GTP, 0.2 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-65}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//    new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 1 MgCl2, 2 CaCl, 26 NaHCO3, 1.25 NaH2PO4',
//               pSolution='137 Cs-Gluconate, 7 CsCl, 0.2 EGTA, 10 HEPES, 3 QX222-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-20}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //Hsu 2016 Differential Recruitment of Dentate Gyrus Interneuron Types by Commissural Versus Perforant Pathways.
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='121.5 CsMethanesulfonate, 0.1 EGTA, 4 MgCl2, 13.5 CsCl, 10 HEPES, 5 QX314-Br, 2 Na2ATP, 10 Na2-phosphocreatine, 0.3 Na3GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:10,Vss:NaN}, Erev:{IPSC:-25,EPSC:10,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='136.8 K-Gluconate, 7.2 KCl, 0.2 EGTA, 4 MgATP, 10 HEPES, 7 Na2-Phosphocreatine, 0.5 Na3GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:-75,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Harney 2002 Pre- and postsynaptic properties of somatic and dendritic inhibition in dentate gyrus.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 11 MgCl2',
//               pSolution='140 KCl, 10 EGTA,10 HEPES, 20 Na2-Phosphocreatine, 2 Mg2ATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Hefft 2005 Asynchronous GABA release generates long-lasting inhibition at a hippocampal interneuron-principal neuron synapse.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               pSolution='110 KCl, 35 K-Gluconate, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES, 0.75 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Liu 2014 Rapid dynamic changes of dendritic inhibition in the dentate gyrus by presynaptic activity patterns.
//    new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='15 K-Gluconate, 140 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               pSolution='135 K-Gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2 4 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Price 2005 Neurogliaform neurons form a novel inhibitory network in the hippocampal CA1 area.
//  solution(celsius=32,
//           eSolution='130 NaCl, 3.5 KCl, 2.5 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3, 3 KYNA',
//           pSolution='126 K-Gluconate, 10 HEPES, 10 Na2-Phosphocreatine, 4 KCl, 4 MgATP, 0.3 NaGTP',
//           recordingMethod='whole-cell',
//           voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:-70,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//           pH={e:NaN,i:7.3,CO2:true}).log();
  //Yu 2015 Dentate total molecular layer interneurons mediate cannabinoid-sensitive inhibition.
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4, 26 NaHCO3',
//               pSolution='125 KCl, 10 K-Gluconate, 10 HEPES, 2 MgCl2, 0.2 EGTA, 2 NaATP, 0.5 NaGTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:-70,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  
  //Yu 2013 Status epilepticus enhances tonic GABA currents and depolarizes GABA reversal potential in dentate fast-spiking basket cells.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4, 26 NaHCO3',
//               pSolution='125 KCl, 10 K-Gluconate, 10 HEPES, 2 MgCl2, 0.2 EGTA, 2 NaATP, 0.5 NaGTP, 10 Na2-Phosphocreatine.',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:-70,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Chamberland 2010 Synapse-specific inhibitory control of hippocampal feedback inhibitory circuit.
  //Whole cell: Experimental Erev from Soma IPSCs=-71.9±1.2 EPSC=10;
//  new solution(celsius=32,
//               eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//               pSolution='130 KMeSO3, 2 MgCl2, 10 Na2-Phosphocreatine, 10 HEPES, 2 TrisATP, 0.2 TrisGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-71.9,EPSC:10,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //Jarolimek 1999 A furosemide-sensitive K+-Cl- cotransporter counteracts intracellular Cl- accumulation and depletion in cultured rat midbrain neurons
  //[K]o= 2 [A-]pip= 4.5: Experimental Erev in Dendrites=−97.7 ± 1.8 in Soma=−83.4 ± 0.9
//  exp4 = new solution(celsius=22,
//                      eSolution='156 NaCl, 2 KCl, 1 CsCl, 2 CaCl2, 1 MgCl2',
//                      pSolution='140 K-Glucuronate, 0.25 CaCl2, 2 Mg-ATP, 4 QX314-Br',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-83.4,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:17.5,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o=10 [A-]pip= 4.5: Experimental Erev in Dendrites=−72.5 ± 2.1 in Soma=−73.7 ± 0.9
//  exp5 = new solution(celsius=22,
//                      eSolution='148 NaCl,10 KCl, 5 CsCl, 2 CaCl2, 1 MgCl2',
//                      pSolution='140 K-Glucuronate, 0.25 CaCl2,  0 MgCl2, 2 Mg-ATP, 4 QX314-Br',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:15.8,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o=10 [A-]pip=15  : Experimental Erev in Dendrites=−63.0 ± 0.9 in Soma=−56.5 ± 0.3
//  exp6 = new solution(celsius=22,
//                      eSolution='148 NaCl,10 KCl, 5 CsCl, 2 CaCl2, 1 MgCl2',
//                      pSolution='130 K-Glucuronate, 0.25 CaCl2,0.5 MgCl2, 2 Mg-ATP, 5 QX314-Br, 3.5 NaCl, 5 KCl',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:15.8,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o= 2 [A-]pip=15  : Experimental Erev in Dendrites=−75.7 ± 1.8 in Soma=−59.8 ± 1.1
//  exp7 = new solution(celsius=22,
//                      eSolution='156 NaCl, 2 KCl, 1 CsCl, 2 CaCl2, 1 MgCl2',
//                      pSolution='130 K-Glucuronate, 0.25 CaCl2,0.5 MgCl2, 2 Mg-ATP, 5 QX314-Br, 3.5 NaCl, 5 KCl',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-59.8 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:17.5,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //Otis 1992 Modulation of decay kinetics and frequency of GABAA receptor-mediated spontaneous inhibitory postsynaptic currents in hippocampal neurons.
  //Experimental Erev in Soma=-2.7±0.4, GHK=1.5
//  exp8 = new solution(celsius=34,
//                      eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//                      pSolution='140 CsCl, 10 HEPES, 2 MgCl2',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-2.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//                      pH={e:7.35,i:7.2,CO2:true}).log();
  //Bertrand 2001 Unitary synaptic currents between lacunosum-moleculare interneurones and pyramidal cells in rat hippocampus.
  //Experimental Erev in Soma=-73.7, without Gluconate GHK=-69.65, with Gluconate GHK=-55.02
//  exp9 = new solution(celsius=22,
//                      eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 4 MgSO4, 4 CaCl2',
//                      pSolution='140 K-Gluconate, 5 NaCl, 0.5 EGTA, 2 MgCl2, 0.5 Hepes, 10 Phosphocreatine, 2 ATP-Tris, 0.4 TrisGTP',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//                      pH={e:7.4,i:7.3,CO2:true}).log();

  
  
  //---------------sharp electrode  
  //--> it is necessary to make Vj corrections

  //Buhl 1994 Physiological properties of anatomically identified axo-axonic cells in the rat hippocampus.
//  new solution(celsius=34.5,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1500 K-Methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-66,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-66.5,EPSP:10.5},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Gulyás 1993 Hippocampal pyramidal cells excite inhibitory neurons through a single release site.
//  new solution(celsius=24,
//               eSolution='128 NaCl, 26 NaHCO3, 3 KCl, 1.25 NaH2PO4, 4 CaCl2, 4 MgCl2',
//               pSolution='500 K-Acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-60,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:false}).log();
  //Mercer 2012 SP-SR interneurones: a novel class of neurones of the CA2 region of the hippocampus.
//  new solution(celsius=24,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 KMethylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-59,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Mercer 2012 Local circuitry involving parvalbumin-positive basket cells in the CA2 region of the hippocampus.
//  new solution(celsius=24,
//               eSolution='124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1 MgSO4, 2.5 CaCl2',
//               pSolution='2000 KMethylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:-67,Vh:NaN,Vss:NaN},
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Miles 1990 Synaptic excitation of inhibitory cells by single CA3 hippocampal pyramidal cells of the guinea-pig in vitro.
//  new solution(celsius=37,
//               eSolution='124 NaCl, 4 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3',
//               pSolution='3000 K-Acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:-7},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.2,CO2:true}).log();
  //Jaffe 1990 Induction of long-term potentiation at hippocampal mossy-fiber synapses follows a Hebbian rule.
//  new solution(celsius=33,
//               eSolution='124 NaCl, 3 KCl, 26 NaHCO3, 3 CaCl2, 3 MgCl2',
//               pSolution='3000 KCl, 100 QX314-Cl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:-80}, 
//               Erev:{IPSC:NaN,EPSC:-2,IPSP:NaN,EPSP:NaN},
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:false}).log();
  //Williams 1988 Muscarinic depression of long-term potentiation in CA3 hippocampal neurons.
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
  //Zalutsky 1990 Comparison of two forms of long-term potentiation in single hippocampal neurons.
//  new solution(celsius=35,
//               eSolution='125 NaCl, 2.5 KCl, 4 MgCl2, 4 CaCl2, 26 NaHCO3, 1 NaH2PO4',
//               pSolution='3000 CsCl',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
    //Miles 1996 Differences between somatic and dendritic inhibition in the hippocampus.
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
//               pSolution='2000 K-Acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, 
//               Erev:{IPSC:NaN,EPSC:NaN,IPSP:-68,EPSP:NaN}, 
//               Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Buckmaster 1993 A comparison of rat hippocampal mossy cells and CA3c pyramidal cells.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 5 KCl,1.25 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2 CaCl2',
//               pSolution='4000 K-Acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:-74,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Buhl 1994 Diverse sources of hippocampal unitary inhibitory postsynaptic potentials and the number of synaptic release sites.
  //Sharp elctrode: Experimental Erev at [-65 to -50] mV RMP from Soma=[-78 to -65]; without accetate GHK=[-74.9 to -73.1]
//  new solution(celsius=35,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               pSolution='1500 K-Methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:-77,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();

  //Ali 1999 IPSPs elicited in CA1 pyramidal cells by putative basket cells in slices of adult rat hippocampus.
  //exp9 = new solution(34,'124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1.0 MgSO4, 2.5 CaCl2','2000 K-Methylsulfate',Vm=-60,isSharpElectrode=true,O2_CO2_95_5=true,pHo=NaN,pHi=NaN).log(); //Sharp elctrode: Experimental Erev in Soma=-72.4±5.5, GHK=-72.11
  //Cobb 1995 Synchronization of neuronal activity in hippocampus by individual GABAergic interneurons.
  //exp16= new solution(35,'126 NaCl, 3 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2 MgSO4, 2 CaCl2','1500 K-Methylsulfate',Vm=NaN,isSharpElectrode=true,O2_CO2_95_5=true,pHo=7.2,pHi=NaN).log(); //Sharp elctrode: Experimental Erev at ? mV RMP from Soma=-75.5±7.6; without accetate GHK=-83.55
  //Empson 1995 The perforant path projection to hippocampal area CA1 in the rat hippocampal-entorhinal cortex combined slice.
  //exp17= new solution(34,'124 NaCl, 26 NaHCO3, 3 KCl, 1.25 NaH2PO4, 1.6 CaCl2, 1.8 MgSO4','2500 K-acetate',Vm=-61,isSharpElectrode=true,O2_CO2_95_5=true,pHo=7.2,pHi=NaN).log(); //Sharp elctrode: Experimental Erev at ? mV RMP from Soma=-66.9±0.9;-69.2±0.7;-71.8±1.22;-85.9±2.3 for IPSPs, 7.5±0.2;8.6±0.6;13.2±1.2 for EPSPs, GHK=IPSP:-79.25  EPSP:-8.21


  //---------------perforated patch  


  //Dallwig 1999 On the mechanism of GABA-induced currents in cultured rat cortical neurons -> HCO3-Cl cotransport
  //exp10 = new experiment(22,'125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','',Vm=-70,isSharpElectrode=false,O2_CO2_95_5=true,pHo=7.4,pHi=NaN).log();    //Perforated-patch:HCO3/CO2-buffered saline: Experimental Erev in Soma=–59, GHK at -70 mV RMP =-58.8
  //exp11 = new experiment(22,'125 NaCl, 2.5 KCl, 26 Na-Gluconate, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','',Vm=-65,isSharpElectrode=false,O2_CO2_95_5=false,pHo=7.4,pHi=NaN).log(); //Perforated-patch:Hepes-buffered saline: Experimental Erev in Soma=-73, GHK at -65 mV RMP=-64.86
  
//---------------outside-out

  //exp18 = new experiment(22,'125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','140 KCl, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',RMP=NaN,isSharpElectrode=false,O2_CO2_95_5=true,pHo=7.2,pHi=7.3).log(); //Experimental Erev in patch=4.5 {ENa}, 9.8 {ECa}, GHK=-3.95

//---------------cell-attached

  //Dugladze 2012 Segregation of axonal and somatic activity during fast network oscillations.
//  new solution(celsius=22,
//               eSolution='125 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 25 NaHCO3',
//               pSolution='135 K-Gluconate, 5 KCl, 2 MgATP, 0.3 Na3GTP, 10 HEPES',
//               recordingMethod='cell-attached',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
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
   ["Acetate","ATP","Ba","Br","Ca","Cl","Cs","Cl","F","Gluconate","Glucuronate",
    "GTP","H2PO4","HCO3","HPO4","K","Methylsulfate","Methanesulfonate","Mg",
    "Na","OH","SO4","TEA","Tris","QX314","Zn"
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
 
 //calculate the intracellular concentrations knowing the pipette solution concentrations
 switch (recordingMethod) {
   case 'whole-cell':
   case 'outside–out':
     Object.keys(self.Ions).forEach(function(ionName){
       self.Ions[ionName].iC = self.Ions[ionName].pC
     })
     break;
   case 'sharp electrode':
     // sharp electrodes do not change intracellular concentration significantly 
     // they need tens of minutes (15 min in one study) to change 1.5% (empirical value by Keivan)
     Object.keys(self.Ions).forEach(function(ionName){
       self.Ions[ionName].iC = self.Ions[ionName].pC * 0.015
     })
     // if extracellular solution had Cl but the recording pippet did not set [Cl]i to 4 mM
     if (self.Ions.Cl)
       if (self.Ions.Cl.pC === 0)
         self.Ions.Cl.iC = 4e-3;
     // if extracellular solution had HCO3 but the recording pippet did not calculate [HCO3]i by pH difference
     if (self.Ions.HCO3)
       if (self.Ions.HCO3.pC === 0)
         self.Ions.HCO3.iC = Math.exp(((pH.e)?pH.e:7.35) - ((pH.i)?pH.i:7.3)) * self.Ions.HCO3.eC;
     if (self.Ions.Na)
       if (self.Ions.Na.pC === 0)
         self.Ions.Na.iC = 10e-3;
     if (self.Ions.Ca)
       if (self.Ions.Ca.pC === 0)
         self.Ions.Ca.iC = 1e-7;
     break;
   case 'cell-attached':
   case 'perforated patch':
     //Ma 2012 Bicarbonate efflux via GABA(A) receptors depolarizes membrane potential and inhibits two-pore domain potassium channels of astrocytes in rat hippocampal slices
     // in perforated patch clamp setting the intracellular concentrations are unknown
     // knowing the RMP it is possible to estimate the [K]i and [Cl]i assuming that EK=ECl=Vm
     // [K]i = Math.exp(Vm * -F_RT)*[K]o
     // Question: what happens in the presence of TEA
     // this.Ions.K.iC = Math.exp(-1 * voltages.Vm.RMP /1000 * F_RT) * this.Ions.K.eC; 
     if (self.Ions.K)     self.Ions.K.iC     = 140e-3;
     if (self.Ions.Na)    self.Ions.Na.iC    = 10e-3;
     if (self.Ions.Cl)    self.Ions.Cl.iC    = 4e-3;
     if (self.Ions.Ca)    self.Ions.Ca.iC    = 1e-7;
     if (self.Ions.Mg)    self.Ions.Mg.iC    = 30e-3;
     // In cell attached mode pH.i is assumed a fixed value
     if (self.Ions.HCO3)  self.Ions.HCO3.iC  = Math.exp(((pH.e)?pH.e:7.35) - (pH.i=7.3)) * self.Ions.HCO3.eC;// 10e-3;
     if (self.Ions.H2PO4) self.Ions.H2PO4.iC = 60e-3;
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
   var VjBetweenPippetAndExtracellular = (zigmas.eSFnum === 0)?0:round(R*T/F * (zigmas.eSFnum / zigmas.eSFdenum) * Math.log(zigmas.pAz2ma / zigmas.eAz2ma) * 1000,2);  // = pE-eE
   var VjBetweenPippetAndIntracellular = (zigmas.iSFnum === 0)?0:round(R*T/F * (zigmas.iSFnum / zigmas.iSFdenum) * Math.log(zigmas.pAz2ma / zigmas.iAz2ma) * 1000,2);  // = pE-iE
   Logger.log(['eVj=',VjBetweenPippetAndExtracellular,'iVj=',VjBetweenPippetAndIntracellular]);
   return (recordingMethod === 'sharp electrode')?round(VjBetweenPippetAndIntracellular - VjBetweenPippetAndExtracellular,2):VjBetweenPippetAndExtracellular;
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
 this.ErevGABAAwithGluconate = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Cl       ,1   );    //PCl/PCl
   channel.addIon(self.Ions.HCO3     ,0.44);    //PK /PCl=[0.18 to 6] in different studies -> reviewd in Farrant 2007 The cellular, molecular and ionic basis of GABAA receptor signalling
   channel.addIon(self.Ions.Br       ,1.4 );    //PBr/PCl
   channel.addIon(self.Ions.F        ,0.09);    //PF /PCl
   channel.addIon(self.Ions.Gluconate,0.11);    //PF /PCl
   return channel.Erev();
 }())
 this.ErevGABAB = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.K,1);
   return channel.Erev();
 }())
 
 this.log = function() {
   Logger.log(
     '\n\nI.e\t\t\t\t'+round(self.strength.e,2)+
     '\nI.p\t\t\t\t'+round(self.strength.p,2)+
       '\n\nVj.exp\t\t\t'+voltages.Vj.exp+
         '\nVj.cal\t\t\t'+voltages.Vj.cal+
           ((isNumeric(voltages.Vm.Vh))?'\nVh\t\t\t\t'+voltages.Vm.Vh+'{without Vj correction};'+round(voltages.Vm.Vh - self.Vj,2)+'{with Vj correction}@{Vh}':'')+
             ((isNumeric(voltages.Vm.Vss))?'\nVss\t\t\t\t'+voltages.Vm.Vss+'{without Vj correction};'+round(voltages.Vm.Vss + self.Vj,2)+'{with Vj correction}@{Vss}':'')+
               ((isNumeric(voltages.Vm.RMP))?'\nRMP\t\t\t'+voltages.Vm.RMP+'{without Vj correction};'+round(voltages.Vm.RMP + self.Vj,2)+'{with Vj correction}@{RMP}':'')+
                 '\n\nErev'+
                     '\n\tGlutamatergic:'+
                       '\n\t\tCalculated:'+
                         '\n\n\t\t'+this.ErevCaImpermeableAMPA+' {AMPA Ca Impermeable}; '+this.ErevCaPermeableAMPA+' {AMPA Ca Permeable}; '+this.ErevNMDA+' {NMDA}'+
                           '\n\n\t\tExperimental:'+
                             '\n\n\t\t'+((isNumeric(voltages.Erev.EPSC) || isNumeric(voltages.Erev.EPSP)) ? ((isNumeric(voltages.Erev.EPSC)) ? voltages.Erev.EPSC : voltages.Erev.EPSP)+' {without Vj correction}; '+round((isNumeric(voltages.Erev.EPSC)) ? voltages.Erev.EPSC - self.Vj : voltages.Erev.EPSP + self.Vj, 2)+' {with Vj correction}':'') +
                               '\n\n\tGABAergic:'+
                                 '\n\t\tCalculated:'+
                                   '\n\n\t\t'+this.ErevGABAA+' {GABA-A}; '+this.ErevGABAAwithGluconate+' {GABA-A-Gluconate Permeable}; '+this.ErevGABAB+' {GABA-B}'+
                                     '\n\n\t\tExperimental:'+
                                       '\n\n\t\t'+((isNumeric(voltages.Erev.IPSC) || isNumeric(voltages.Erev.IPSP)) ? ((isNumeric(voltages.Erev.IPSC)) ? voltages.Erev.IPSC : voltages.Erev.IPSP)+' {without Vj correction}; '+round((isNumeric(voltages.Erev.IPSC)) ? voltages.Erev.IPSC - self.Vj : voltages.Erev.IPSP + self.Vj, 2)+' {with Vj correction}':'') +
                                         '\n'+Object.keys(self.Ions).reduce(
                                           function(p,ionName) {
                                             var ion  = self.Ions[ionName];
                                             return p+='\n'+ionName+
                                               ':\n\teAc\t\t'+round(ion.eAc,2)+'\t\teC\t\t'+round(ion.eC*1000,2)+
                                                 '\n\tiAc\t\t'+round(ion.iAc,2)+'\t\tiC\t\t'+round(ion.iC*1000,2)+
                                                   '\n\tpAc\t\t'+round(ion.pAc,2)+'\t\tpC\t\t'+round(ion.pC*1000,2)
                                           },''))
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
  Ion.e = 1.6E-19;
  Ion.Nav = 6.02E23;
  this.name = name
  //this.phi = 0.0;    // ionic flux between intracellular and extracellular solution
  this.eC = 0.0;     // extracellular concentration
  this.iC = 0.0;     // intracellular concentration
  this.eA = 0.0;     // extracellular ionic activity
  this.iA = 0.0;     // intracellular ionic activity
  this.eAc= 0.0;     // extracellular ionic activity coefficient
  this.iAc= 0.0;     // intracellular ionic activity coefficient
  switch (name) {
    case "Acetate":
      this.charge = -1;
      this.mu = 2.65098576E11;
      break;
    case "ATP":
      this.charge = -2; // -2,-3 or -4 The relative proportions of each valency species depends on pH and the ionic composition of the solution.
      this.mu = 0.715194E11;  //assuming ATP's mu
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
    case "Cl":
      this.charge = -1;
      this.mu = 4.95159E11;
      break;
    case "Cs":
      this.charge = +1;
      this.mu = 5.00934E11;
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
    case "HPO4":
      this.charge = -2;
      this.mu = 1.8493E11;
      break;
    case "Glucuronate":
      this.charge = -1;
      this.mu = 1.5734268E11; //assuming Gluconate's mu
      break;      
    case "Gluconate":
      this.charge = -1;
      this.mu = 1.5734268E11;
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
    case "Methylsulfate": // Methylsulfate MeSO4
      this.charge = -1;
      this.mu = 3.16592544E11;
      break;  
    case "Methanesulfonate": //Methylsulfonate (pseudonym: Methanesulfonate, MeSO3) 
      this.charge = -1;
      this.mu = 3.16592544E11;
      break;
    case "SO4":
      this.charge = -2;
      this.mu = 2.59551E11;
      break;
    case "TEA":
      this.charge = 1;
      this.mu = 2.11697424E11;
      break;      
    case "Tris":
      this.charge = 1;
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
      this.mu = 0.007348 / Ion.Nav / Ion.e / Ion.e;
      break;
  }
};