import React from "react";

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-section">
        <div className="left-main">
          <div className="text-main">
            <p className="h2">I'm Plux Doe</p>
            <p className="h2">I FrontEnd developer</p>
            <p className="text-lorem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque ex nemo, magnam architecto voluptas placeat.
            </p>
            <div className="btn-main">
              <button className="portfolio_btn btn">My Portfolio</button>
              <button className="contact_btn btn">Contact Me</button>
            </div>
          </div>
        </div>
        <div className="right-main"></div>
      </div>
    );
  }
}

export default MainComponent;
