import React from 'react';

const SearchBar = () => {
	const inputstyle = {
	  	display: 'flex',
	  	background: '#fff',
	  	border: '1px solid #dfe1e5',
	  	width: '584px',
	  	height: '46px',
	  	padding: '0 14px'
	};

	return (
		<input type="text" style={inputstyle} />
	);
}

export default SearchBar;