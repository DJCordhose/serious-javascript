"use strict";

var myApp = angular.module('myApp');

// http://docs.angularjs.org/api/ngResource.$resource
// http://docs.angularjs.org/api/ng.$http
myApp.factory('calculatorService', function ($resource) {
    var promise;
    return {
        triggerCalculation: function (price, down, interest, term) {
            var baseUri = 'http://mortgage-demo.appspot.com/mortgage_calculator/rs/';
            promise = $resource(baseUri + ':price/:down/:interest/:term').get({
                price: price,
                down: down,
                interest: interest,
                term: term
            }).$promise;
        },
        promise: function () {
            return promise;
        }
    };
});
