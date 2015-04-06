/*
 * Run:
 * /usr/local/bin/iojs --harmony --es_staging --harmony_modules --harmony_classes --harmony_object_literals es6-iojs.js
 *
 * Modules:
 * - https://twitter.com/isntitvacant/status/577269567484923904?s=03
 * - http://www.2ality.com/2014/09/es6-modules-final.html
 *
 * ES6 on io.js
 * - https://iojs.org/en/es6.html
 *
 * ES6 features:
 * - http://www.2ality.com/2015/03/destructuring-algorithm.html
 * - http://es6-features.org/
 *
 * Content:
 * let, const
 * class, extends
 */
'use strict';

//import { person } from 'person';

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