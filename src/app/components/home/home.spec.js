var angular = require('angular');
require('angular-mocks');
var home = require('./home');

describe('home component', function () {
  beforeEach(function () {
    angular
      .module('home', ['app/components/home/home.html'])
      .component('home', home);
    angular.mock.module('home');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<home></home>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
