var com = {};
com.detss = {};
com.detss.humanresources = {};
(function (exports) {
    function InternalStuff() {
    }

    function Person(name) {
        this.name = name;
        this.inner = new InternalStuff();
    }

    exports.Person = Person;
})(com.detss.humanresources);

com.detss.cars = {};
(function (exports, hr) {
    function Car(owner) {
        this.owner = new hr.Person(owner);
    }

    exports.Car = Car;
})(com.detss.cars, com.detss.humanresources);

var olli = new com.detss.humanresources.Person('Olli');
console.log(olli.name);
var ollisCar = new com.detss.cars.Car('Olli');
console.log(ollisCar.owner.name);

// TypeError: undefined is not a function
//new humanresources.InternalStuff();
