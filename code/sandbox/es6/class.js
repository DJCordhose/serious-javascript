class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

var olli = new Person('Olli');
console.log(olli.getName());

class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    code() {
        return this.getName() + " codes in " + this.language;
    }
}

var programmer = new Programmer('Erna', 'JavaScript');
console.log(programmer.getName());
console.log(programmer.code());
console.log(programmer instanceof Programmer); // true
console.log(programmer instanceof Person); // true
