/*
 * /usr/local/bin/iojs --use_strict --harmony --es_staging --harmony_modules --harmony_arrow_functions --harmony_classes --harmony_object_literals jax2015.js
 *
 * - let/const (ES6)
 * - class, extends (ES6)
 * - types and fields (TypeScript)
 * - visibility (TypeScript)
 * - constructor shortcuts (TypeScript)
 * - for..of (ES6)
 * - destructuring (ES6)
 * - module / import (ES6)
 * - String interpolation (`${name} codes in ${language}`) (ES6)
 * - Set, Map (ES6)
 * - Interfaces (HasName) (TypeScript)
 */
'use strict';


function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};

function Programmer(name, language) {
    Person.call(this, name);
    this.language = language;
}
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
    return this.getName() + " codes in " + this.language;
};

var programmer = new Programmer('Olli', 'Cobol');

var programmers = [programmer, new Programmer('Oma', 'Haskell')];

for (var i in programmers) {
    (function () {
        var p = programmers[i];
        console.log(p.code());
    })();
}

console.log(typeof p);