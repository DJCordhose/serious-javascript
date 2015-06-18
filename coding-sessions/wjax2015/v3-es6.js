/*
 * ES6 part:
 * let, const
 * class
 * for..of
 * arrow function
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
const programmers = [programmer, new Programmer('Oma', 88)];

for (let p of programmers) {
    p.log();
}
console.log(typeof p);

// or

programmers.forEach((p) => p.log());
