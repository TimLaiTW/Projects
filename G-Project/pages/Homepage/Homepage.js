import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './Homepage.css';

function Homepage() {
  return (
    <div className="HomepageWrapper"> 
      	<Header />
	    <Main />
	    <Footer />
    </div>
  );
}

export default Homepage;
