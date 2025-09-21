import React from 'react';
import GameCard from './components/GameCard';
import games from './data/games';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="page-title">Select a Game</h1>
      <div className="games-wrapper">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="scroll-indicator">← Scroll →</div>
    </div>
  );
}

export default App;
