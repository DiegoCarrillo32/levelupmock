import React from "react";
import './Modal.css'
const Modal = ({isOpen}) => {
  return <>
          <div className="modal"> 
            <div className="header">
             <h2> {isOpen.TEXT} </h2>
             <h1> {isOpen.TITLE}  </h1> 
            </div>
            <p> {isOpen.INFO} </p>
          </div>
          

        </>
};

export default Modal;