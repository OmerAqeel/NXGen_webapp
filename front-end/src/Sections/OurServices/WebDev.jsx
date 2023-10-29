import React from "react";
import "./WebDev.css";


const WebDev = ({ isOpen, onClose}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h1 className="title">Web Development</h1> 
        <p></p>
      </div>
    </div>
  );
};

export default WebDev;
