"use strict";

// https://egghead.io/lessons/angularjs-sharing-data-between-controllers


var myApp = angular.module('myApp', []);
myApp.factory('DataService', function() {
   return {
       message: 'I am data'
   };
});


function FirstController($scope, DataService) {
    $scope.data = DataService;
}

function SecondController($scope, DataService) {
    $scope.data = DataService;
}