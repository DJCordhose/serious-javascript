'use strict';

function Intern() {

}
var companyName = "akme";
/**
 *
 * @param name {string}
 * @param age {number}
 * @constructor
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.log = function () {
    console.log(this.name);
};
exports.Person = Person;
exports.companyName = companyName;
