import React from "react";
import axios from "axios";

// My component
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { key: "" };

  constructor(props) {
    super(props);
  }

  getSearchData = (data) => {
    this.setState({ key: data });
    console.log(this.state.key);
  };

  componentDidUpdate() {
    this.getIpData();
  }

  getIpData = async () => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.kalit,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    console.log(data.data.results);
  };

  render() {
    return (
      <div>
        <SearchBar getData={this.getSearchData} />
        <ImageList />
      </div>
    );
  }
}

export default App;
