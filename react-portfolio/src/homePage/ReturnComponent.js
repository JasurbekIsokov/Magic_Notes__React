import React from "react";

import HeaderComponent from "./HeaderComponent.js";
import NavbarComponent from "./NavbarComponent.js";
import MainComponent from "./MainComponent.js";

class ReturnComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <MainComponent />
      </div>
    );
  }
}

export default ReturnComponent;
