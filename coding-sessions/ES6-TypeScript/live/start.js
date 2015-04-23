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
 *
 * Links:
 * - http://blogs.msdn.com/b/typescript/archive/2015/03/27/announcing-typescript-1-5-alpha.aspx
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