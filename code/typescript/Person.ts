interface HasName {
    getName(): string;
}

class Person implements HasName {
    constructor(private name: string, private alter: number, private geschlecht: string = 'M') {
    }
    getName() {
        return this.name;
    }
}

var olli: HasName = new Person('Olli', 43);
