import React from 'react';
import './GameCard.css'; // Optional CSS

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} className="game-image" />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p><strong>Type:</strong> {game.type}</p>
        <p><strong>Players:</strong> {game.players}</p>
        <button className="select-btn">Play</button>
      </div>
    </div>
  );
};

export default GameCard;
