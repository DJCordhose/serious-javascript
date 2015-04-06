/*
 * /usr/local/bin/iojs --use_strict --harmony --es_staging --harmony_modules --harmony_arrow_functions --harmony_classes --harmony_object_literals jax2015.js
 *
 * Content:
 *
 * ES5 part
 * 'use strict'
 * var
 * object
 * console.log
 * environments: node und chrome
 * array
 * for
 * function
 * iife
 * class pattern (keine Vererbung)
 *
 * ES6 part
 * let, const
 * class, extends
 */
'use strict';

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    code() {
        return this.getName() + " codes in " + this.language;
    }
}
const programmer = new Programmer('Erna', 'JavaScript');
console.log(programmer.code());
console.log(programmer instanceof Programmer);
console.log(programmer instanceof Person);

var a = () => console.log("Aha");
console.log(typeof a)
console.log(typeof a.__proto__)
console.log(a instanceof Function)