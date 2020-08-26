import React from "react";

export default function Button(props) {
  return (
    <button className="btn--outline" type="button">
      {props.children}
    </button>
  );
}
