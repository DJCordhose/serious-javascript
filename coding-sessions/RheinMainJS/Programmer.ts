import Person from './Person';

export default class Programmer extends Person {
    private language: string;
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    code() {
        return [this.getName(), this.language];
    }
}
