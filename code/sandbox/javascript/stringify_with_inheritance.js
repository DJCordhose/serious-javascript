"use strict";

function _extends(_sub, _super) {
    var IntermediateProto = function () {};
    IntermediateProto.prototype = _super.prototype;
    _sub.prototype = new IntermediateProto();
    _sub.prototype.constructor = _sub;
}

function Person(name, alter, geschlecht) {
    this.name = name;
    this.alter = alter;
    this.geschlecht = geschlecht;
}

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.log = function () {
    var info = "Alter von " + this.name + ": " + this.alter;
    console.log(info);
};

function Customer(name, alter, geschlecht) {
    Person.apply(this, arguments);
    this.preferredArticle = alter > 40 ? 'Galaxy Note' : 'iPhone';
    Object.defineProperties(this, {
        p: {
            value: 10,
            enumerable: true
        }
    });
}

_extends(Customer, Person);
Customer.prototype.getName = function() {
    return "Dear " + Person.prototype.getName.call(this);
};

Customer.prototype.shop = function() {
    console.log("Shopping: " + this.preferredArticle);
};

/**
 * @type {Customer}
 */
var olli = new Customer('Olli', 42, "M");
console.log(olli.getName() === 'Dear Olli');
olli.shop();
console.log(olli.p);
console.log(olli);
console.log(JSON.stringify(olli));
console.log(JSON.stringify(olli, null, 2));

var chris = new Customer('Chris', 25, "M");
console.log(chris.getName() === 'Dear Chris');
chris.shop();
