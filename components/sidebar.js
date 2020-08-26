import React from "react";
import MetisMenu from "react-metismenu";

const content = [
  {
    id: 1,
    label: "Label of Item",
    to: "#a-link",
  },
  {
    id: 2,
    icon: "icon-class-name",
    label: "Second Item",
    content: [
      {
        id: 3,
        label: "Sub Menu of Second Item",
        to: "#another-link",
      },
    ],
  },
];

export default function Sidebar() {
  return <MetisMenu content={content}  className="sidebar--menu"/>;
}
