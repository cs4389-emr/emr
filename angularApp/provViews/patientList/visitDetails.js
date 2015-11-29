'use strict';

angular.module('myApp.provVisitDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/visits/:lastName/:id', {
    templateUrl: 'provViews/patientList/visitDetails.html',
    controller: 'provVisitDetailCtrl'
  });
}])

.controller('provVisitDetailCtrl', ['$scope', function(sc) {
	sc.provider ={
		'firstName' : 'James',
		'lastName' : 'Testor'
	}

	sc.patient= {'firstName' : 'Test',
		 'lastName' : 'Testington',
		 'id' : '1'};

	sc.visits={'examDate' : '11/16/2015',
	 'reason' : 'G43.0',
	 'provider' : 'Dr. Testor',
	 'id' : '3'};

}]);