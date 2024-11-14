import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    { id: 0, name: '帕魯', description: (<>棉悠悠<br /> 無屬性<br /> 工作適應性:手作 搬運 牧場 </>), image: 'https://patchwiki.biligame.com/images/palworld/d/dc/5ttetm0toqg3foaw3josy874pajeqyi.png' },
    { id: 1, name: '龍', description: 'A wise mage with powerful spells.', image: 'https://images-ext-1.discordapp.net/external/dbXGhyqlO5pySqpuHrQKpSjHXhdeR4hmQogv-lqM1aw/https/patchwiki.biligame.com/images/palworld/d/d1/09ag6ma7ej9g1lh175ehcksldajmpmx.png?format=webp&quality=lossless&width=640&height=640' },
    { id: 2, name: 'A', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 3, name: 'B', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 4, name: 'C', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 5, name: 'D', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 6, name: 'E', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 7, name: 'F', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 8, name: 'G', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 9, name: 'H', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 10, name: 'I', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 11, name: 'J', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 12, name: 'K', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 13, name: 'L', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 14, name: 'M', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 15, name: 'N', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 16, name: 'O', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 17, name: 'S', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 18, name: 'AS', description: 'A swift archer with deadly accuracy.', image: ''},
    { id: 19, name: 'L', description: 'A swift archer with deadly accuracy.', image: ''},
  ];

  return (
    <div className="app-container">
      <h1 className="text-center my-4">帕魯圖鑑</h1>
      <CharacterList characters={characters} onCharacterClick={setSelectedCharacter} />
      {selectedCharacter && (
        <CharacterDetail character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
}

export default App;
