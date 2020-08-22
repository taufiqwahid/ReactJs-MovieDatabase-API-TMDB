import React from "react";
import "./ResultsScroll.scss";

export default function ResultsScroll(results) {
  const poster = "https://image.tmdb.org/t/p/w500/";
  const popular = results.popular;

  return (
    <div className="resultsScroll">
      {popular.map((data) => {
        return (
          <div className="resultScroll" key={data.id} id={data.id}>
            <img
              src={`${poster}${data.poster_path}`}
              alt="POSTER"
              width="100"
            />
            <h4>{data.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
