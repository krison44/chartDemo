angular.module('chartDemoApp')
.factory('MonthService',
function MonthService(monthResource) {
  return function MonthService(){
    var that = this,
      monthLists = [];

    this.load = function() {
      return this.loadMonthApi().then(function() {
        return that;
      });
    };

    this.loadMonthApi = function() {
      return monthResource.getMonths().$promise.then(function(resource) {
        monthLists = resource;
      });
    };

    this.getMonths = function() {
      return _.pluck(monthLists, 'month');
    };

    this.getMonthValues = function() {
      return _.pluck(monthLists, 'values');
    };

    this.getCurrentMonth = function(label) {
      return monthLists.filter(function(month) {
        return month.month === label;
      });
    }
  };
});