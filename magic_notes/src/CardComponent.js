import React from "react";
import ReactDOM from "react-dom";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <div className="topCard">
            <textarea className="inputText"></textarea>
          </div>
          <div className="bottomCard">
            <p className="number">
              <span className="number">123 </span> Remaining
            </p>
            <button className="btnSave">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
