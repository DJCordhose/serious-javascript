/*
 Content:
 * var
 * object
 * 'use strict'
 * console.log
 * environments: node und chrome
 * array
 * for
 * function
 * foreach
 * class pattern
 * iife
 * module pattern
 * CommonJS
 * TypeScript
 */
// Cmd-K to commit changes
'use strict';

var print = function (person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
};

var olli = {
    name: "Olli",
    age: 68
};

var array = [olli, {name: "Oma", age: 88}];

var hasSeniorAge = function (person) {
    return person.age > 67;
};
array.filter(hasSeniorAge).forEach(print);

