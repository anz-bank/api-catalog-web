import React, { Children } from "react";

export default function Card(props) {
  return (
    <div className="package__card">
      {props.children}
    </div>
  );
}
