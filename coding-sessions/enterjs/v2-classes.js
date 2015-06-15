/*
 * class
 * higher order functions (foreach)
 */

'use strict';

function Programmer(name, age) {
    this.name = name;
    this.age = age;
}
Programmer.prototype.log = function () {
    console.log(this.name + ": " + this.age);
};

var programmer = new Programmer('Olli', 44);

var programmers = [programmer, new Programmer('Oma',88) ];

(function () {
    for (var i in programmers) {
        var p = programmers[i];
        p.log();
    }
})();
console.log(typeof p);

// or

programmers.forEach(function(p) {
    p.log()
});
