var angular = require('angular');
require('angular-mocks');
var auth = require('./auth');

describe('auth component', function () {
  beforeEach(function () {
    angular
      .module('auth', ['app/components/auth/auth.html'])
      .component('auth', auth);
    angular.mock.module('auth');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<auth></auth>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
