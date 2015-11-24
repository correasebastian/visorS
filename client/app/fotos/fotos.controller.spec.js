'use strict';

describe('Controller: FotosCtrl', function () {

  // load the controller's module
  beforeEach(module('angMaterialApp'));

  var FotosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FotosCtrl = $controller('FotosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
