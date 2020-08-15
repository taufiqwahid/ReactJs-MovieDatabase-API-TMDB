import React from "react";

export default function Result(result) {
  const poster = "https://image.tmdb.org/t/p/w500/";

  const results = result.result;

  if (results === null) {
    console.log("NOT FOUND MOVIE!");
  }

  if (results.poster_path !== null) {
    return (
      <div className="result">
        <img src={`${poster}${results.poster_path}`} alt="POSTER" width="100" />
        <h4>{results.original_title}</h4>
      </div>
    );
  } else {
    return (
      <div className="result" hidden>
        {/* <img src={`${poster}${results.poster_path}`} alt="POSTER" width="200" />
        <h3>{results.original_title}</h3> */}
      </div>
    );
  }
}
