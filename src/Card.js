
import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import './Card.css';

const Card = ({ detail, status, info }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
  };

  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return '#d4edda';
      case 'inactive':
        return '#a0a0a0';
      case 'pending':
        return '#fff3cd';
      default:
        return '#f0f0f0';
    }
  };

  const modalContent = (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        <p>{detail}</p>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: getStatusColor() }}
        onClick={handleClick}
      >
        <div className="card-content">
          <p>{info}</p>
        </div>
      </div>

      {showDetail &&
        ReactDOM.createPortal(
          modalContent,
          document.getElementById('modal-root')
        )}
    </>
  );
};

export default Card;