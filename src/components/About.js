import React from 'react';

const About = (props) => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <p className="about-statement">
        The API provided for this app came from the good people at <a className="giant-bomb-link" rel="noopener noreferrer"
        target="_blank" href="https://www.giantbomb.com/api/">GiantBomb</a>.
       This was created for all the wonderful lovers of video games out there. <strong>DISCLAIMER:</strong> I am not responsible for anyone ending up in a World of Warcraft addiction recovery program. I built this app with plenty of love and countless liters of Dr. Pepper.
      </p>
    </div>
  );
}

export default About;