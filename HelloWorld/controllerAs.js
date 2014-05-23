"use strict";

function HelloController() {
    this.greeting = {
        text: 'Hello'
    };
}

HelloController.prototype.clear = function() {
    this.greeting.text = '';
};
