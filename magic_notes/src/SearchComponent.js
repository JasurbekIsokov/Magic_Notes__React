import React from "react";
import ReactDOM from "react-dom";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchBox">
        <i className="search icon"></i>
        <input
          className="searchInput"
          type={"text"}
          placeholder="Search for your notes..."
        />
      </div>
    );
  }
}

export default SearchComponent;
