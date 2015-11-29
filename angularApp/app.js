'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.signIn',
  'myApp.dashboard',
  'myApp.ptViewRecords',
  'myApp.ptChartDetail',
  'myApp.version',
  'filters'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/dashboard", {templateUrl: "ptViews/dashboard/dashboard.html", controller: "DashboardCtrl"}).
  when("/pt/visit", {templateUrl: "ptViews/viewChart/viewChart.html", controller: "PtViewRecordsCtrl"}).
  when('/pt/visit/:id', {templateUrl: 'ptViews/viewChart/chartDetail.html', controller: 'PtChartDetailCtrl'}).
  otherwise({redirectTo: '/signIn'});
}]);
