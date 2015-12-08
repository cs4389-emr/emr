'use strict';

angular.module('myApp.ptDashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/dashboard', {
    templateUrl: 'ptViews/dashboard/dashboard.html',
    controller: 'ptDashboardCtrl'
  });
}])

.controller('ptDashboardCtrl', ['$scope', function(sc) {
	sc.patient = {
		'firstName' : 'Test',
		'lastName' : 'Patient',
		'PCP' : 'Dr. Testor',
		'ethnicity' : 'Caucasian',
		'age' : 24,
		'gender' : 'U',
		'phone' : '555-555-5555',
		'email': 'test@test.com',
		'addr1': '1000 Unknown Ln',
		'addr2': 'Apt 37',
		'city' : 'Miami',
		'state': 'FL',
		'zip' : '33173'
	};

	sc.visits = [
	{'examDate' : '11/16/2015',
	 'reason' : 'G43.0',
	 'provider' : 'Dr. Testor',
	 'id' : '3'},
	{'examDate' : '06/2/2014',
	 'reason' : 'J06.9',
	 'provider' : 'Dr. Testor',
	 'id' : '1'},
	{'examDate' : '09/8/2015',
	 'reason' : 'S92.109',
	 'provider' : 'Dr. Ortho',
	 'id' : '2'},
	];

}]);