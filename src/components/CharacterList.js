import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

function CharacterList({ characters, onCharacterClick }) {
  return (
    <div className="character-list d-flex flex-wrap justify-content-center">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} onClick={() => onCharacterClick(character)} />
      ))}
    </div>
  );
}

export default CharacterList;
