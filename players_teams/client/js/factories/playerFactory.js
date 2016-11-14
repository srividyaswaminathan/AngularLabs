
var app = angular.module('myApp', ['ngRoute', 'ngMessages'])
app.factory('playerFactory', function(){
		var players =[];
		var factory ={};
		factory.index = function(callback){
			callback(players);
		}
		factory.createPlayer = function(name){
			players.push({
				name: name,
			})
		}
		factory.removePlayer = function(idx){
			players.splice(idx, 1)
		} 

		factory.createPlayer('krishna')
		factory.createPlayer('srividya')
		return factory;
	})