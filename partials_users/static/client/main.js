var app = angular.module('myApp', ['ngRoute'])
	.factory('userFactory', function(){
		var users = [];
		var factory = {};
		factory.index = function(callback) {
                callback(users);
        };

		factory.createUser = function(firstname, lastname, language){
			users.push({
				firstname: firstname,
				lastname: lastname,
				language: language
			});
		}; 
		factory.removeUser = function(idx){
            users.splice(idx, 1)
        };
	
		return factory;
	})
	.controller('customizeUserController', ['userFactory', '$scope', '$location', function (userFactory, $scope, $location){
		console.log("Loading user controller");
		console.log("user factory ", userFactory)
		userFactory.index(function(data){

			console.log("data in get users is", data);
			$scope.users = data;
		})	

		$scope.addUser = function(firstname, lastname, language){
			userFactory.createUser(firstname, lastname, language);
			$location.url('/list')
		}

		$scope.deleteUser = function(idx){
            userFactory.removeUser(idx);
        };
	}])

	.controller('userListController', ['$scope', 'userFactory', function ($scope, userFactory){
		console.log("Loading user list controller");
		userFactory.index(function(data){
			console.log("data in get users is", data);
			$scope.users = data;
		})		
		
	}])

	.config(function($routeProvider) {
 		 $routeProvider
   			.when('/users', {
    			templateUrl: 'partials/customize_users.html',
   				controller: 'customizeUserController',	
   			})
   			.when('/list', {
   				templateUrl:'partials/user_list.html',
   				controller: 'userListController'
   			})
   	});	