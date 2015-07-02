# Piano-key [![Build Status](https://travis-ci.org/dfcreative/piano-key.svg?branch=master)](https://travis-ci.org/dfcreative/piano-key) [![Code Climate](https://codeclimate.com/github/dfcreative/piano-key/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/piano-key) [![unstable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Tools for working with [piano keys and frequencies](http://en.wikipedia.org/wiki/Piano_key_frequencies).

[![npm install piano-key](https://nodei.co/npm/piano-key.png?mini=true)](https://nodei.co/npm/piano-key/)


```js
var key = require('piano-key');

key.getName(number);			//
key.getFrequency(number|name)	//440
key.getOctave(number)			//[12,14,15,16,167]
key.getNumber(name|frequency)	//

key.isBlack(number);			//false
```