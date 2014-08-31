"use strict";

self.addEventListener('message', function(e) {
    for (var i = 0; i < 10; i++) {
        self.postMessage(i);
    }
});