"use strict";

(function() {
    // causes error "none is undefined"
//    console.log(none);

    // hoisted is declared, but undefined, no error, prints "undefined"
    console.log(hoisted);
    var hoisted = 10;
    // prints 10
    console.log(hoisted);
})();
