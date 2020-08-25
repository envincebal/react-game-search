import React, { Component } from 'react';
import Moment from "moment";
import errorBox from "../img/no-box.jpeg";

class GameDetails extends Component {

  

  addDefaultSrc = (ev) => {
    ev.target.src = errorBox;
  }

  getReleaseDate = () => {
    const gameInfo = JSON.parse(sessionStorage.getItem("storedGames"));
    const gameDetails = gameInfo.find(game => game.name === this.props.location.pathname.slice(1));
    const { expected_release_day,
      expected_release_month,
      expected_release_year, original_release_date } = gameDetails;

    if (!original_release_date) {
      return `${expected_release_month}-${expected_release_day}-${expected_release_year}`
    } else {
      return Moment(original_release_date).format("l");
    }
  }

  render() {
    const gameInfo = JSON.parse(sessionStorage.getItem("storedGames"));
    const gameDetails = gameInfo.find(game => game.name === this.props.location.pathname.slice(1));
    const {
      image: {
        medium_url: icon
      },
      platforms,
      name,
      deck, site_detail_url } = gameDetails;

    return (
      <div className="details-content">
        <h1 className="game-title">{name}</h1>
        <div className="info-div">
          <div className="box-art">
            <img className="box-img" onError={this.addDefaultSrc} src={icon} alt="box art" />
          </div>
          <div className="game-info">
            <div className="platforms">
              <h3>Platforms</h3>
              <p>
                {platforms ? (
                  platforms.map((platform, i) => {
                    if (i === platforms.length - 1) {
                      return <span className="platform-item" key={i}>{platform.name}</span>;
                    } else {
                      return <span className="platform-item" key={i}>{platform.name + ", "}</span>;
                    }
                  })
                ) : (
                    <p>N/A</p>
                  )
                }
              </p>
            </div>
            <div className="release-date">
              <h3>Release Date</h3>
              <p>{this.getReleaseDate()}</p>
            </div>
            <div className="summary">
              <div className="summary-content">
                <h3>Summary</h3>
                <p>{deck}</p>
              </div>
            </div>
            <div className="more-info">
              <div className="more-info-content">
                <h3>More information</h3>
                <a className="info-link" href={site_detail_url} alt="more info" rel="noopener noreferrer" target="_blank"><i className="fas fa-3x fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameDetails;