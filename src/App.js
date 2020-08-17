import React, { useState } from "react";
import Search from "./components/Search/Search.js";
import Heading from "./components/Heading/Heading.js";
import Results from "./components/Results/Results.js";
import ResultsScroll from "./components/ResultsScroll/ResultsScroll.js";
import "./App.scss";
import Axios from "axios";

function App() {
  // "https://api.themoviedb.org/3/search/movie?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef&query=BATMAN";
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef";

  const apiPopular =
    "https://api.themoviedb.org/3/movie/popular?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef";

  const [state, setState] = useState({
    s: "",
    results: [],
    popular: [],
    selected: {},
  });

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      // document.getElementById("popular").innerHTML = "Popular";
      // document.getElementById("searching").innerHTML = "Searching";
      Axios.get(apiPopular).then((data) => {
        const popular = data.data.results;
        setState((prevState) => {
          return { ...prevState, popular: popular };
        });
      });
      Axios(`${apiUrl}&query=${state.s}`).then((movie) => {
        const results = movie.data.results;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  return (
    <div className="App" id="App">
      <header>
        <Heading size={1}>Movie Database</Heading>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Heading size={2} id="popular">
          Popular
        </Heading>
        <ResultsScroll popular={state.popular} />
        <Heading size={2} id="searching">
          Searching
        </Heading>
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
