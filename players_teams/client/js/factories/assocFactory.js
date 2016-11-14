
app.factory('assocFactory',function(){
		var assoc = {};
		var factory = {}; 
		factory.index= function(callback){
			callback(assoc);
		}
		factory.createPlayerTeamAssoc = function(playerName, teamName){
			assoc[playerName] = teamName;
			console.log("associations", assoc)
		}		
		factory.deleteAssoc = function(playerName){
			delete assoc[playerName]
		}
		return factory
	})