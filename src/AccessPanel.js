
import React from 'react';
import Card from './Card';
import './AccessPanel.css';

const AccessPanel = ({ cardsData }) => {
  return (
    <div className="access-panel">
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} detail={card.detail} status={card.status} info={card.info} />
        ))}
      </div>
    </div>
  );
};

export default AccessPanel;