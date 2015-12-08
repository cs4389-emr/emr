'use strict';

angular.module('myApp.provPtList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/ptList', {
    templateUrl: 'provViews/patientList/ptList.html',
    controller: 'provPtListCtrl'
  });
}])

.controller('provPtListCtrl', ['$scope', function(sc) {
	sc.provider ={
		'firstName' : 'James',
		'lastName' : 'Testor'
	}
	sc.selectedPatient = {};

	sc.patients=[
		{'firstName' : 'Test',
		 'lastName' : 'Testington',
		 'id' : '1'},
		{'firstName' : 'John',
		 'lastName' : 'Smith',
		 'id' : '2'}
	]

}]);