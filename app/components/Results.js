// var React = require('react');
// var PropTypes = React.PropTypes;
// var styles = require('../styles');
// import styles from '../styles';
// var UserDetails = require('./UserDetails');
import UserDetails from './UserDetails';
// var UserDetailsWrapper = require('./UserDetailsWrapper');
import UserDetailsWrapper from './UserDetailsWrapper';
// var MainContainer = require('./MainContainer');
import MainContainer from './MainContainer';
// var Loading = require("./Loading");
import Loading from './Loading';
// var Link = require("react-router").Link;
import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import * as styles from '../styles/index.js';

React.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

//Example of private stateless functional components
//Meant to be used locally in a component file
function StartOver(){
	return (
		<div className='col-sm-12' style={styles.space}>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-danger'>Start Over </button>
			</Link>
		</div>
	)
}

function dumpData (obj){
	return <pre>{JSON.stringify(obj,2,' ')}</pre>
}

function Results({isLoading,scores, playersInfo}){

	if (isLoading === true){
		return (
			<Loading />
		)
	}

	if (scores[0]===scores[1]){
		return (
			<MainContainer>
				<h1>Its a tie!</h1>
				<StartOver />
			</MainContainer>
		)
	}
	const winningIndex = (scores[0]>scores[1])? 0:1;
	const losingIndex = (scores[0]>scores[1])? 1:0;
	return (
		<MainContainer>
			<h1>Results</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header='Winner'>
					<UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Loser'>
					<UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]} />
				</UserDetailsWrapper>
			</div>
			
			<StartOver />
		</MainContainer>
	)
}

// module.exports = Results;
export default Results;