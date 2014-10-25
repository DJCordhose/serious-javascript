'use strict';

(function () {
  var MainCtrl = function () {
    // not really needed
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  };
  angular.module('baseApp')
    .controller('MainCtrl', MainCtrl);

})();
