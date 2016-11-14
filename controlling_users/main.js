var app = angular.module('myApp', [])

	.controller('usersController', function($scope){
		$scope.users = [];
		$scope.sortType     = 'firstname'; // set the default sort type
  		$scope.date = new Date();
		$scope.addUsers = function(){
			$scope.users.push($scope.newUser);
			console.log('new user', $scope.newUser)
			$scope.newUser = {};

			console.log("user added", $scope.users)
		}
		$scope.deleteUser = function($index){

			console.log("user id", $index)
			$scope.users.splice($index, 1);
		}
	})