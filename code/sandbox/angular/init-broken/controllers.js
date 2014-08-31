"use strict";

function MyController($scope, calculatorService) {
    setTimeout(function() {
        $scope.$apply(function() {
            $scope.$on('initComplete', function () {
                $scope.result = calculatorService.result();
            });
        });
    }, 500);
}
