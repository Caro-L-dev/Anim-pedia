import axios from "axios";
import React, { useState } from "react";
import Header from './components/Header';
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    searchQuery: "",
    results: [],
    selected: {}
  });

  
  const apiUrl = window.env.JIKAN_API;

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiUrl + "search/anime?q=" + state.searchQuery).then(({ data }) => {
        
       const jikanResults = data.results
        let results = jikanResults.map(result => {
          return {
            Poster: result.image_url,
            Title: result.title,
            Type: result.type,
            Status: result.status,
            Score: result.score,
            Mal_ID: result.mal_id,
          }
        })

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
    axios(apiUrl + "anime/" + id).then(({ data }) => {
      let result = {
        Poster: data.image_url,
        Title: data.title,
        JapTitle: data.title_japanese,
        Type: data.type,
        Status: data.status,
        Score: data.score,
        Mal_ID: data.mal_id,

        Episodes: data.episodes,
        Duration: data.duration,
        Synopsis: data.synopsis,
        Rating: data.rating,
        Trailer: data.trailer_url,

        Genres: data.genre,
        
        Year: data.start_date + " - " + data.end_date,
        
      };

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

  return (
    <div className="App">
       <Header />
      <main className="main">
        <SearchBar handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false }
      </main>
    </div>
  );
}

export default App;
