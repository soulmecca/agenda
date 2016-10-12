(function() {
	var app = angular.module('peopleController', []);


	app.controller('PeopleController', function ($scope, $http, $ionicPopup, peopleService) {
		var url = 'http://localhost:3000/api/people';
		$scope.people = [];
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
				var res = peopleService.create($scope.new.name, $scope.new.phone)
					res.success(function(data){
  					$scope.people.push(data);
  				})
  			}
  		}
	// 			$http.post(url, { name: $scope.new.name, phone: $scope.new.phone }).then(function(resp) { 
	// return resp
 //      });
			

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


		}		

	}) // controller

})()