"use strong";
//"use strict";

// would fail, as strong mode implies strict mode
//doesNotExist = 1000;

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        // would fail
        //console.log("Arguments:", arguments);
        return this.name;
    }
}

// var is no longer supported
//var olli = new Person("Olli");
const olli = new Person("Olli");
// should fail, but does not in current chrome canary 43.0.2331.3
olli.age = 44;

let array = [1,2];
// should fail, as this is no longer an array
array[10] = 3;

// only strict eq === allowed
//100 == "100";

