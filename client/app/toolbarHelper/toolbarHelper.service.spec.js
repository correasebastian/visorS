'use strict';

describe('Service: toolbarHelper', function () {

  // load the service's module
  beforeEach(module('angMaterialApp'));

  // instantiate service
  var toolbarHelper;
  beforeEach(inject(function (_toolbarHelper_) {
    toolbarHelper = _toolbarHelper_;
  }));

  it('should do something', function () {
    expect(!!toolbarHelper).toBe(true);
  });

});
