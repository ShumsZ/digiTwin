import './App.css';
import React, { useState } from 'react';
import AccessPanel from './AccessPanel';

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  const cardsData = [
    { detail: '100G MOTR WL3n', status: 'pending', info:'card 1', adminDetail:'Extra Info for card 1' },
    { detail: '100G MOTR WL3i', status: 'active', info:'card 2', adminDetail:'Extra Info for card 2' },
    { detail: '10 X 10G MUX', status: 'active', info:'card 3', adminDetail:'Extra Info for card 3' },
    { detail: '100G WaveLogic', status: 'active', info:'card 4', adminDetail:'Extra Info for card 4' },
    { detail: 'Filler Card', status: 'inactive', info:'card 5', adminDetail:'Extra Info for card 5' },
    { detail: 'Filler Card', status: 'inactive', info:'card 6', adminDetail:'Extra Info for card 6' },
    { detail: 'WSS Flex C-Band', status: 'active', info:'card 7', adminDetail:'Extra Info for card 7' },
    { detail: 'Filler Card', status: 'inactive', info:'card 8', adminDetail:'Extra Info for card 8'  },
    { detail: 'Filler Card', status: 'inactive', info:'card 9', adminDetail:'Extra Info for card 9' },
    { detail: 'Filler Card', status: 'inactive', info:'card 10', adminDetail:'Extra Info for card 10' },
    { detail: 'MLA3 (Drop) NTK552GA', status: 'active', info:'card 11', adminDetail:'Extra Info for card 11' },
    { detail: 'MLA2 C-Band NTK552FB', status: 'active', info:'card 12', adminDetail:'Extra Info for card 12' },
    { detail: '2 X OSC - NTK554BAE5', status: 'active', info:'card 13', adminDetail:'Extra Info for card 13' },
    { detail: 'SHELF PROCESSOR', status: 'active', info:'card 14', adminDetail:'Extra Info for card 14' },
    { detail: 'Filler Card', status: 'pending', info:'card 15', adminDetail:'Extra Info for card 15' },

  ];

  const toggleView = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  return (
    <div className="App">
      <h1>Access Panel Visualization</h1>
      <button className="toggle-button" onClick={toggleView}>
        Switch to {isAdmin ? 'User' : 'Admin'} View
      </button>
      <p className="view-label">Current View: {isAdmin ? 'Admin' : 'User'}</p>
      <AccessPanel cardsData={cardsData} isAdmin={isAdmin} />
    </div>
  );
}

export default App;
