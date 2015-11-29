'use strict';

angular.module('myApp.ptChartDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/visit/:id', {
    templateUrl: 'ptViews/viewChart/chartDetail.html',
    controller: 'PtChartDetailCtrl'
  });
}])

.controller('PtChartDetailCtrl', ['$scope', function(sc) {
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

	sc.visit = {'examDate' : '11/16/2015',
	 'reason' : 'G43.0',
	 'provider' : 'Dr. Testor',
	 'id' : '3'};

}]);