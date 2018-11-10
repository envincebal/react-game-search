import React, { Component } from 'react';
import Moment from "moment";



class GameDetails extends Component {

  getReleaseDate = () => {
    const gameInfo = this.props.location.state.game;
    const { expected_release_day,
      expected_release_month,
      expected_release_year, original_release_date } = gameInfo;

    if (!original_release_date) {
      return `${expected_release_day}-${expected_release_month}-${expected_release_year}`
    } else {
      return Moment(original_release_date).format("l");
    }
  }


  render() {
    const gameInfo = this.props.location.state.game;
    const {
      image: {
        icon_url: icon
      },
      platforms,
      name,
      deck } = gameInfo;
    return (
      <div className="details-content">
        <div className="box-art">
          <img src={icon} alt="box art" />
        </div>
        <div className="game-info">
          <h1>{name}</h1>
          <div className="release-date">
            <h3>Release Data</h3>
            <p>{this.getReleaseDate()}</p>
          </div>
          <div className="platforms">
            <h3>Platforms</h3>
            {platforms ? (
              platforms.map((platform, i) => {
                return <p key={i}>{platform.name}</p>;
              })
            ) : (
                <p>N/A</p>
              )
            }
          </div>
          <div className="about">
            <h3>About</h3>
            <p>{deck}</p>
            {console.log(this.props.location.state.game)}
          </div>
        </div>
      </div>
    );
  }

}

export default GameDetails;