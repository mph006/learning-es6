// var React = require('react');
// require('../main.css');
//ReactCSSTransitionGroup needs it's child to have a key, so we have to clone our this.props.children
//We will give it a key of the pathname from React router
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../main.css'


const Main = React.createClass({
	render (){
		return(
			<div className='main-container'>
			<ReactCSSTransitionGroup 
				transitionName="appear" 
				transitionEnterTimeout={500} 
				transitionLeaveTimeout={500}>

				{React.cloneElement(this.props.children, {key:this.props.location.pathname})}

			</ReactCSSTransitionGroup>
			</div>
		)
	}
});

// module.exports = Main;

export default Main;