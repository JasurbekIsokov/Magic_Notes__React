import React from "react";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <p className="title">PLUX</p>
        <div className="header-buttons">
          <div className="toogle-mode">
            <i className="adjust icon"></i>
          </div>
          <div className="navbar"></div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
