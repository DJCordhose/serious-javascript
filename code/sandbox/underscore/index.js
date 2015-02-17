var _ = require('./underscore');

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

var olli = new Person('Olli');
console.log(olli.getName());

function Programmer(name, language) {
    Person.call(this, name);
    this.language = language;
}
_.extend(Programmer.prototype, Person.prototype);
// or
//Programmer.prototype = Object.create(Person.prototype);

Programmer.prototype.code = function() {
    return this.getName() + " codes in " + this.language;
};

var programmer = new Programmer('Erna', 'JavaScript');
console.log(programmer.getName());
console.log(programmer.code());
console.log(programmer instanceof Programmer); // true
console.log(programmer instanceof Person); // true for Object.create, false for _.extend

