"use strict";

// http://learn.jquery.com/plugins/basic-plugin-creation/
$(document).ready(function(){
    var log = $("#log");
    console.log(Object.getPrototypeOf(log) === $.prototype);
    console.log(log instanceof $);
    log.html("<h1>Hello World</h1>");
    console.log($.fn === $.prototype);
    $.fn.dump = function() {
        // iterate over all elements found by selector
        this.each(function() {
            // this is a DOM element
            console.log(this);
            // make it a $ object if desired
            console.log($(this));
        });
        // return $ element for chaining
        return this;
    };
    // chaining does work
    log.dump().show();
});