import React from "react";
import ReactDOM from "react-dom";
import NavbarComponent from "./homePage/NavbarComponent.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavbarComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
