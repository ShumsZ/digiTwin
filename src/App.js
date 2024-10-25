import logo from './logo.svg';
import './App.css';
import Card from './Card';
import AccessPanel from './AccessPanel';

function App() {
  const cardsData = [
    { detail: '100G MOTR WL3n', status: 'pending', info:'card 1' },
    { detail: '100G MOTR WL3i', status: 'active', info:'card 2' },
    { detail: '10 X 10G MUX', status: 'active', info:'card 3' },
    { detail: '100G WaveLogic', status: 'active', info:'card 4' },
    { detail: 'Filler Card', status: 'inactive', info:'card 5' },
    { detail: 'Filler Card', status: 'inactive', info:'card 6' },
    { detail: 'WSS Flex C-Band', status: 'active', info:'card 7' },
    { detail: 'Filler Card', status: 'inactive', info:'card 8' },
    { detail: 'Filler Card', status: 'inactive', info:'card 9' },
    { detail: 'Filler Card', status: 'inactive', info:'card 10' },
    { detail: 'MLA3 (Drop) NTK552GA', status: 'active', info:'card 11' },
    { detail: 'MLA2 C-Band NTK552FB', status: 'active', info:'card 12' },
    { detail: '2 X OSC - NTK554BAE5', status: 'active', info:'card 13' },
    { detail: 'SHELF PROCESSOR', status: 'active', info:'card 14' },
    { detail: 'Filler Card', status: 'pending', info:'card 15' },

  ];

  return (
    <div className="App">
      <h1>Access Panel Visualization</h1>
      <AccessPanel cardsData={cardsData} />
    </div>
  );
}

export default App;
