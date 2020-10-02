import React from 'react'
import { HOMEPAGE_FOOTER_LEFT_LIST_LINKS, HOMEPAGE_FOOTER_RIGHT_LIST_LINKS } from '../../../../constants/Homepage_Links'
import './Footer.css';

const generateFooterList = (headerList) => headerList.map((item) => {
	return (
		<div className="FooterItem" key={item.name}>
			<a className="FooterLinks" href={item.link}>
				{item.name}
			</a>
		</div>
	);
});

function Footer() {
	const leftList = generateFooterList(HOMEPAGE_FOOTER_LEFT_LIST_LINKS);
	const rightList = generateFooterList(HOMEPAGE_FOOTER_RIGHT_LIST_LINKS);
	return (
		<div className="FooterWrapper">
			<div className="FootLeft">
				{leftList}
			</div>
			<div className="FootRight">
				{rightList}
			</div>
		</div>
		
	);
}
export default Footer;