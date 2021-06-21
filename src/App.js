import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    searchQuery: "",
    results: [],
    selected: {}
  });

  
  const apiUrl = window.env.OMDb_API_KEY;

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiUrl + "&s=" + state.searchQuery).then(({ data }) => {
        let results = data.Search;

        setState(previousState => {
          return{ ...previousState, results: results }
        })
      });
    }
  }

  const handleInput = (event) => {
    let searchQuery = event.target.value;

    setState(previousState => {
      return {...previousState, searchQuery: searchQuery}
    });
  }

  const openPopup = id => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(apiUrl + "&i=" + id)
      console.log(result);

      setState(previousState => {
        return { ...previousState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(previousState => {
      return { ...previousState, selected: {} }
    });
  }

  // {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Anime Database</h1>
      </header>
      <main className="main">
        <SearchBar handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false }
      </main>
    </div>
  );
}

export default App;
