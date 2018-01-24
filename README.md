# Hippocampome.org Data Mining Plugin for [Google Sheets](https://docs.google.com/spreadsheets/d/19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A/edit?usp=sharing)

In [hippocampome.org](hippocampome.org) we find hippocampal cell types and link them to morphologies, biomarkers, membrane electrophysiology, firing pattern, connectivity and their **synaptic electrophysiology**. For this purpose, we need to extract pieces of evidence from papers, add a description to them, extract required data, link the extracted information to quotation, figures, and tables extracted from papers (i.e. references.).

The current tool, which is still under development, is a Data Mining plugin for Google Sheets that uses Google Apps Script engine. 
This tool is currently heavily linked to [my sheet](https://docs.google.com/spreadsheets/d/19zgGwpUQiCHsxozzMEry1EsI1_6AS_Q14CEF3JStW4A/edit?usp=sharing). Still more work is needed to make it a general purspose tool.

This tool has several components that are reusable.
- *a sheet sampling tool:* returns rows of a sheet that have a specific column value,
- *an API for prefilling google doc forms*: we use prefilled forms to collect extracted data and preview previously extracted data and link to references,
- a *text cleaner tool* that corrects the format of text that is copied and pasted from a PDF or HTML files. This tool is optimized for Google Chrome or Opera Browsers since I use experimental javascript features, mostly lookbehind regex. For instance, this tool automatically converts [small caps](https://en.wikipedia.org/wiki/Small_caps) in the text of journal of neuroscience to large caps (2 m**m** NaCl --> 2 m**M** NaCl).
- a *Check Query Tool*: to search potential neuronal connections by accessing a hippocampome.org API.
- a *reference reviewer and editor*: this tool provides previews for references (figures, tables, and quotations) user has extracted form papers. At the same time highlights bits of the text that potentially have extractable data and identification information.

![Preview Tool](https://github.com/k1moradi/Hippocampome.Org-Data-Miner-s-Plugin-for-Google-Sheet-/blob/master/Form%26Viewer.png #Preview Tool)
![Check Query Tool](https://github.com/k1moradi/Hippocampome.Org-Data-Miner-s-Plugin-for-Google-Sheet-/blob/master/CheckQueryTool.png #Check Query Tool)
![Text Cleaner Tool](https://github.com/k1moradi/Hippocampome.Org-Data-Miner-s-Plugin-for-Google-Sheet-/blob/master/TextCleaner.png #Text Cleaner Tool)

Rees, C. L., Moradi, K., & Ascoli, G. A. (2017). *Weighing the Evidence in Peters’ Rule: Does Neuronal Morphology Predict Connectivity? Trends in Neurosciences*, 40(2), 63–71. [doi:10.1016/j.tins.2016.11.007](https://doi.org/10.1016/j.tins.2016.11.007)
