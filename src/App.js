import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    { id: 0, name: '搗蛋貓', description: (<>搗蛋貓<br /> 屬性:無屬性<br /> 工作適應性:手作、搬運、採礦、採集 </>), image: 'https://patchwiki.biligame.com/images/palworld/d/dc/5ttetm0toqg3foaw3josy874pajeqyi.png' },
    { id: 1, name: '棉悠悠', description: (<>棉悠悠<br /> 屬性:無屬性<br /> 工作適應性:手作、搬運、牧場 </>), image: 'https://patchwiki.biligame.com/images/palworld/d/d1/09ag6ma7ej9g1lh175ehcksldajmpmx.png '},
    { id: 2, name: '皮皮雞', description: (<>皮皮雞<br /> 屬性:無屬性<br /> 工作適應性:牧場、採集</>), image: 'https://patchwiki.biligame.com/images/palworld/e/e9/ah1x6mdomks0x6jg8wmsh6gysivxrmi.png'},
    { id: 3, name: '新葉猿', description: (<>新葉猿<br /> 屬性:無屬性<br /> 工作適應性:伐木、手作、搬運、播種、採集 </>), image: 'https://patchwiki.biligame.com/images/palworld/5/5d/piosi94mfck7x5inrradc5fhjnp6nhh.png'},
    { id: 4, name: 'C', description: 'A swift archer with deadly accuracy.', image: 'https://patchwiki.biligame.com/images/palworld/7/77/shcqv7vpc81890bi4r8lmt7irjhllhw.png'},
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
      <h1 
      className="custom-title text-center my-4">
        帕魯圖鑑
      </h1>
      <CharacterList characters={characters} onCharacterClick={setSelectedCharacter} />
      {selectedCharacter && (
        <CharacterDetail character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
}

export default App;
