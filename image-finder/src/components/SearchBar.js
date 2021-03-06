import React from "react";

class SearchBar extends React.Component {
  state = { inputValue: "" };

  constructor(props) {
    super(props);
    // this.getInputData = this.getInputData.bind(this);
  }

  getInputData(e) {
    this.setState({ inputValue: e.target.value });
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.getIpData(this.state.inputValue);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px " }}>
        <form onSubmit={this.formSubmit} className="ui search">
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={(e) => this.getInputData(e)}
              className="prompt"
              type="text"
              placeholder="Search images..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
