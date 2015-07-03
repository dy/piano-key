var assert = require('assert');
var key = require('./');

assert(key.getNumber('a4'))
assert(key.getFrequency('A4') === 440);
assert(key.getFrequency(49) === 440);
assert(key.getNumber(440) === 49);

assert(key.getOctave('A4') === 4);
assert(key.getOctave(49) === 4);

assert(key.isBlack(29));
assert(key.isBlack('g#4'));
assert(!key.isBlack('g4'));
assert(!key.isBlack(28));
assert(!key.isBlack(28.5));

assert(key.getNumber('c1') === 4);
assert(key.getNumber('c2') === 16);
assert(key.getNumber('c3') === 28);
assert(key.getNumber('c4') === 40);
assert(key.getNumber('a4') === 49);

assert(key.getName(1) === 'A0');
assert(key.getName(4) ==='C1');
assert(key.getName(16) === 'C2');
assert(key.getName(28) === 'C3');
assert(key.getName(40) === 'C4');
assert(key.getName(49) === 'A4');
assert(key.getName(88) === 'C8');

assert(key.getName(key.getNumber('C3')) === 'C3')