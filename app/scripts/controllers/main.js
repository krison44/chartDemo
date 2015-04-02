'use strict';

/**
 * @ngdoc function
 * @name chartDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chartDemoApp
 */
angular.module('chartDemoApp')
  .controller('MainCtrl', function ($scope, monthService, $location) {

    $scope.labels = monthService.getMonths();

    $scope.data = [monthService.getMonthValues()];

    $scope.onClick = function(element) {

      $scope.getCurrentMonth = monthService.getCurrentMonth(element[0].label);
      console.log($scope.getCurrentMonth);
      $location.path('/month/'+$scope.getCurrentMonth[0].month);
    }
  });
