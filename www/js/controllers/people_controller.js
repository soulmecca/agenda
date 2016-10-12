(function() {
	var app = angular.module('peopleController', []);


	app.controller('PeopleController', function ($scope, $http, $ionicPopup) {
		var url = 'http://localhost:3000/api/people';

		$http.get(url)
			.success(function (people) {
				$scope.people = people;
			})
			.error(function () {
				console.log('server side error occuerred.')
			})
	
		$scope.register = function () {
			
			if($scope.new.name && $scope.new.phone){
				console.log($scope.new.name, $scope.new.phone)
				$http.post
			}
		}

		$scope.showConfirm = function(person) {
			var confirmPopup = $ionicPopup.confirm({
			title: 'Confirm information',
			template: 'name is ' + person.name + ' phone is ' + person.phone
			});
			confirmPopup.then(function(res) {
			if(res) {
				$scope.edit()
			 // console.log('All info is correct ?');
			} else {
			 // console.log('Cancle');
			}
			});
		};		

		$scope.edit = function () {
			// $http.g

		}		

	}) // controller

})();