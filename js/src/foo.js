/*global console*/

export default class Foo {
    constructor() {
        console.log('constructor');
        this.es6 = 'yay';
    }

    test() {
        console.log(this.es6);
    }
}