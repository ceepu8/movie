import React from "react";
import "./styles/popup.css";
export default function Popup(props) {
  return props.trigger ? (
    <div className="popup text-center">
      <div className="popup-inner">
        <iframe width="700" height="400" src={props.movieTrailer}></iframe>

        <button
          onClick={() => {
            props.setTrigger(false);
          }}
          className="btn btn-danger close"
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
