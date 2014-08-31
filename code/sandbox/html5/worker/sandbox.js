"use strict";

var worker = new Worker('task.js');
worker.postMessage("Start");
worker.addEventListener('message', function(e) {
    console.log('Worker said: ', e.data);
}, false);