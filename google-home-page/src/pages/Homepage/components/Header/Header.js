import React from 'react'
import { HOMEPAGE_HEADER_LINKS } from '../../../../constants/Homepage_Links'
import './Header.css';

const generateHeaderList = (headerList) => headerList.map((item) => {
	return (
		<div className="HeaderItem" key={item.name}>
			<a className="HeaderLinks" href={item.link}>
				{item.name}
			</a>
		</div>
	);
});

function Header() {
	const headerLinks = HOMEPAGE_HEADER_LINKS;
	const listItems = generateHeaderList(headerLinks);
	
	return (
		<div className="Header">
			{ listItems }
		</div>
	);
}
export default Header;