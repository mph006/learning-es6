// var React = require('react');
// var ReactRouter = require('react-router');
// var Link =ReactRouter.Link;
// var MainContainer = require('./MainContainer');

import React from 'react';
import { Link } from 'react-router';
import {transparentBg} from '../styles/index.js';
import MainContainer from './MainContainer';

const Home = React.createClass({
	render: function(){
		return(
			<MainContainer>
				<h1>Github Battle</h1>
				<p className='lead'>Intro to React</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Get Started</button>
				</Link>
			</MainContainer>
		)
	}
});

// module.exports = Home;
export default Home;