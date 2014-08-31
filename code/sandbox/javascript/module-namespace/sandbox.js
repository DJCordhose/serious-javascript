"use strict";

var eu = {};
eu.zeigermann = {};
eu.zeigermann.person = {};
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
    eu.zeigermann.person.CreatePerson = Create;
})();

var olli = eu.zeigermann.person.CreatePerson("Olli");
console.log(olli.name); // => "Olli"

console.log(eu.zeigermann.person.Person); // => undefined
