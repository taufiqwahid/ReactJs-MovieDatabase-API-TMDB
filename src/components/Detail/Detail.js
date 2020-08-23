import React from "react";
import "./Detail.scss";

export default function Detail({ selected, closeDetail }) {
  const poster = "https://image.tmdb.org/t/p/original";
  // const backdrop_path = `${poster}${selected.backdrop_path}`;
  console.log(selected);
  return (
    <section className="popup">
      <div className="content">
        <img
          src={`${poster}${selected.poster_path}`}
          alt="POSTER"
          width="100"
        />
        <div className="description">
          <h2>{selected.title}</h2>
          <p className="overview">{selected.overview}</p>
          <div className="note">
            <p className="status">Status : {selected.status}</p>
            <p className="vote">Rating : {selected.vote_average}</p>
            <p className="release">Release : ({selected.release_date})</p>
            <p className="popularity">popularity : {selected.popularity}</p>
          </div>
        </div>
      </div>

      {/* Close */}
    </section>
  );
}
