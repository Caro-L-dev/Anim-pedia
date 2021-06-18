import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
    const [state, setState] = useState({
      searchQuery: "",
      results: [],
      selected: {}
    });

  const apiUrl = window.env.OMDb_API_KEY;
  console.log("api url :" + apiUrl);

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiUrl + "&s=" + state.searchQuery).then((data) => {
        console.log(data);
      });
    }
  }

    const handleInput = (event) => {
      let searchQuery = event.target.value;

      setState(previousState => {
        return {...previousState, searchQuery: searchQuery}
      });
    }

  return (
    <div className="App">
      <header>
        <h1>Anime Database</h1>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
