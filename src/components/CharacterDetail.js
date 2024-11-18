import React, { useEffect } from 'react';
import './CharacterDetail.css';

function CharacterDetail({ character, onClose }) {
  const handleClose = () => {
    
    window.scrollTo(0, 0);
    onClose();
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [character]);

  return (
    <div className="character-detail card my-4 p-3">
      <button className="btn btn-secondary mb-2" onClick={handleClose}>Close</button>
      <img src={character.image} alt={character.name} className="card-img-top mb-2" />
      <div className="card-body">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-text">{character.description}</p>
        <div>
          <strong>屬性:</strong> {character.attribute.length > 0 ? character.attribute.join(', ') : '無屬性'}
        </div>
        <div>
          <strong>工作適應性:</strong> {character.workCompatibility.length > 0 ? character.workCompatibility.join(', ') : '無適應性'}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;