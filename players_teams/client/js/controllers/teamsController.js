
app.controller('teamsController', ['teamFactory', '$scope', function(teamFactory, $scope){
		teamFactory.index(function(data){
			$scope.teams = data;
		})
		$scope.addTeam = function(name){
			console.log("adding team");
			teamFactory.createTeam(name);
		}
		$scope.deleteTeam = function(idx){
			teamFactory.removeTeam(idx)
		}
	}])
