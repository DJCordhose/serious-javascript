/*
 Content:
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
 * module pattern
 * CommonJS modules
 */
"use strict";

var personal = require('./personal');

console.log(personal.companyName);

var olli = new personal.Person('Olli', 37);
olli.log();

var oma = new personal.Person('Oma', 88);
oma.log();