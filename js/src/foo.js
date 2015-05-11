/*global console*/

function route() {
    'use strict';

    console.log(arguments);

    return function () {
        console.log(arguments);
    };
}

export default class Foo {
    constructor() {
        console.log('constructor');
        this.es6 = 'yay';
    }

    @route('/foo');
    test(t = 'foo') {
        console.log(t);
    }
}