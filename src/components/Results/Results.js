import React from "react";
import Result from "./Result.js";
import "./Results.scss";

export default function Results({ results, openDetail }) {
  return (
    <div>
      <section className="results">
        {results.map((result) => (
          <Result result={result} key={result.id} openDetail={openDetail} />
        ))}
      </section>
    </div>
  );
}
