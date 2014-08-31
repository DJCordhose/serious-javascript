"use strict";

function _extends(_sub, _super) {
    _sub.prototype = Object.create(_super.prototype);
    _sub.prototype.constructor = _sub;
}

function _mixin(_sub, _super) {
    for (var p in _super.prototype) {
        _sub.prototype[p] = _super.prototype[p];
    }
}

function SingleTasker(gender) {
    this.standardAction = gender === 'Male' ? 'sleep' : 'shop';
}
SingleTasker.prototype.doExclusively = function(action) {
    console.log("Doing exclusively: " + (action || this.standardAction));
}

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

Person.prototype.getName = function() {
    return this.name;
}

function Male(name) {
    Person.call(this, name, "Male");
    SingleTasker.call(this, "Male");
}
_extends(Male, Person);
_mixin(Male, SingleTasker);

var olli = new Male('Olli');
console.log(olli.getName() === 'Olli');
olli.doExclusively('eat');
olli.doExclusively();

var pope = Object.create(Male.prototype, {});
Male.call(pope, "Pope");
Object.defineProperties(pope, {
    standardAction: {
        value: 'pray'
    }
});

console.log(pope.getName());
// => Pope
pope.doExclusively('eat');
// => eat
pope.doExclusively();
// => pray
