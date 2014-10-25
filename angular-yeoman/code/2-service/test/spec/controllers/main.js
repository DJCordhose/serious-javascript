'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('baseApp'));

    var MainCtrl,
        scope,
      calculatorSpy;

    // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, calculatorService) {
    scope = $rootScope.$new();

    calculatorSpy = spyOn(calculatorService, 'calculateMortgage')
      .andReturn({principle: '199990.00', total: '478994.40', payments: '360', monthly: '1330.54'});

    MainCtrl = $controller('MainCtrl as ctrl', {
      $scope: scope,
      calculatorService: calculatorService
    });
  }));

    it('should attach a calc function to the scope', function () {
        expect(scope.ctrl.calc).toEqual(jasmine.any(Function));
    });

  it('should calculate mortgage on calc called', function () {
    scope.ctrl.price = 200000;
    scope.ctrl.down = 10;
    scope.ctrl.interest = 7;
    scope.ctrl.term = 30;

    scope.ctrl.calc();

    expect(calculatorSpy).toHaveBeenCalledWith(200000, 10, 7, 30);

    expect(scope.ctrl.result).toEqual({
      principle: '199990.00',
      total: '478994.40',
      payments: '360',
      monthly: '1330.54'
    });
  });

});
