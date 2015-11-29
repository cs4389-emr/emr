'use strict';

angular.module('myApp.provDashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/dashboard', {
    templateUrl: 'provViews/dashboard/dashboard.html',
    controller: 'provDashboardCtrl'
  });
}])

.controller('provDashboardCtrl', ['$scope', function(sc) {
	sc.provider ={
		'firstName' : 'James',
		'lastName' : 'Testor'
	}

	sc.visits = [
	{'examDate' : '11/16/2015',
	 'reason' : 'G43.0',
	 'patient' : {'firstName' : 'Test', 'lastName' : 'Testington'},
	 'id' : '3'},
	{'examDate' : '06/2/2014',
	 'reason' : 'J06.9',
	 'patient' : {'firstName' : 'Test', 'lastName' : 'Testington'},
	 'id' : '1'},
	{'examDate' : '09/8/2015',
	 'reason' : 'G43.0',
	 'patient' : {'firstName' : 'John', 'lastName' : 'Smith'},
	 'id' : '4'},
	];

}]);