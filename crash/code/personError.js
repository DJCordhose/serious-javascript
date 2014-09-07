function _extends(_sub, _super) {
    _sub.prototype = new _super();
}
function PersonError(person) {
    this.message = "Die Person ist ja kaputt";
    // geht nicht, da Error.call message nicht setzt
    //
    // http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    // und
    // http://stackoverflow.com/questions/8802845/inheriting-from-the-error-object-where-is-the-message-property
    //
    Error.call(this, "Die Person ist ja kaputt");
    this.person = person;
}
_extends(PersonError, Error);

PersonError.prototype.format = function () {
    return this.message + ", Person=" + this.person.name;
}

function Person(name, alter, geschlecht) {
    this.name = name;
    this.alter = alter;
    this.geschlecht = geschlecht;
}

var opa = new Person("Opa", 88, "M");
try {
    throw new PersonError(opa);
} catch (e) {
    console.log(e.format());
}
//throw new PersonError(opa);

try {
    throw new Error("Whoops!");
} catch (e) {
    console.log(e.name + ": " + e.message);
}
