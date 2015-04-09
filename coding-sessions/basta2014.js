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
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    };
    return Person;
})();
var olli = new Person("Olli", 43);
//# sourceMappingURL=basta2014.js.map