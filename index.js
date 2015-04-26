/**
 * List of frequencies for piano keys
 */

/** Note frequencies dict */
var keys = {};


var notes = 'A A# B C C# D D# E F F# G G#'.split(' ');

notes.forEach(function (note, i) {
	var noteOctaves = [];

	for (var octave = 0, noteNumber; octave < 10; octave++) {
		noteNumber = octave*12 + i + 1;
		//keys[49] === keys['A4'] === keys['A'][4] === 440
		keys[noteNumber] = keys[note + octave] = noteOctaves[octave] = f(noteNumber);
	}

	keys[note] = noteOctaves;
});

keys.frequency = f;
keys.number = n;
keys.name = nn;

/** Get frequency from note number */
function f (n) {
	return Math.pow(2, (n-49)/12) * 440;
}

/** Get note number from frequency */
function n (f) {
	return 12 * Math.log(f/440)/Math.log(2) + 49;
}

/** Get note name from note number */
function nn (n) {
	return notes[(n - 1) % 12] + Math.round((n + 3) / 12);
}

module.exports = keys;