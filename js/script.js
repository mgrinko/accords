"use strict";

var accordsList = [];


var tone = {
    tonic:           ['до', 'до-диез', 'ре','ре-диез', 'ми', 'фа', 'фа-диез', 'соль', 'соль-диез', 'ля', 'ля-диез', 'си'],
	tonicShortEntry:   ['C',  'C#/D♭',   'D',  'D#/E♭',   'E',  'F',  'F#/G♭',    'G',   'G#/A♭',      'A',  'A#/B',    'H'],
	tonicAbstractValue:  [1,   1.5,       2,    2.5,       3,   4,     4.5,      5,       5.5,         6,   6.5,         7],
	tonicArrayPosition:  [0,    1,        2,     3,        4,   5,      6,       7,        8,           9,   10,         11]
  }
  
  

  

function getAccordsList() {

  accordsList = [];
  
  for (var i = 0; i < +document.getElementsByName('accord').length; i++) {
	accordsList[i] = document.getElementsByName('accord')[i].innerHTML;
  }
}

function upAccordsList() {
	
	for (var i = 0; i < +accordsList.length; i++) {
		var stringInWork = '';
		
		var j = 0;
		while (accordsList[i][0] != tone.tonicShortEntry[j]) {
			j++;
		}
		
		if (accordsList[i][1] == '#') j++;
		if (j > 11) j = 0;
		if (accordsList[i][1] == ('♭' || 'b')) j--;
		if (j < 0) j = 11;
		j++;
		if (j > 11) j = 0;
		if ((+tone.tonicAbstractValue[j] ^ 0) === +tone.tonicAbstractValue[j]) {
			stringInWork = tone.tonicShortEntry[j];
		} else {
			stringInWork = accordsList[i][0] + '#';
		}
		
		var k = 1;
		if (accordsList[i][1] == '#' || accordsList[i][1] == '♭' || accordsList[i][1] == 'b') k = 2;
		for (k; accordsList[i][k]; k++) {
			stringInWork += accordsList[i][k];	
		}
		accordsList[i] = stringInWork;
  }
}

function downAccordsList() {
	
	for (var i = 0; i < +accordsList.length; i++) {
		var stringInWork = '';
		
		var j = 0;
		while (accordsList[i][0] != tone.tonicShortEntry[j]) {
			j++;
		}
		
		if (accordsList[i][1] == '#') j++;
		if (j > 11) j = 0;
		if (accordsList[i][1] == ('♭' || 'b')) j--;
		if (j < 0) j = 11;
		j--;
		if (j < 0) j = 11;
		if ((+tone.tonicAbstractValue[j] ^ 0) === +tone.tonicAbstractValue[j]) {
			stringInWork = tone.tonicShortEntry[j];
		} else {
			stringInWork = accordsList[i][0] + '♭';
		}
		if (stringInWork === 'H♭') stringInWork = 'B';
		
		var k = 1;
		if (accordsList[i][1] == '#' || accordsList[i][1] == '♭' || accordsList[i][1] == 'b') k = 2;
		
		for (k; accordsList[i][k]; k++) {
			stringInWork += accordsList[i][k];	
		}
		
		accordsList[i] = stringInWork;
  }
}

function insertAccordsList() {
	
	var accordInWork;
	
	for (var i = 0; i < +document.getElementsByName('accord').length; i++) {
		accordInWork = document.getElementsByName('accord')[i];
		accordInWork.innerHTML = accordsList[i];
  }
}