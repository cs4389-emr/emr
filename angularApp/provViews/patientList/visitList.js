'use strict';

angular.module('myApp.provVisitList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/visits/:lastName', {
    templateUrl: 'provViews/patientList/visitList.html',
    controller: 'provVisitListCtrl'
  });
}])

.controller('provVisitListCtrl', ['$scope', function(sc) {
	sc.provider ={
		'firstName' : 'James',
		'lastName' : 'Testor'
	}

	sc.patient= {'firstName' : 'Test',
		 'lastName' : 'Testington',
		 'id' : '1'};

	sc.visits=[
	{'examDate' : '11/16/2015',
	 'reason' : 'G43.0',
	 'provider' : 'Dr. Testor',
	 'id' : '3'},
	{'examDate' : '06/2/2014',
	 'reason' : 'J06.9',
	 'provider' : 'Dr. Testor',
	 'id' : '1'},
	];

}]);