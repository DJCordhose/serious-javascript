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

var olli = {
    name: "Olli",
    age: 43
};

var array = [olli, {name: "Oma", age: 88}];
for (var i in array) {
    console.log(array[i]);
}

function print(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
}