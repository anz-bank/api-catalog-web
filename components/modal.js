import React, { useEffect, useState, useRef } from "react";

export default function Modal(props) {

  const node = useRef();
  const show = props.show
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    //outside click
    props.onClose && props.onClose(e)
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="modal" style={{display: `${show? 'flex': 'none'}`}}>
      <div className="modal-dialog" ref={node} >
        <div className="modal-header">
        </div>
        <div className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  );
}
