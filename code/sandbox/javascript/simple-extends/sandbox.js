"use strict";

function _extends(_sub, _super) {
    var IntermediateProto = function () {};
    IntermediateProto.prototype = _super.prototype;
    _sub.prototype = new IntermediateProto();
    _sub.prototype.constructor = _sub;
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

_extends(Person, Logable);

console.log(Person.prototype.__proto__);
var olli = new Person('Olli');
console.log(olli instanceof Person); // true
console.log(olli instanceof Logable); // true
olli.log('Hi');