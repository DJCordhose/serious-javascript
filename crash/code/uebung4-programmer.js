"use strict";

function _extends(_sub, _super) {
    var IntermediateProto = function () {};
    IntermediateProto.prototype = _super.prototype;
    _sub.prototype = new IntermediateProto();
    _sub.prototype.constructor = _sub;
}

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

function Programmer(name, language) {
    Person.call(this, name);
    this.language = language;
}
_extends(Programmer, Person);

Programmer.prototype.getName = function () {
    return this.language + " programmer " + Person.prototype.getName.call(this);
};
Programmer.prototype.program = function() {
    console.log("Programming in language " + this.language);
};

var olli = new Programmer('Olli', 'JavaScript');
console.log(olli.getName());
// => JavaScript programmer Olli
olli.program();
// => Programming in language JavaScript
console.log(olli instanceof Person);
// => true
console.log(olli instanceof Programmer);
// => true
