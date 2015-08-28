/**
 * List of frequencies for piano key
 * @module  piano-key
 */

var loop = require('mumath/loop')


/** Note frequencies dict */
var key = {};


/** Get name for a number */
key.getName = function (number) {
	return key.notes[loop(number - 4, 12)] + Math.round((number + 2) / 12);
};


/** Get frequency for a number */
key.getFrequency = function (number) {
	if (typeof number === 'string') {
		number = key.getNumberFromName(number);
	}

	return Math.pow(2, (number - 49) / 12) * 440;
};


/** Get number for a name */
key.getNumber = function (frequency) {
	if (typeof frequency === 'string') {
		return key.getNumberFromName(frequency);
	}

	return 12 * Math.log(frequency / 440) / Math.log(2) + 49;
};


/** Get note number from note name */
key.getNumberFromName = function (name) {
	var note = key.getNote(name);

	//default octave is 0
	var octave = key.getOctave(name);

	var noteIdx = key.notes.indexOf(note);

	if (noteIdx < 0) {
		throw Error('Unknown note ' + name);
	}

	var noteNumber = (octave - 1) * 12 + noteIdx + 4;

	return noteNumber;
};


/** Test whether key number passed is black */
key.isBlack = function (name) {
	if (typeof name === 'number') {
		name = key.getName(name);
	}

	return /#/.test(name);
};


/** Return key octave by key number */
key.getOctave = function (name) {
	if (typeof name === 'number') {
		name = key.getName(name);
	}

	var octave = /-?[0-9.]+/.exec(name);

	//let default octave be 0
	if (octave.length) {
		return parseFloat(octave[0]);
	}
	else {
		return 0;
	}
};


/** Return note name from number/name */
key.getNote = function (name) {
	if (typeof name === 'number') {
		name = key.getName(name);
	}

	var note = /[a-z#]+/i.exec(name);

	note = (note.length ? note[0] : 'A').toUpperCase();

	return note;
};


/** List of note names */
key.notes = 'C C# D D# E F F# G G# A A# B'.split(' ');


module.exports = key;