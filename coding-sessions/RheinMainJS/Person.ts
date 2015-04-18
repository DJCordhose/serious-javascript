export default class Person {
    private name: string;
    constructor(name) {
        this.name = name
    }
    protected getName() {
        return this.name
    }
}
