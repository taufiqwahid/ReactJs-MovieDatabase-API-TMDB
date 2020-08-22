import React, { useState } from "react";
import Search from "./components/Search/Search.js";
import Heading from "./components/Heading/Heading.js";
import Results from "./components/Results/Results.js";
import ResultsScroll from "./components/ResultsScroll/ResultsScroll.js";
import Detail from "./components/Detail/Detail.js";

import "./App.scss";
import Axios from "axios";
import Popup from "reactjs-popup";

import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

function App() {
  // "https://api.themoviedb.org/3/search/movie?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef&query=BATMAN";
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef";

  const apiPopular =
    "https://api.themoviedb.org/3/movie/popular?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef";

  const apiDetail = "https://api.themoviedb.org/3/movie/";
  const apiKey = "?api_key=f1ab19c53cebd5165e00ac39dcf8b1ef";

  const [state, setState] = useState({
    s: "",
    results: [],
    popular: [],
    selected: {},
    popup: false,
  });

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  Axios.get(apiPopular).then((data) => {
    const popular = data.data.results;
    setState((prevState) => {
      return { ...prevState, popular: popular };
    });
  });

  const search = (e) => {
    if (e.key === "Enter") {
      // document.getElementById("popular").innerHTML = "Popular";
      // document.getElementById("searching").innerHTML = "Searching";
      Axios(`${apiUrl}&query=${state.s}`).then((movie) => {
        const results = movie.data.results;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const openDetail = (id) => {
    Axios.get(`${apiDetail}${id}${apiKey}`).then(({ data }) => {
      const result = data;
      setState((prevState) => {
        return { ...prevState, selected: result, popup: true };
      });
    });
  };

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {}, popup: false };
    });
  };

  return (
    <div className="App" id="App">
      <Zoom>
        <header>
          <Heading size={1}>Movie Database</Heading>
        </header>
      </Zoom>
      <main>
        <Zoom>
          <Search handleInput={handleInput} search={search} />
        </Zoom>
        <Flip left delay={300}>
          <Heading size={2} id="popular">
            Popular
          </Heading>
        </Flip>
        <ResultsScroll popular={state.popular} />
        <Flip left delay={500}></Flip>

        {state.results[0] ? (
          <Flip delay={500} left>
            <Heading size={2} id="searching">
              Searching
            </Heading>
            <Results results={state.results} openDetail={openDetail} />
          </Flip>
        ) : (
          console.log("Not Found Results Movie")
        )}

        {typeof state.selected.title != "undefined" ? (
          <Popup open={state.popup} closeOnDocumentClick onClose={closeDetail}>
            <Detail selected={state.selected} closeDetail={closeDetail} />
          </Popup>
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
