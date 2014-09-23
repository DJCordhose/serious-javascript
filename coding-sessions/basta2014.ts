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

class Person
{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print()
    {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);

    }
}

var olli = new Person("Olli", 43);
