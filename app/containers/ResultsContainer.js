// var React = require('react');
// var Results = require("../components/Results");
// var githubHelpers = require('../utils/githubHelpers');

import React from 'react';
import Results from '../components/Results';
import * as githubHelpers from '../utils/githubHelpers.js';

const ResultsContainer = React.createClass({
	getInitialState:function(){
		return {
			isLoading: true,
			scores:[]
		}
	},
	componentDidMount: function(){
		//Fetch the players data from the state of the 'confirmBattleContainer' app route assignment
		//console.log(this.props.location.state.playersInfo);
		githubHelpers.battle(this.props.location.state.playersInfo)
			//Promiseland
			.then(function (scores){
				this.setState({
					scores:scores,
					isLoading:false
				})
				//Watch the scope of 'this' again
			}.bind(this))
	},
	render: function(){
		return (
			<Results 
				isLoading={this.state.isLoading} 
				scores={this.state.scores}
				playersInfo={this.props.location.state.playersInfo}/>
		)
	}

});

// module.exports = ResultsContainer;
export default ResultsContainer;