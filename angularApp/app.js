'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.signIn',
  'myApp.ptDashboard',
  'myApp.provDashboard',
  'myApp.provPtList',
  'myApp.provVisitList',
  'myApp.provVisitDetail',
  'myApp.provCreateVisit',
  'myApp.ptViewRecords',
  'myApp.ptChartDetail',
  'myApp.ptDemographics',
  'myApp.ptAuth',
  'myApp.version',
  'filters'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/signIn'});
}]);
