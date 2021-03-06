'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('baseApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl as ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.ctrl.awesomeThings.length).toBe(3);
  });
});
