app.controller('playersController', ['playerFactory', '$scope', function(playerFactory, $scope){
		playerFactory.index(function(data){
			$scope.players = data;
		})
		$scope.addPlayer = function(name){
			console.log("adding player")
			playerFactory.createPlayer(name);
		}
		$scope.deletePlayer = function(idx){
			playerFactory.removePlayer(idx)
		}
	}])
