import React from "react";
import ReactDOM from "react-dom";
import SearchComponent from "./SearchComponent.js";
import CardComponent from "./CardComponent.js";

class KunTunComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="kunTun">
          <p className="title">
            <span>Magic</span> Notes
          </p>
          <p className="kuntun">Toogle Mode</p>
        </div>
        <SearchComponent />
        <CardComponent />
      </div>
    );
  }
}

export default KunTunComponent;
