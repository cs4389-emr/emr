'use strict';

angular.module('myApp.provRefer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/refer', {
    templateUrl: 'provViews/referPatient/refer.html',
    controller: 'provReferCtrl'
  });
}])

.controller('provReferCtrl', ['$scope', function(sc) {
	sc.provider ={
		'firstName' : 'James',
		'lastName' : 'Testor'
	}

	sc.selectedPhys = {};

	sc.physicians = [
		{'firstName' : 'James',
		 'lastName' : 'Testor',
		 'id' : '1'},
		{'firstName' : 'Alan',
		 'lastName' : 'Ortho',
		 'id' : '2'}
	];

	sc.patients=[
		{'firstName' : 'Test',
		 'lastName' : 'Testington',
		 'selectedPhys': {},
		 'id' : '1'},
		{'firstName' : 'John',
		 'lastName' : 'Smith',
		 'selectedPhys' : {},
		 'id' : '2'}
	]

}]);