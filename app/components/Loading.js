// var React = require('react');
// var styles = require('../styles/index.js');
// var PropTypes = React.PropTypes;

import React, {PropTypes} from 'react';
import * as styles from '../styles/index.js';

const Loading = React.createClass({

	propTypes:{
		text:PropTypes.string,
		speed: PropTypes.number
	},

	//Make this a concise object method
	getInitialState (){
		//Keep the original text as a variable in the scope

		//This is not an antipattern, this is only seed data for the components internally controlled state
		this.originalText = this.props.text;
		return {
			text:this.originalText
		}
	},

	//Set the default props for this component if none are passed into it
	getDefaultProps (){
		return{
			text: 'Loading',
			speed: 300
		}
	},

	componentDidMount (){
		const stopper = this.originalText+'...';
		//This serves as an animator
		this.interval = setInterval(() => {
			if(this.state.text === stopper){
				this.setState({
					text:this.originalText
				})
			}
			else{
				this.setState({
					text:this.state.text+'.'
				})
			}
		//Bind the scope to get access to the originalText variable
		//No need for bind here by way of the arrow function passing along the "this"
		},this.props.speed)
	},

	componentWillUnmount (){
		//Clean up the interval loop when the component unmounts
		clearInterval(this.interval);
	},

	render (){
		return (
			<div style={styles.container}>
				<p style={styles.textContent}>{this.state.text}</p>
			</div>
		)
	}

});

// module.exports = Loading;

export default Loading;