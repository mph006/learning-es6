// var axios = require('axios');
import axios from 'axios';
const id="YOUR_CLIENT_ID";
const sec="YOUR_SEC_ID";
const param = "?client_id="+id+"&client_secret="+sec;


function getUserInfo(username){
	//can add param here if you get a api key
	return axios.get('https://api.github.com/users/'+username);
}

function getRepos(username){
	return axios.get('https://api.github.com/users/'+username+"/repos"+param+"&per_page=100");
}

function getTotalStars (repos){
	return repos.data.reduce(function(prev,current){
		return prev+current.stargazers_count;
	},0);
}

function getPlayersData (player){
	return getRepos(player.login)
				//Chaining promises, because they are returned from getRepos
				.then(getTotalStars)
				.then(function (totalStars){
					return {
						followers: player.followers,
						totalStars: totalStars
					}
				})
}

function calculateScores (players){

	return [
		players[0].followers*3 + players[0].totalStars,
		players[1].followers*3 + players[1].totalStars,
	];
}

export function getPlayersInfo (players){
	return axios.all(players.map(function(username){
		return getUserInfo(username);
	})).then(function(info){
		return info.map(function(user){
			return user.data;
		})
	}).catch(function(err){
		console.log(err+" getPlayersInfo")
	});
}

export function battle (players){
	const playerOneData = getPlayersData(players[0]);
	const playerTwoData = getPlayersData(players[1]);

	//Axios .all fires when both of these variables are resolved, nice
	//playerOne and Two data are actually promises so they have to be resolved
	return axios.all([playerOneData,playerTwoData])
				.then(calculateScores)
				.catch(function(err){console.log("Error in getPlayersInfo: "+err);});
}


// module.exports = helpers;
// export default helpers;