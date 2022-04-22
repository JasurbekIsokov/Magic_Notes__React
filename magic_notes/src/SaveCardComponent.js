import React from "react";
import ReactDOM from "react-dom";

class SaveCardComponent extends React.Component {
  constructor(props) {
    super(props);
    let time = this.getTime();
    console.log(time);
  }

  getTime = () => {
    let data = new Date();
    let date = data.getDate();
    let month = data.getMonth();
    let year = data.getFullYear();
    let hours = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    return { date, month, year, hours, min, sec };
  };

  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <div className="topCard">
            <textarea readOnly className="inputText"></textarea>
          </div>
          <div className="bottomCard">
            <p className="number">
              <span className="number">{this.getTime()}/12/2022</span>
            </p>
            <i className="trash alternate icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveCardComponent;
