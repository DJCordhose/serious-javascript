"use strict";

function f1(p1) {
    if (typeof p1 === 'undefined') {
        return null;
    } else {
        return p1;
    }
}
var result1 = f1(1);
console.log(result1 === 1);
var result2 = f1();
console.log(result2 === null);

function f2() {
    // "arguments" enthält immer alle Argumente der Funktion
    if (typeof arguments[0] === 'undefined') {
        return null;
    } else {
        return arguments[0];
    }
}

var result3 = f2(1);
console.log(result3 === 1);

var result4 = f2();
console.log(result4 === null);

function summe() {
    var sum = 0;
    for (var a in arguments) {
        sum += arguments[a];
    }
    return sum;
}

var result5 = summe(1,2,3);
console.log(result5 === 6);

