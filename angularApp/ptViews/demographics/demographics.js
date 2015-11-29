'use strict';

angular.module('myApp.ptDemographics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/demographics', {
    templateUrl: 'ptViews/demographics/demographics.html',
    controller: 'PtDemographicsCtrl'
  });
}])

.controller('PtDemographicsCtrl', ['$scope', function(sc) {
	sc.eName = false;
	sc.eEth = false;
	sc.eGender = false;
	sc.eAge = false;
	sc.eAddr = false;
	sc.ePhone1 = false;
	sc.ePhone2 = false;

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

	sc.editName = function(){
		console.log("editing name");
		sc.eName = true;
	};
	sc.saveName = function(){
		sc.eName = false;
	};

	sc.editEth = function(){
		sc.eEth = true;
	};
	sc.saveEth = function(){
		sc.eEth = false;
	};

	sc.editGender = function(){
		sc.eGender = true;
	};
	sc.saveGender = function(){
		sc.eGender = false;
	};

	sc.editAge = function(){
		sc.eAge = true;
	};
	sc.saveAge = function(){
		sc.eAge = false;
	};

	sc.editAddr = function(){
		sc.eAddr = true;
	};
	sc.saveAddr = function(){
		sc.eAddr = false;
	};

	sc.editPhone1 = function(){
		sc.ePhone1 = true;
	};
	sc.savePhone1 = function(){
		sc.ePhone1 = false;
	};

	sc.editPhone2 = function(){
		sc.ePhone2 = true;
	};
	sc.savePhone2 = function(){
		sc.ePhone2 = false;
	};


}]);