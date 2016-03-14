// var React = require('react');
// var PropTypes = React.PropTypes;

import React, {PropTypes} from 'react';

//Stateless functional component example here
function UserDetailsWrapper (props){
	return (
		<div className='col-sm-6'>
			<p className='lead'>{props.header}</p>
			{/*Render any children of this element (userdetails back in confirmbattle*/}
			{props.children}
		</div>
	)
}

// module.exports = UserDetailsWrapper;
export default UserDetailsWrapper;