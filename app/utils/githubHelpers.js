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
	//Example of implicit return from arrow functions
	return repos.data.reduce((prev,current) => prev+current.stargazers_count ,0);
}

function getPlayersData (player){
	return getRepos(player.login)
				//Chaining promises, because they are returned from getRepos
				.then(getTotalStars)
				//Basic arrow function example (no implict return)
				.then((totalStars) => {
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
	//Nested arrow functions and implict returns, gets a little hard to read...
	return axios.all(players.map((username) => getUserInfo(username)))
				.then((info) => info.map((user) =>  user.data ))
				.catch((err) => console.log(err+" getPlayersInfo"));
}

export function battle (players){
	const playerOneData = getPlayersData(players[0]);
	const playerTwoData = getPlayersData(players[1]);

	//Axios .all fires when both of these variables are resolved, nice
	//playerOne and Two data are actually promises so they have to be resolved
	return axios.all([playerOneData,playerTwoData])
				.then(calculateScores)
				.catch((err) => console.log("Error in getPlayersInfo: "+err));
}


// module.exports = helpers;
// export default helpers;