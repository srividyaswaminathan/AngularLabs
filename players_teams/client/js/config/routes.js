	
app.config(function($routeProvider){
		$routeProvider
		.when('/players', {
			templateUrl: '/static/partials/players.html',
			controller: 'playersController',
		})
		.when('/teams', {
			templateUrl: '/static/partials/teams.html',
			controller: 'teamsController',
		})
		.when('/associations', {
			templateUrl: '/static/partials/associations.html',
			controller: 'assocController',
		})
		 .when('/:teamname',{
 			templateUrl: '/static/partials/about_team.html',
 			controller: 'aboutTeamController'
 		})
	})