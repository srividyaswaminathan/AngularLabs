var app = angular.module('myApp', [])

	.factory('productFactory', function(){
		//facotry is nothing more than a function that returns an object

		var products = [];
		var factory = {}
		factory.index = function(callback) {
                callback(products);
        };
		//add a add products key to the factory 
		factory.createProduct = function(name, price){
			products.push({
				name: name,
				price: price
			});
		}; 
					
		factory.removeProduct = function(idx){
				products.splice(idx, 1)
		}

		return factory		
	})

	.controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory){
    //  initialize an empty array so $scope.products maintains a consistent data type
  		productFactory.index(function(data){
			console.log("data in get users is", data);
			$scope.products = data;
		})	
    	$scope.addProduct = function(name, price){
			productFactory.createProduct(name, price);
		}

		$scope.deleteProduct= function(idx){
			console.log ("product factory", productFactory)
            productFactory.removeProduct(idx);
        };
     
}])