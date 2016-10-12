(function() {
	var app = angular.module('peopleController', []);


	app.controller('PeopleController', function ($scope, $http, $ionicPopup, peopleService) {


		function getPhoneData () {
			var url = 'http://localhost:3000/api/people';

			$http.get(url)
				.success(function (people) {

					$scope.people =  people;
				})
				.error(function () {
					console.log('server side error occuerred.')
				})			
		}

		getPhoneData();


	
		$scope.register = function () {
			
			if($scope.new.name && $scope.new.phone){
				console.log($scope.new.name, $scope.new.phone)
				peopleService.create($scope.new.name, $scope.new.phone).then(function (success) {
					getPhoneData();
				}, function (error) {
					console.log(error)
				})

  			} //if
  		} // $scope.register


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
				peopleService.update(person).then(function (success) {
					getPhoneData();
				} )
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