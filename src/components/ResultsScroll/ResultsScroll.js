import React from "react";
import "./ResultsScroll.scss";

export default function ResultsScroll(results) {
  const poster = "https://image.tmdb.org/t/p/w500/";
  const popular = results.popular;

  return (
    <div>
      {popular.map((data) => {
        return (
          <div className="resultsScroll" key={data.id}>
            <img
              src={`${poster}${data.poster_path}`}
              alt="POSTER"
              width="100"
            />
            <h4>{data.original_title}</h4>
          </div>
        );
      })}
    </div>
  );
}
