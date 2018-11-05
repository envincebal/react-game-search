import React from 'react';
import logo from "../img/consoles.jpg";

const MainPage = (props) => {
  return (
    <div className="main-content">
      <h1 className="title">React Game Search</h1>
      <p>Search for all your favorite video games!</p>
      <img className="main-image" src={logo} alt={"consoles"} />
    </div> 
  );
}

export default MainPage;