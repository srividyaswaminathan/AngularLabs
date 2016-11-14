app.factory('teamFactory', function(){
		var teams =[];
		var factory ={};
		factory.index = function(callback){
			callback(teams);
		}
		factory.createTeam = function(name){
			teams.push({
				name: name,
			})
			console.log("team created", teams)
		}
		factory.removeTeam = function(idx){
			teams.splice(idx, 1)
		} 
		factory.createTeam('gsw');
		factory.createTeam('cava');
		return factory;
	})