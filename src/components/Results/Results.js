import React from "react";
import Result from "./Result.js";
import "./Results.scss";
import Fade from "react-reveal/Fade";

export default function Results({ results, openDetail }) {
  return (
    <div>
      <section className="results">
        {results.map((result, index) => (
          <Fade bottom delay={100 * index} key={result.id}>
            <Result result={result} openDetail={openDetail} />
          </Fade>
        ))}
      </section>
    </div>
  );
}
