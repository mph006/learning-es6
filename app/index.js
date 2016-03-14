// var USER_DATA = {
// 	name : "Matt Herman",
// 	username: "mph006",
// 	image: 'https://avatars2.githubusercontent.com/u/3487290?v=3&u=776a16c28dce7037eb66fd2881635f78fe4e99bd&s=140'
// }

// var React = require('react');
// var ReactDOM = require('react-dom');
// var routes = require('./config/routes');
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes.js';

// var ProfilePic = React.createClass({
// 	render: function (){
// 		return (<img src={this.props.imageUrl} style={{height:100, width:100}} />)
// 	}
// });

// var Link = React.createClass({

// 	changeURL: function(){
// 		window.location.replace(this.props.href);
// 	},

// 	render:function(){
// 		return (
// 			<span 
// 				style={{color: 'blue', cursor:'pointer'}}
// 				onClick={this.changeURL}>
// 				{this.props.children}
// 			</span>
// 		)
// 	}
// });

// var ProfileLink = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<Link href={'https://www.github.com/'+this.props.username}>
// 					{this.props.username}
// 				</Link>
// 			</div>
// 		)
// 	}
// });

// var UserName = React.createClass({
// 	render: function(){
// 		return (<div>{this.props.name}</div>)
// 	}
// });

// var Avatar = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<ProfilePic imageUrl={this.props.user.image} />
// 				<ProfileLink username={this.props.user.username} />
// 				<UserName name={this.props.user.name} />
// 			</div>
// 		)
// 	}
// });

ReactDOM.render(
	routes,
	// <Avatar user={USER_DATA}/>,
	document.getElementById("app")
);