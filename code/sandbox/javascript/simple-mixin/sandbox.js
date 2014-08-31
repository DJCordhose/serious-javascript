"use strict";

function _mixin(_sub, _super) {
    for (var p in _super.prototype) {
        if (_super.prototype.hasOwnProperty(p) && p !== 'constructor') {
            _sub.prototype[p] = _super.prototype[p];
        }
    }
}

function Logable(name) {
    this.name = name;
}
Logable.prototype.log = function (msg) {
    console.log(this.name + ": " + msg);
}

function Person(name, age) {
    Logable.call(this, name);
    this.age = age;
}

_mixin(Person, Logable);

console.log(Person.prototype);
var olli = new Person('Olli');
console.log(olli instanceof Person); // true
console.log(olli instanceof Logable); // false
olli.log('Hi');