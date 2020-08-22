import React from "react";

export default function Result({ result, openDetail }) {
  const poster = "https://image.tmdb.org/t/p/w500";

  if (result === null) {
    console.log("NOT FOUND MOVIE!");
  }

  if (result.poster_path !== null) {
    return (
      <div
        className="result"
        id={result.id}
        onClick={() => {
          openDetail(result.id);
        }}
      >
        <img src={`${poster}${result.poster_path}`} alt="POSTER" width="100" />
        <h4>{result.title}</h4>
      </div>
    );
  } else {
    return (
      <div className="result" hidden>
        {/* <img src={`${poster}${result.poster_path}`} alt="POSTER" width="200" />
        <h3>{result.original_title}</h3> */}
        {`${result.original_title} tidak mempunyai gambar untuk di tampilkan`}
      </div>
    );
  }
}
