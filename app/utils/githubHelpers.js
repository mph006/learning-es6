// var axios = require('axios');
import axios from 'axios';
const id="YOUR_CLIENT_ID";
const sec="YOUR_SEC_ID";
const param = `?client_id=${id}&client_secret${sec}`;

//example of default parameter passing
function getUserInfo(username = 'mph006'){
	//can add param here if you get a api key

	return axios.get(`https://api.github.com/users/${username+param}`);
}

function getRepos(username = 'mph006'){
	return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars (repos){
	//Example of implicit return from arrow functions
	return repos.data.reduce((prev,current) => prev+current.stargazers_count ,0);
}

async function getPlayersData ({login, followers}){
	// return getRepos(player.login)
	// 			//Chaining promises, because they are returned from getRepos
	// 			.then(getTotalStars)
	// 			//Basic arrow function example (no implict return)
	// 			.then((totalStars) => {
	// 				return {
	// 					followers: player.followers,
	// 					totalStars
	// 				}
	// 			})

	try{
		const repos = await getRepos(login);
		const totalStars = await getTotalStars(repos);
		return {
			followers,
			totalStars
		}
	}
	catch(err){
		console.log(`Error in getPlayersData: ${err}`)
	}
}

function calculateScores (players){

	return [
		players[0].followers*3 + players[0].totalStars,
		players[1].followers*3 + players[1].totalStars,
	];
}

export async function getPlayersInfo (players){
	//Nested arrow functions and implict returns, gets a little hard to read...
	// return axios.all(players.map((username) => getUserInfo(username)))
	// 			.then((info) => info.map((user) =>  user.data ))
	// 			.catch((err) => console.log(err+" getPlayersInfo"));

	try{
			//Making a super promise out of an array of promises
		const info = await Promise.all(players.map((username) => getUserInfo(username)));
		return info.map((user) => user.data);
	}
	catch(err){
		console.log(`Error in getPlayersInfo: ${err}`);
	}
}

export async function battle (players){

	// const playerOneData = getPlayersData(players[0]);
	// const playerTwoData = getPlayersData(players[1]);

	//Axios .all fires when both of these variables are resolved, nice
	// //playerOne and Two data are actually promises so they have to be resolved
	// return axios.all([playerOneData,playerTwoData])
	// 			.then(calculateScores)
	// 			.catch((err) => console.log("Error in getPlayersInfo: "+err));

	try{
		const playerOneData = getPlayersData(players[0]);
		const playerTwoData = getPlayersData(players[1]);
		const data = await Promise.all([playerOneData,playerTwoData]);
		return await calculateScores(data);
	}
	catch (err){
		console.log(`Error in battle: ${err}`);
	}
}


// module.exports = helpers;
// export default helpers;