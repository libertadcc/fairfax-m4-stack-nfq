import '../styles/modal.css';
import React from 'react';

function Modal({id, type}) {
  const onChangeInfo = () => {
    var modal = document.getElementById(id);
    if (modal.style.display === 'block') {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    };
  };

  return (
    <div id={id} className="modal">
      <div className="modalContent">
        <span className="close" onClick={onChangeInfo}>&times;</span>
        <div className={type}></div>
      </div>
    </div>
  );
}

export default Modal;