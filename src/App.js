import React, { useState } from "react";
import Search from "./components/Search";

function App() {
    const [state, setState] = useState({
      searchQuery: "",
      results: [],
      selected: {}
    });

  const apiUrl = window.env.OMDb_API_KEY;
  console.log("api url :" + apiUrl);

    const handleInput = (event) => {
      let searchQuery = event.target.value;

      setState(previousState => {
        return {...previousState, searchQuery: searchQuery}
      });

      console.log(state.searchQuery);
    }

  return (
    <div className="App">
      <header>
        <h1>Anime Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
