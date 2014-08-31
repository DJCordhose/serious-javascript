"use strict";

// http://learn.jquery.com/plugins/basic-plugin-creation/
$(document).ready(function(){
    var log = $("#log");
    console.log(Object.getPrototypeOf(log) === $.prototype);
    log.html("<h1>Hello World</h1>");
    console.log($.fn === $.prototype);
    $.fn.dump = function() {
        this.each(function(el) {
            console.log(this);
        });
        return this;
    };
    log.dump().show();
});