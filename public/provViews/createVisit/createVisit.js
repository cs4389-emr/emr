'use strict';

angular.module('myApp.provCreateVisit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/visit', {
    templateUrl: 'provViews/createVisit/createVisit.html',
    controller: 'provCreateVisitCtrl'
  });
}])

.controller('provCreateVisitCtrl', ['$scope', function(sc) {
	sc.provider ={
		'firstName' : 'James',
		'lastName' : 'Testor'
	}

	sc.patients=[
		{'firstName' : 'Test',
		 'lastName' : 'Testington',
		 'age' : 24,
		 'gender' : 'U',
		 'id' : '1'},
		{'firstName' : 'John',
		 'lastName' : 'Smith',
		 'age' : '60',
		 'gender' : 'M',
		 'id' : '2'}
	]

	sc.visit={'examDate' : new Date(),
	 'reason' : '',
	 'provider' : 'Dr. Testington',
	 'height' : '',
	 'weight' : '',
	 'systolic' : '',
	 'diastolic' : '',
	 'symptoms' : '',
	 'notes' : '',
	 'perscription': '',
	 'id' : ''
	};

}]);