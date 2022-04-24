import React from "react";
import ReactDOM from "react-dom";

import ReturnComponent from "./homePage/ReturnComponent.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ReturnComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
