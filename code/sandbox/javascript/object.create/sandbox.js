"use strict";

// by default properties ARE NOT writable, enumerable or configurable
var o = Object.create({}, { p: { value: 42} })

// not writable
//o.p = 43;
// => TypeError: Cannot assign to read only property 'p' of #<Object>

// not enumerable
//console.log(Object.keys(o));
// => []

// not configurable
//delete o.p;
// => TypeError: Cannot delete property 'p' of #<Object>

// property as you know it
var o2 = Object.create({}, { p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
}
});

// writable
o2.p = 43;

// enumerable
console.log(Object.keys(o2));

// configurable
delete o2.p;

var o3 = Object.create({}, { p: {
    get: function () {
        console.log("Getting p for " + JSON.stringify(this));
        return this._p;
    },
    set: function (value) {
        console.log("Setting p to " + value + " for " + JSON.stringify(this));
        this._p = value;
    }
}
});

o3.p = 10;
// => Setting p to 10 for {}
console.log(o3.p);
// => Getting p for {"_p":10}
// => 10