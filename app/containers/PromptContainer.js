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

	getInitialState: function(){
		return{
			username:''
		}
	},

	handleUpdateUser: function(e){
		this.setState({
			username:e.target.value
		})
	},

	handleSubmitUser: function(e){
		e.preventDefault();
		const {username} = this.state;
		this.setState({
			username:''
		});

		if(this.props.routeParams.playerOne){
			this.context.router.push({
				pathname: '/battle',
				query:{
					playerOne: this.props.routeParams.playerOne,
					playerTwo: username
				}
			})
		}
		else{
			this.context.router.push('/playerTwo/'+username)
		}
	},

	render:function(){
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