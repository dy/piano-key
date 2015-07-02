/**
 * List of frequencies for piano key
 * @module  piano-key
 */


/** Note frequencies dict */
var key = {};


/** Get name for a number */
key.getName = function (number) {
	return key.notes[(number - 1) % 12] + Math.round((number + 3) / 12);
};


/** Get frequency for a number */
key.getFrequency = function (number) {
	if (typeof number === 'string') {
		number = key.getNumberFromName(number);
	}

	return Math.pow(2, (number - 49)/12) * 440;
};


/** Get number for a name */
key.getNumber = function (frequency) {
	if (typeof frequency === 'string') {
		return key.getNumberFromName(frequency);
	}

	return 12 * Math.log(frequency / 440)/Math.log(2) + 49;
};


/** Get note number from note name */
key.getNumberFromName = function (name) {
	var nameParts = /([a-z#]+)([0-9]+)/i.exec(name);

	//default octave is 0
	var octave = nameParts[2] || 0;

	//default note
	var note = (nameParts[1] || 'A').toUpperCase();

	var noteIdx = key.notes.indexOf(note);

	if (noteIdx < 0) {
		throw Error('Unknown note ' + name);
	}

	var noteNumber = octave * 12 + noteIdx + 1;

	return noteNumber;
};


/** Test whether key number passed is black */
key.isBlack = function (name) {
	if (typeof name === 'number') {
		name = key.getName(name);
	}

	return /#/.test(name);
};


/** List of note names */
key.notes = 'A A# B C C# D D# E F F# G G#'.split(' ');


module.exports = key;