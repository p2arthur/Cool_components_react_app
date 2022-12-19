import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose, children, actionBar }) {
  const handleCloseClick = () => onClose();

  useEffect(() => {
    const body = document.body;
    body.classList.add("overflow-hidden");

    return () => body.classList.remove("overflow-hidden");
  }, []);

  //Creating a portal to .modal-container for our modal so it can be reutilized without caring if there is a positioned parent component
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={handleCloseClick}
        className="fixed inset-0 bg-black opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
