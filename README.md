# Piano-key

List of [piano key and frequencies](http://en.wikipedia.org/wiki/Piano_key_frequencies).

`$ npm install piano-key`

```js
var key = require('piano-key');

key['A'][4]; //440
key['A4']; //440
key[49]; //440

key.frequency(49) //440
key.number(440) //49
key.name(49) //'A4'
```


[![NPM](https://nodei.co/npm/piano-key.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/piano-key/)