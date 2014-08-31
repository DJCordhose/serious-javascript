"use strict";

var myApp = angular.module('myApp', [
    'ngResource',
    'ngRoute'
]);
myApp.run(function (calculatorService) {
    calculatorService.triggerCalculation(200000, 10, 7, 30);
});
