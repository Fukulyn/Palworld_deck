import React from 'react';
import './CharacterCard.css';

function CharacterCard({ character, onClick }) {
  return (
    <div className="character-card card m-2" onClick={onClick} style={{ width: '150px', cursor: 'pointer' }}>
      <img src={character.image} alt={character.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
      </div>
    </div>
  );
}

export default CharacterCard;
