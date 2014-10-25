"use strict";

function HelloController($scope) {
    $scope.greeting = {
        text: 'Hello'
    };
    $scope.clear = function() {
        $scope.greeting.text = "";
    };
}