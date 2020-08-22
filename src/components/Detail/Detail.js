import React from "react";
import "./Detail.scss";

export default function Detail({ selected, closeDetail }) {
  const poster = "https://image.tmdb.org/t/p/original";
  return (
    <section className="detail">
      <div className="content">
        <h2>
          {selected.title} <span>({selected.release_date})</span>
        </h2>
        <p className="rating">popularity: {selected.popularity}</p>
        <div className="plot">
          <img
            src={`${poster}${selected.poster_path}`}
            alt="POSTER"
            width="100"
          />
          <p>{selected.overview}</p>
          <p>Status Movie : {selected.status}</p>
        </div>
        <button className="close" onClick={closeDetail}>
          Close
        </button>
      </div>
    </section>
  );
}
