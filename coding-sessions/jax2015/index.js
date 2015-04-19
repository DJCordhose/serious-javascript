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
 * class pattern
 * Vererbung?
 * Closures? Module?
 *
 * ES6 part
 * let, const
 * class, extends
 * for..of
 * import
 *
 */
'use strict';

// ECMAScript 2015
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    log() {
        console.log("Person:", this);
    }
}

class Programmer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }
    code() {
        console.log(this.name, "codes in", this.language)
    }
}

var olli = new Programmer('Olli', 44, 'JavaScript');

var array = [olli, new Programmer('Oma', 88, 'PureScript')];

// ECMAScript 2015
for (let person of array) {
    person.log();
    person.code();
}
console.log("Typ von Person: ");
console.log(typeof person);


