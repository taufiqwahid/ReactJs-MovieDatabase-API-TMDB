import React, { useState } from "react";
import Search from "./components/Search.js";
import "./App.scss";
import Results from "./components/Results.js";
import Axios from "axios";

function App() {
  // "https://api.themoviedb.org/3/search/movie?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef&query=BATMAN";
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = (e) => {
    if (e.key === "Enter") {
      Axios(`${apiUrl}&query=${state.s}`).then((movie) => {
        const results = movie.data.results;
        // console.log(results);
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
