"use strict";

var myApp = angular.module('myApp');

// http://docs.angularjs.org/api/ngResource.$resource
// http://docs.angularjs.org/api/ng.$http
myApp.factory('calculatorService', function ($rootScope, $resource) {
    var result;
    return {
        triggerCalculation: function (price, down, interest, term) {
            var baseUri = 'http://mortgage-demo.appspot.com/mortgage_calculator/rs/';
            $resource(baseUri + ':price/:down/:interest/:term').get({
                price: price,
                down: down,
                interest: interest,
                term: term
            }, function(data) {
                result = data;
                $rootScope.$broadcast('initComplete');
            });
        },
        result: function () {
            return result;
        }
    };
});
