"use strict";

var svg = document.getElementById('svg');
var mainBall = document.getElementById('ball1');
mainBall.addEventListener('click', function (e) {
    console.log(e);
    var newCircle = document.createElement('circle');
    e.srcElement.setAttribute('cx', 400);
});