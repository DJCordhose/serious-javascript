"use strict";

var eu = eu || {};
eu.zeigermann = {};
eu.zeigermann.person = {};
(function (person) {
    // Constructor
    function Person(name) {
        this.name = name;
    }

    // Factory
    function create(name) {
        return new Person(name);
    }

    // Export der Factory-Methode
    person.createPerson = create;
})(eu.zeigermann.person);

eu.zeigermann.main = {};
(function (main, person) {
    function run() {
        var olli = person.createPerson("Olli");
        console.log(olli.name); // => "Olli"

        console.log(person.Person); // => undefined
    }
    main.run = run;
})(eu.zeigermann.main, eu.zeigermann.person);

eu.zeigermann.main.run();