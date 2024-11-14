import React from 'react';
import './CharacterDetail.css';

function CharacterDetail({ character, onClose }) {
  return (
    <div className="character-detail card my-4 p-3">
      <button className="btn btn-secondary mb-2" onClick={onClose}>Close</button>
      <img src={character.image} alt={character.name} className="card-img-top mb-2" />
      <div className="card-body">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-text">{character.description}</p>
      </div>
    </div>
  );
}

export default CharacterDetail;
