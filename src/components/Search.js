import React from 'react';

const Search = (props) => {
  return (
    <div className="search-bar">
      <div className="search-form">
        <form>
          <input className="input-field" type="text" placeholder="Search Game"/>
          <button className="search-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Search;