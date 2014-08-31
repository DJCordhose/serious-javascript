"use strict";

var obj = {
    a: 10
};

Object.freeze(obj);

//console.log(Object.isFrozen(obj));
// => true

//obj.a = 20;
// => TypeError: Cannot assign to read only property

//obj.b = 10;
// => TypeError: Can't add property b, object is not extensible


var obj2 = {
    a: 10
};

Object.seal(obj2);

console.log(Object.isSealed(obj2));
// => true

// cool
obj2.a = 20;

obj2.b = 10;
// => TypeError: Can't add property b, object is not extensible
