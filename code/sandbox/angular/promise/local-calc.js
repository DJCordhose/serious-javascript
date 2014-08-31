"use strict";

var myApp = angular.module('myApp');

// http://docs.angularjs.org/api/ng.$q
myApp.factory('calculatorService', function ($q, $rootScope) {
    var promise;
    return {
        triggerCalculation: function (price, down, interest, term) {
            var monthlyInterestRate = (interest / 100) / 12;
            var principle = price - down;
            var payments = term * 12;
            var monthly = principle * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, (-1 * payments)));
            var roundedMonthly = Math.round(monthly * 100) / 100;
            var total = Math.round(roundedMonthly * payments * 100) / 100;

            var deferred = $q.defer();
            setTimeout(function() {
                $rootScope.$apply(function() {
                    console.log("Resolving result");
                    deferred.resolve({
                        principle: principle.toFixed(2),
                        total: total.toFixed(2),
                        payments: payments.toFixed(0),
                        monthly: roundedMonthly.toFixed(2)
                    });
                });
            }, 5000);
            promise = deferred.promise;
        },
        promise: function () {
            return promise;
        }
    };
});
