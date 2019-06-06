# Hippocampome.org Data Mining Plugin for [Google Sheets](https://docs.google.com/spreadsheets/d/19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A/edit?usp=sharing)

In [hippocampome.org](hippocampome.org) we find hippocampal cell types and link them to morphologies, biomarkers, membrane electrophysiology, firing pattern, connectivity and their **synaptic electrophysiology**. For this purpose, we need to extract pieces of evidence from papers, add a description to them, extract required data, link the extracted information to quotation, figures, and tables extracted from papers (i.e. references.).

The current tool, which is still under development, is a Data Mining plugin for Google Sheets that uses Google Apps Script engine. 
This tool is currently heavily linked to [my sheet](https://docs.google.com/spreadsheets/d/19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A/edit?usp=sharing), but it has several components that are reusable.
- a **sheet sampling tool**: returns rows of a sheet that have a specific column value,
- an **API for prefilling google doc forms**: we use prefilled forms to collect extracted data and preview previously extracted data and link them to references,
- a **text cleaner tool** that corrects the format of text that is copied and pasted from a PDF or HTML file. This tool is optimized for Google Chrome or Opera browsers since I use some experimental javascript features, mostly lookbehind regex. For instance, this tool automatically converts [small caps](https://en.wikipedia.org/wiki/Small_caps) in the text of journal of neuroscience to large caps (2 m**m** NaCl --> 2 m**M** NaCl).
- a **Check Query Tool**: to access our *potential connection search engine* hosted by hippocampome.org. This search engine gets morphology, marker, membrane electrophysiology and firing pattern of presynaptic and postsynaptic neurons and generates a list of potential connections. While generating this list, we exclude potential connections that are already refuted by hippocampome.org.
- a **reference reviewer and editor**: this tool provides previews for references (figures, tables, and quotations) user has extracted form papers. At the same time highlights bits of the text that potentially have extractable data and identification information. This tool is contenteditable and user can edit the mistakes in the copied text while extracting information.
- a set of pure JavaScript functions that run in the browser and get pipette and bath solution, and a set of experimental settings to calculate **liquid junction potential** (Vj) of recording pipette and the **reversal potential** (Erev) of synapses using *ionic activity* (Ac) and *strength* (I).
```javascript
  new solution(celsius=33,
               eSolution='119 NaCl, 2.5 KCl, 1.3 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2, 26 NaHCO3',
               pSolution='150 K-Gluconate, 1.5 MgCl2, 5 HEPES, 1.1 EGTA,10 Na2-Phosphocreatine, 2 MgATP',
               recordingMethod='whole-cell',
               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN},
               Erev:{IPSC:-85,EPSC:NaN,IPSP:NaN,EPSP:NaN},
               Vj:{exp:12,correctedAlready:false}},
               pH={e:NaN,i:7.25,CO2:true}).log();
```
Example Result:
```
I.e		0.16
I.p		0.17

Vj.exp		12
Vj.cal		17.68
Vh		-50{without Vj correction};-62{with Vj correction}@{Vh}

Erev
	Glutamatergic:
		Calculated:

		-9.32 {AMPA Ca Impermeable}; -8.6 {AMPA Ca Permeable}; -3.88 {NMDA}

		Experimental:

	GABAergic:
		Calculated:

		-101.48 {GABA-A}; -52.1 {GABA-A-Gluconate Permeable}; -108.01 {GABA-B}

		Experimental:

		-85 {without Vj correction}; -97 {with Vj correction}

ATP:
	eAc		0.34		eC		0
	iAc		0.34		iC		2
	pAc		0.34		pC		2
Ca:
	eAc		0.34		eC		2.5
	iAc		0.34		iC		0
	pAc		0.34		pC		0
Cl:
	eAc		0.77		eC		129.1
	iAc		0.76		iC		3
	pAc		0.76		pC		3
Gluconate:
	eAc		0.77		eC		0
	iAc		0.76		iC		150
	pAc		0.76		pC		150
H2PO4:
	eAc		0.77		eC		1.3
	iAc		0.76		iC		0
	pAc		0.76		pC		0
HCO3:
	eAc		0.77		eC		26
	iAc		0.76		iC		0
	pAc		0.76		pC		0
K:
	eAc		0.77		eC		2.5
	iAc		0.76		iC		150
	pAc		0.76		pC		150
Mg:
	eAc		0.34		eC		1.3
	iAc		0.34		iC		3.5
	pAc		0.34		pC		3.5
Na:
	eAc		0.77		eC		146.3
	iAc		0.76		iC		20
	pAc		0.76		pC		20
```
## Preview Tool
![Preview Tool](https://github.com/k1moradi/Hippocampome.Org-Data-Miner-s-Plugin-for-Google-Sheet-/blob/master/Form%26Viewer.png "Preview Tool")
## Check Query Tool
![Check Query Tool](https://github.com/k1moradi/Hippocampome.Org-Data-Miner-s-Plugin-for-Google-Sheet-/blob/master/CheckQueryTool.png "Check Query Tool")
## Text Cleaner Tool as a sidebar
![Text Cleaner Tool](https://github.com/k1moradi/Hippocampome.Org-Data-Miner-s-Plugin-for-Google-Sheet-/blob/master/TextCleaner.png "Text Cleaner Tool")

Rees, C. L., Moradi, K., & Ascoli, G. A. (2017). *Weighing the Evidence in Peters’ Rule: Does Neuronal Morphology Predict Connectivity? Trends in Neurosciences*, 40(2), 63–71. [doi:10.1016/j.tins.2016.11.007](https://doi.org/10.1016/j.tins.2016.11.007)

Moradi, K., & Ascoli, G. A. (2018). *Systematic Data Mining of Hippocampal Synaptic Properties. In Hippocampal Microcircuits* (pp. 441-471). Springer, Cham., [doi: 10.1007/978-3-319-99103-0_11](https://link.springer.com/chapter/10.1007/978-3-319-99103-0_11)

Moradi, K., Ascoli, G. A. (2019). *A comprehensive knowledge base of synaptic electrophysiology in the rodent hippocampal formation. bioRxiv*, [doi: 10.1101/632760](https://www.biorxiv.org/content/10.1101/632760v2.full)
