var angular = require('angular');
require('angular-mocks');
var header = require('./header');

describe('header component', function () {
  beforeEach(function () {
    angular
      .module('header', ['app/components/home/header/header.html'])
      .component('header', header);
    angular.mock.module('header');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<header></header>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
