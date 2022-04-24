import React from "react";

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-section">
        <div className="left-main">
          <div className="follow-link">
            <br />
            <br />
            <i className="twitter icon" />
            <br />
            <br />
            <i className="github icon" />
            <br />
            <br />
            <i className="facebook f icon" />
            <br />
            <br />
            <i className="linkedin icon" />
            <br />
            <br />
            <i className="youtube icon" />

            <div className="vertical-line"></div>
            <p className="follow-me">Follow Me</p>
          </div>
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
