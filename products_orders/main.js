var app = angular.module('myApp', ['ngRoute'])
	.factory('productFactory',function(){
		var products = [];
		var factory = {};

		factory.index = function(callback){
			callback(products)
		}

		factory.createProduct = function(name, price){
			products.push({
				name: name,
				price: price,
				quantity: 50
			})
		}

		factory.removeProduct = function(idx){
			products.splice(idx, 1)
		}	

		factory.buyProduct = function(idx){
			if(products[idx].quantity>0){
				products[idx].quantity--;	
			}
			
			
		}
		return factory
	})

	.controller('productsController', ['productFactory', '$scope', '$location', function (productFactory, $scope, $location){
		productFactory.index(function(data){
			$scope.products = data;
		});
		$scope.addProduct = function(name, price){
			productFactory.createProduct(name, price);
			$location.url('/orders')
		};
		$scope.deleteProduct = function(idx){
			productFactory.removeProduct(idx);
		}

	}])

	.controller('ordersController', ['productFactory', '$scope', function(productFactory, $scope){
		console.log("loading order controller");
		productFactory.index(function(data){
			$scope.products = data;
		});
		$scope.buyAProduct =function(idx){
			productFactory.buyProduct(idx);
		}
	}])

	.config(function($routeProvider) {
 		 $routeProvider
   			.when('/products', {
    			templateUrl: 'products.html',
   				controller: 'productsController',	
   			})
   			.when('/orders', {
   				templateUrl:'orders.html',
   				controller: 'ordersController'
   			})
   	});	