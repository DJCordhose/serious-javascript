/*
 * /usr/local/bin/iojs --use_strict --harmony --es_staging --harmony_modules --harmony_arrow_functions --harmony_classes --harmony_object_literals index.js
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
var PersonModul = {};
(function () {

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        log() {
            console.log(this.name + " ist " + this.age + " Jahre alt");
        }
    }

    class Programmer extends Person {
        constructor(name, age, programmersprache) {
            super(name, age);
            this.programmersprache = programmersprache;
        }

        code() {
            console.log(this.name + " programmiert in " + this.programmersprache);
        }
    }
    let andereLokaleVariable = 32;
    if (true) {
        const andereLokaleVariable = 47;
        //console.log("Im Sichtbarkeitsbereich", andereLokaleVariable);
    }
    //console.log(andereLokaleVariable);

    PersonModul.Programmer = Programmer;
}());

var opa = new PersonModul.Programmer('Opa', 86, 'Cobol');
var oma = new PersonModul.Programmer('Oma', 88, 'Fortran');

var programmierer = new Set();
programmierer.add(opa);
programmierer.add(oma);
for (let p of programmierer) {
    p.code();
}
//var s = JSON.stringify(programmierer);
//console.log(s);

/*
//opa.code();

 function log(person) {
 console.log("Arguments", arguments);
 console.log("Das erste Elemet", arguments[1]);
 console.log(person);
 }

 var person = {
 name: 'Olli',
 age: 44,
 sprachen: ['Java', 'JavaScript']
 };
 person.haarfarbe = 'blond';

 var array = [person, {name: 'Oma', age: 88, haarfarbe: 'grau'}];
 for (var i=0; i < array.length; i++) {
 var p = array[i];
 log(person, 10, 10);
 }

*/

