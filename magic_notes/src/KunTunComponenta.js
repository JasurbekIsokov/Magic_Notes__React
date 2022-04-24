import React from "react";
import ReactDOM from "react-dom";
import SearchComponent from "./SearchComponent.js";
import CardComponent from "./CardComponent.js";
import SaveCardComponent from "./SaveCardComponent.js";

class KunTunComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    datas: [],
    text: "",
  };

  saveHandler = (e) => {
    e.preventDefault();
    const { text } = this.state;
    let obj = {
      text: text,
      time: new Date().getHours() + ":" + new Date().getMinutes(),
    };
    this.setState({ datas: [...this.state.datas, obj] });
    console.log(this.state.datas);
    console.log(text);
  };
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
        <div className="cardContainer">
          <form className="card" onSubmit={this.saveHandler}>
            <div className="topCard">
              <textarea
                defaultValue={""}
                className="inputText"
                onChange={(e) => this.setState({ text: e.target.value })}
              ></textarea>
            </div>
            <div className="bottomCard">
              <p className="number">
                <span className="number">123 </span> Remaining
              </p>
              <button className="btnSave" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
        {this.state.datas.map((data, index) => (
          <SaveCardComponent
            data={data}
            key={index}
            setData={this.setState}
            datas={this.state.datas}
          />
        ))}
      </div>
    );
  }
}

export default KunTunComponent;
