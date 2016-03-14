// var React = require('react');
import React from 'react';
// var ConfirmBattle = require('../components/ConfirmBattle');
import ConfirmBattle from '../components/ConfirmBattle';
// var githubHelpers = require('../utils/githubHelpers');
import * as githubHelpers from '../utils/githubHelpers.js';

const ConfirmBattleContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	//Setting the component initial state
	getInitialState (){
		//console.log("In Battle: get initial state")
		return {
			isLoading: true,
			playersInfo:[]
		}
	},
	//Preparing the component for mounting
	componentWillMount (){
		//console.log("In Battle: component will mount");
	},
	//Lifecycle event when the component loaded, good for event listeners and ajax calls
	async componentDidMount (){
		//console.log("In Battle: component did mount");
		const query = this.props.location.query;
		//Scoping issues for "this"
		// var that = this;
		// githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		// 	.then((players) => {
		// 		this.setState({
		// 			isLoading:false,
		// 			playersInfo:[players[0],players[1]]
		// 		})
		// 		//This will fix the scoping issues, but variable assignment will work too
		// 		//Use arrow function here
		// 	})

		//async example
		try{
			const players = await githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]);
			this.setState({
				isLoading: false,
				playersInfo: [players[0],players[1]]
			})
		}
		catch(err){
			console.log(`Error in ConfirmBattleContainer: ${err}`)
		}
		



	},
	//Fired when the component recieves new props
	componentWillReceiveProps (){
		//console.log("In Battle: component will recieve props");

	},
	handleInitiateBattle (){
		this.context.router.push({
			pathname: '/results',
			//Keep the players info in the state when we push to the new route
			state:{
				playersInfo: this.state.playersInfo
			}
		})
	},
	//Fired when you navigate away or remove the component
	componentWillUnmount (){
		//console.log("In Battle: component will unmount");
	},
	//Renders the component
	render (){
		//console.log("In Battle: rendering");
		return(<ConfirmBattle 
			isLoading={this.state.isLoading}
			onInitateBattle={this.handleInitiateBattle}
			playersInfo = {this.state.playersInfo} />);
	}

});

// module.exports = ConfirmBattleContainer;
export default ConfirmBattleContainer;