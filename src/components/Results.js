import React from "react";
import Result from "./Result";
export default function Results({ results }) {
  return (
    <section className="results">
      {results.map((result) => (
        <Result result={result} key={result.id} />
      ))}
    </section>
  );
}
