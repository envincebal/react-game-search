import React from 'react';

const About = (props) => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <ul className="about-list">
        <li>The API provided for this app came from the good people at <a className="giant-bomb-link" href="https://www.giantbomb.com/api/">GiantBomb</a>.</li>
        <li>This was created for all the wonderful lovers of video games out there.</li>
        <li><strong>DISCLAIMER:</strong> I am not responsible for anyone ending up in a World of Warcraft addiction program.</li>
        <li>I built this app with plenty of love and countless liters of Dr. Pepper.</li>
      </ul>
    </div>
  );
}

export default About;