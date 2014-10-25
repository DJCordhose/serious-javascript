"use strict";

function HelloController($scope) {
    $scope.hello = {};
    $scope.hello.name = 'Olli';
    $scope.hello.greeting = 'Hello';
    $scope.clear = function() {
        $scope.hello.greeting = '';
    };
    $scope.animals = ['cat', 'dog', 'bird'];
}