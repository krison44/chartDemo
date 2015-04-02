angular.module('chartDemoApp')
.factory('monthResource', function($resource) {
    return $resource('/mock/months.json', {}, {
      getMonths: {method: 'GET', isArray: true}
    });
  });