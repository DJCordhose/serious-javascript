"use strict";

var util = require('util');

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

function Customer(name) {
    Person.call(this, "Dear " + name);
}

util.inherits(Customer, Person);

var olli = new Customer('Olli');
console.log(olli.getName());
