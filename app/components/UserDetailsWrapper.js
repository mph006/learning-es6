// var React = require('react');
// var PropTypes = React.PropTypes;

import React, {PropTypes} from 'react';

//Stateless functional component example here
function UserDetailsWrapper ({header, children}){
	return (
		<div className='col-sm-6'>
			<p className='lead'>{header}</p>
			{/*Render any children of this element (userdetails back in confirmbattle*/}
			{children}
		</div>
	)
}

// module.exports = UserDetailsWrapper;
export default UserDetailsWrapper;