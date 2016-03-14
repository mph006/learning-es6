// var React = require('react');
// var transparentBg = require('../styles').transparentBg;
// var Prompt = require ('../components/Prompt');

import React from 'react';
import {transparentBg} from '../styles';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
	
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},

	getInitialState (){
		return{
			username:''
		}
	},

	handleUpdateUser (e){
		this.setState({
			username:e.target.value
		})
	},

	handleSubmitUser (e){
		e.preventDefault();
		const {username} = this.state;
		this.setState({
			username:''
		});
		//Concise object example. If they key is the same value as the object you dont need ot re-write it
		//playerOne.playerOne is not needed here...
		const {playerOne} = this.props.routeParams
		if(playerOne){
			this.context.router.push({
				pathname: '/battle',
				query:{
					playerOne: playerOne,
					playerTwo: username
				}
			})
		}
		else{
			//Template strings example
			this.context.router.push(`/playerTwo/${username}`);
		}
	},

	render (){
		return(
			<Prompt 
				onSubmitUser={this.handleSubmitUser} 
				onEnteredName={this.handleUpdateUser}
				header = {this.props.route.header}
				username = {this.state.username} />
		)
	}
});

// module.exports = PromptContainer;
export default PromptContainer;