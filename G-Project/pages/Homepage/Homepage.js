import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './Homepage.css';

function Homepage() {
  return (
    <div className="HomepageWrapper"> 
    	<div className="HomepageContentWrapper">
      	<Header />
	    <Main />
	    <Footer />
	    </div>
    </div>
  );
}

export default Homepage;
