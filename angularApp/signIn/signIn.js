'use strict';

angular.module('myApp.signIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signIn', {
    templateUrl: 'signIn/signIn.html',
    controller: 'SignInCtrl'
  });
}])

.controller('SignInCtrl', ['$scope', function(sc) {
	//default username/pswd
	sc.email = "testDoc@gmail.com";
	sc.password = "password";

	sc.signIn = function() {
		console.log("Logged in")
	}
}]);

