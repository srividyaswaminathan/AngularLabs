app.controller('assocController', ['assocFactory', 'playerFactory', 'teamFactory', '$scope', function(assocFactory, playerFactory, teamFactory, $scope){
		assocFactory.index(function(data){
			$scope.assoc = data;
		})
		playerFactory.index(function(data){
			$scope.players = data;
		})
		teamFactory.index(function(data){
			$scope.teams = data;
		})

		$scope.addPlayerToTeam = function(playerName, teamName){
			assocFactory.createPlayerTeamAssoc(playerName, teamName);
		}
		$scope.clearAssoc = function(playerName){
			assocFactory.deleteAssoc(playerName);
		}
	}])