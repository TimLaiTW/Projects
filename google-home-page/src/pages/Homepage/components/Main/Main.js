import React from 'react'
import Logo from './components/Logo/Logo'
import SearchButton from './components/SearchButton/SearchButton'
import SearchBar from './components/SearchBar/SearchBar'
import './Main.css';

function Main() {
  return (
  	<div className="MainWrapper">
	    <div className="MainContentWrapper"> 
	      <Logo />
	      <SearchBar />
	      <SearchButton />
	    </div>
	</div>
  );
}

export default Main;
