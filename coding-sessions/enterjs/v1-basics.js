/*
 * var
 * object
 * array
 * for
 * function
 * iife
 */
var programmer = {
    name: 'Olli',
    age: 44
};

var programmers = [programmer, {
    name: 'Oma',
    age: 88
} ];

var log = function (p) {
    console.log(p.name + ": " + p.age);
};

(function () {
    for (var i in programmers) {
        var p = programmers[i];
        log(p);
    }
})();
console.log(typeof p);
