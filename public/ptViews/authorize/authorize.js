'use strict';

angular.module('myApp.ptAuth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/auth', {
    templateUrl: 'ptViews/authorize/authorize.html',
    controller: 'ptAuthCtrl'
  });
}])

.controller('ptAuthCtrl', ['$scope', function(sc) {
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

	sc.authorizedUsers = ['Dr. Testor', 'Dr. Ortho'];

}]);