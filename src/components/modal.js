import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) =>
  ReactDOM.createPortal(
    <div className="backdrop">
      <div className="modal">
        <div className="modal-content">{props.content}</div>
        <div className="modal-btn-groups">{props.btnGroup}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );

export default Modal;
