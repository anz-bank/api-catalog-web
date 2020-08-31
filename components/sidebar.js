import React from "react";
import MetisMenu from "react-metismenu";

const content = [
  {
    label: "Business Service",
    to: "#ink",
    content: [
      {
        label: "Contact Center",
        to: "#another-link",
      },
      {
        label: "Customer Relationship",
        to: "#another-link",
      },
      {
        label: "Document Management",
        to: "#another-link",
      },
    ],
  },
  {
    icon: "icon-class-name",
    label: "Compliance Engineering",
    to: "#b-link",
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <h1>Root</h1>
       <MetisMenu content={content} className="sidebar--menu"/>
    </div>
  );
}
