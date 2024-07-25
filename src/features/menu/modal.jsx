import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  //useEffect hook is used to attach and detach the event listener that listens for clicks outside the modal-content div. handleOutsideClick function checks if the user's click is outside of the modal-content div then calls the onClose function if it is
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        onClose();
      }
    };
    // Attach the event listener
    document.addEventListener("mousedown", handleOutsideClick);
    // Detach the event listener on modal close
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <IoClose className="close-icon" onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
