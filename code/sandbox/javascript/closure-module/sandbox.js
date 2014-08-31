"use strict";

var person = {};
(function () {
    // Constructor
    function Person(name) {
        this.name = name;
    }

    // Factory
    function Create(name) {
        return new Person(name);
    }

    // Export der Factory-Methode
    person.CreatePerson = Create;
})();

var olli = person.CreatePerson("Olli");
console.log(olli.name); // => "Olli"

console.log(person.Person); // => undefined
