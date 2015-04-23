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
 */
'use strict';

import Programmer from './Programmer';

const programmer = new Programmer('Olli', 'JavaScript');
const programmers = new Set<Programmer>();
programmers.add(programmer);
programmers.add(new Programmer('Oma', 'Cobol'));
//const programmers = [programmer, new Programmer('Oma', 'F#')];
//var s = JSON.stringify([...programmers]);
//console.log(s);

programmers.forEach((p) => console.log(p.code()));
