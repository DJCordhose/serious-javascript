"use strict";

function MyController($scope, calculatorService) {
//    $scope.ping = function () {
        calculatorService.promise().then(function (result) {
            $scope.result = result;
        });
//    };
}
