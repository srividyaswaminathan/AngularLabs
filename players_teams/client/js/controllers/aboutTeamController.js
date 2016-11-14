
app.controller('aboutTeamController',['assocFactory', '$routeParams', '$scope', function(assocFactory, $routeParams, $scope){
		console.log("route params", $routeParams)
		var assoc;
		assocFactory.index(function(data){
			assoc = data;
		})

		$scope.teamname = $routeParams.teamname
		$scope.players_in_team = []
		for (var player in assoc) {
			if (assoc[player] === $routeParams.teamname) {
				$scope.players_in_team.push(player);
			}
		}

	}])	