'use strict';

/**
 * @ngdoc function
 * @name chartDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chartDemoApp
 */
angular.module('chartDemoApp')
  .controller('MonthDetailCtrl', function ($scope, monthService, $routeParams) {
    $scope.currentMonth = monthService.getCurrentMonth($routeParams.month);
  });
