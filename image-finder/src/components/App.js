import React from "react";
import axios from "axios";

// My component
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { arr: [] };
  getSearchData = async (imagData) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: imagData,

        per_page: 30,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });

    this.setState({ arr: data.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar getIpData={this.getSearchData} />
        <ImageList dataImg={this.state.arr} />
      </div>
    );
  }
}

export default App;
