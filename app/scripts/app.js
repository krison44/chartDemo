'use strict';

/**
 * @ngdoc overview
 * @name chartDemoApp
 * @description
 * # chartDemoApp
 *
 * Main module of the application.
 */
angular
  .module('chartDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          monthService: function(MonthService) {
            return new MonthService().load();
          }
        }
      })
      .when('/month/:month', {
        templateUrl: 'views/monthDetails.html',
        controller: 'MonthDetailCtrl',
        resolve: {
          monthService: function(MonthService) {
            return new MonthService().load();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
