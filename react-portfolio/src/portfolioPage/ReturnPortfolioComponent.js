import React from "react";

class ReturnPortfolioComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="title_portfolio">
          <p>Portfolio</p>
          <hr />
        </div>
        <div className="cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    );
  }
}

export default ReturnPortfolioComponent;
