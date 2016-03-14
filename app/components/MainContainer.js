// var React = require('react');
// var styles = require('../styles/index.js');
import React from 'react';
import * as styles from '../styles';

function MainContainer({children}){
	return(
		<div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
			{children}
		</div>
	)
}

// module.exports = MainContainer;
export default MainContainer;