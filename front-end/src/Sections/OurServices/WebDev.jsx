import React from "react";
import "./WebDev.css";

const WebDev = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h1 className="title">{title}</h1>
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default WebDev;
