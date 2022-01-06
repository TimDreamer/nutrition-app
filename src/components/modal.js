import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) =>
  ReactDOM.createPortal(
    <div className="backdrop modal">
      <div className="modal-content">{props.content}</div>
      <div className="modal-btn-groups">{props.btnGroup}</div>
    </div>,
    document.getElementById("modal")
  );

export default Modal;
