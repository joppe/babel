/*global console*/

import $ from 'jquery';
import * as math from 'lib/math';
import Foo from 'lib/foo';

console.log('2π = ' + math.sum(math.pi, math.pi));

var f = new Foo();
f.test();

$('h1').text('Systemjs ftw!');

console.log('main.js');