import React from "react";
import "./Search.scss";

export default function Search({ handleInput, search }) {
  return (
    <section className="searchBox-wrap">
      <input
        type="text"
        className="searchBox"
        placeholder="Search your Movie..."
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}
