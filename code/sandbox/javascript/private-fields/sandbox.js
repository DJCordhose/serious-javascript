"use strict";

var Person = (function() {
    // private property
    var _name;

    // private setter
    var _setName = function(name) {
        _name = name;
    }

    function Person(name, gender) {
        // private
        _setName(name);
        // public
        this.gender = gender;
    }
    Person.prototype.getName = function() {
        return _name;
    }

    return Person;
})();

var olli = new Person('Olli', 'Male');
olli.getName() === 'Olli';
olli._name === undefined;
olli.gender === 'Male';
