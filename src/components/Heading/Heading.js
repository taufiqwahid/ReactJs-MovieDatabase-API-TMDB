import React from "react";

export default function Heading(props) {
  if (props.size === 1) {
    return (
      <div>
        <h1 id={props.id} className={props.className}>
          {props.children}
        </h1>
      </div>
    );
  } else if (props.size === 2) {
    return (
      <div>
        <h2 id={props.id} className={props.className}>
          {props.children}
        </h2>
      </div>
    );
  } else if (props.size === 3) {
    return (
      <div>
        <h3 id={props.id} className={props.className}>
          {props.children}
        </h3>
      </div>
    );
  } else if (props.size === 4) {
    return (
      <div>
        <h4 id={props.id} className={props.className}>
          {props.children}
        </h4>
      </div>
    );
  } else if (props.size === 5) {
    return (
      <div>
        <h5 id={props.id} className={props.className}>
          {props.children}
        </h5>
      </div>
    );
  } else if (props.size === 6) {
    return (
      <div>
        <h6 id={props.id} className={props.className}>
          {props.children}
        </h6>
      </div>
    );
  }

  return <h4>Component Heading Error Not Props SIZE</h4>;
}
