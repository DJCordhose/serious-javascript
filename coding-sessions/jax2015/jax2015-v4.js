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

class Programmer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    log() {
        console.log(this.name + ": " + this.age);
    }

}

const programmer = new Programmer('Olli', 44);
const programmers = new Set();
programmers.add(programmer);
programmers.add(new Programmer('Oma', 88));

for (let p of programmers) {
    p.log();
}
// or
programmers.forEach((p) => p.log());
