var assert = require('assert');
var key = require('./');

assert(key['A']['4'] === 440);
assert(key['A4'] === 440);
assert(key[49] === 440);

assert(key.frequency(49) === 440);
assert(key.number(440) === 49);

// console.log(key.name(49), key.name(88), key.name(1), key.name(4))
assert(key.name(49) === 'A4');
assert(key.name(88) === 'C8');
assert(key.name(1) === 'A0');
assert(key.name(4) === 'C1');