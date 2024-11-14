import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([
    { id: 0, name: '搗蛋貓', attribute: ['無屬性'], workCompatibility: ['手作', '搬運', '採礦', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/d/dc/5ttetm0toqg3foaw3josy874pajeqyi.png' },
    { id: 1, name: '棉悠悠', attribute: ['無屬性'], workCompatibility: ['手作', '搬運', '牧場'], image: 'https://patchwiki.biligame.com/images/palworld/d/d1/09ag6ma7ej9g1lh175ehcksldajmpmx.png' },
    { id: 2, name: '皮皮雞', attribute: ['無屬性'], workCompatibility: ['牧場', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/e/e9/ah1x6mdomks0x6jg8wmsh6gysivxrmi.png' },
    { id: 3, name: '翠葉鼠', attribute: ['無屬性'], workCompatibility: ['伐木', '手作', '搬運', '播種', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/5/5d/piosi94mfck7x5inrradc5fhjnp6nhh.png' },
    { id: 4, name: '衝浪鴨', attribute: ['水屬性'], workCompatibility: ['手作', '搬運', '澆水'], image: 'https://patchwiki.biligame.com/images/palworld/7/77/shcqv7vpc81890bi4r8lmt7irjhllhw.png' },
    { id: 5, name: '火絨狐', attribute: ['火屬性'], workCompatibility: ['生火'], image: 'https://patchwiki.biligame.com/images/palworld/2/22/d76wh5wzvesp4lougn57sky4juemtnj.png' },
    { id: 6, name: '伏特喵', attribute: ['無屬性'], workCompatibility: ['發電', '手作', '搬運'], image: 'https://patchwiki.biligame.com/images/palworld/a/a4/2fh2yfu778ccjuam6hwqmu7ms5e9cy4.png' },
    { id: 7, name: '新葉猿', attribute: ['草屬性'], workCompatibility: ['伐木', '手作', '搬運', '播種', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/2/20/sxcyzs7h1d4q7rbrag0jzib97vr8iw6.png' },
    { id: 8, name: '企丸丸', attribute: ['水屬性', '冰屬性'], workCompatibility: ['冷卻', '手作', '搬運', '澆水'], image: 'https://patchwiki.biligame.com/images/palworld/2/2f/9mf88pyyuz03er0wb1y9dy38i93qlow.png' },
    { id: 9, name: '燎火鹿', attribute: ['火屬性'], workCompatibility: ['生火'], image: 'https://patchwiki.biligame.com/images/palworld/7/7d/pd6bsfiounrb5ousjdusqztavgbs5gw.png' },
    { id: 10, name: '電棘鼠', attribute: ['雷屬性'], workCompatibility: ['發電'], image: 'https://patchwiki.biligame.com/images/palworld/b/b9/esb799wwrjo173tfeb6rad2kvivagjo.png' },
    { id: 11, name: '企丸王', attribute: ['水屬性', '冰屬性'], workCompatibility: ['冷卻', '手作', '搬運', '澆水', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/c/ca/ln95r7atie3o6fb9g5pa84o26qce18r.png' },
    { id: 12, name: '玉藻狐', attribute: ['無屬性'], workCompatibility: ['牧場', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/7/75/eya2h9xvmzx154v31e7p1nf6irmnrqh.png' },
    { id: 13, name: '葉泥泥', attribute: ['草屬性', '地屬性'], workCompatibility: ['播種'], image: 'https://patchwiki.biligame.com/images/palworld/4/47/2967nrjhyk6371wbcn2qigj85fg7fhb.png' },
    { id: 14, name: '壺小象', attribute: ['水屬性'], workCompatibility: ['澆水'], image: 'https://patchwiki.biligame.com/images/palworld/f/f6/iev0mwf2mtm8j66togdnosnj11y3vla.png' },
    { id: 15, name: '米露菲', attribute: ['無屬性'], workCompatibility: ['牧場', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/f/f1/7tqhrtm8lj6ieq63a4zcwe16lykptiu.png' },
    { id: 16, name: '草莽豬', attribute: ['地屬性'], workCompatibility: ['採礦'], image: 'https://patchwiki.biligame.com/images/palworld/3/36/6hzsitomv0l1r0t2hyj2y8bfmejyfyw.png' },
    { id: 17, name: '啼卡爾', attribute: ['暗屬性'], workCompatibility: ['採集'], image: 'https://patchwiki.biligame.com/images/palworld/2/20/1q4t0o8730w22wh1x048zc1aesdgrtk.png' },
    { id: 18, name: '瞅什魔', attribute: ['暗屬性'], workCompatibility: ['手作', '搬運', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/e/e5/cxqrwgkj46xh1r9rziyle78k4vnq8ra.png' },
    { id: 19, name: '遁地鼠', attribute: ['地屬性'], workCompatibility: ['手作', '搬運', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/5/5a/fi9juc5cxqtrify6vqa60j60xdvzm5w.png' },
    { id: 20, name: '寐魔', attribute: ['暗屬性'], workCompatibility: ['牧場'], image: 'https://patchwiki.biligame.com/images/palworld/8/86/s2mqc23613u2cq3vb93lq5mthc523k9.png' },
    { id: 21, name: '獵狼', attribute: ['無屬性'], workCompatibility: ['採集'], image: 'https://patchwiki.biligame.com/images/palworld/2/24/hzkq81pmmgzxxx1zhhspj6t0y1a7pka.png' },
    { id: 22, name: '喵絲特', attribute: ['暗屬性'], workCompatibility: ['牧場'], image: 'https://patchwiki.biligame.com/images/palworld/5/5a/fi9juc5cxqtrify6vqa60j60xdvzm5w.png' },
    { id: 23, name: '露娜蒂', attribute: ['暗屬性'], workCompatibility: ['採集'], image: 'https://patchwiki.biligame.com/images/palworld/3/3c/rlksv4vnwdtjkigclu6w90gcmgv3zkh.png' },
    { id: 24, name: '勾魂魷', attribute: ['暗屬性'], workCompatibility: ['搬運', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/5/51/gy3czfk0xm48csrr9aihe976w94ki0f.png' },
    { id: 25, name: '波娜兔', attribute: ['草屬性'], workCompatibility: ['製藥', '手工作業', '搬運', '播種', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/0/08/jfqkn2ma0dnelws0kk6tfsf182rbb4s.png' },
    { id: 26, name: '魯米兒', attribute: ['水屬性'], workCompatibility: ['搬運', '澆水'], image: 'https://patchwiki.biligame.com/images/palworld/9/97/dzkkwxtcne7o06dhtgcsl072tatyh2q.png' },
    { id: 27, name: '荊棘魔仙', attribute: ['草屬性'], workCompatibility: ['製藥', '手工作業', '搬運', '播種', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/5/58/tgaf8n1upiqa74x30z7fghd7jifnk0k.png' },
    { id: 28, name: '炸蛋鳥', attribute: ['無屬性'], workCompatibility: ['採集'], image: 'https://patchwiki.biligame.com/images/palworld/8/87/3r6pq3irhfzdka2glab19tcwk0lwiak.png' },
    { id: 29, name: '吊縛靈', attribute: ['地屬性'], workCompatibility: ['手作', '搬運', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/6/63/fkrqy48y9rs05n14ldqvuxrywrmrvng.png' },
    { id: 30, name: '波霸牛', attribute: ['無屬性'], workCompatibility: ['牧場'], image: 'https://patchwiki.biligame.com/images/palworld/e/eb/ejyvn911pajgojdaoxikrlo3lht2g4t.png' },
    { id: 31, name: '鯊魚小子', attribute: ['水屬性'], workCompatibility: ['手作', '搬運', '澆水'], image: 'https://patchwiki.biligame.com/images/palworld/b/b0/jeicz8sltkmywotigtzsujmp2efnsdf.png' },
    { id: 32, name: '紅小鯊', attribute: ['火屬性'], workCompatibility: ['手作', '搬運', '生火'], image: 'https://patchwiki.biligame.com/images/palworld/b/bd/5eghsgqhpvj7cxh5cqbl9qt4lr4rrgt.png' },
    { id: 33, name: '葉胖達', attribute: ['草屬性'], workCompatibility: ['伐木', '手作', '搬運', '播種'], image: 'https://patchwiki.biligame.com/images/palworld/e/e7/m4ju506cwyyz4ugnj61gu4ppzp8ow9z.png' },
    { id: 34, name: '雷胖達', attribute: ['雷屬性'], workCompatibility: ['伐木', '發電', '手作', '搬運'], image: 'https://patchwiki.biligame.com/images/palworld/f/fc/bzrx52vz6dqwsgps86r96i4798yjcoa.png' },
    { id: 35, name: '炎魔羊', attribute: ['火屬性', '暗屬性'], workCompatibility: ['手工作業', '搬運', '生火', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/1/18/01shumdupvrvrsxno80ktqpj9w9m1c0.png' },
    { id: 36, name: '灌木羊', attribute: ['冰屬性', '龍屬性'], workCompatibility: ['播種', '牧場'], image: 'https://patchwiki.biligame.com/images/palworld/e/e7/m4ju506cwyyz4ugnj61gu4ppzp8ow9z.png' },
    { id: 37, name: '疾旋鼬', attribute: ['草屬性'], workCompatibility: ['冷卻', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/8/89/oksweug0lsv49m1xsh0pcyzyd9kdh0n.png' },
    { id: 38, name: '紫霞鹿', attribute: ['無屬性'], workCompatibility: ['伐木'], image: 'https://patchwiki.biligame.com/images/palworld/6/6a/sihn05s9wv3c2b1byobp7d0p7v6f2kp.png' },
    { id: 39, name: '祇岳鹿', attribute: ['地屬性'], workCompatibility: ['伐木'], image: 'https://patchwiki.biligame.com/images/palworld/f/f2/p3eshlmfy9m1p9ob2j7b6i3qnr94va5.png' },
    { id: 40, name: '姬小兔', attribute: ['草屬性'], workCompatibility: ['手作', '搬運', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/8/8c/jjdgb5st1jpqod5quy24jqj7ns6ae7t.png' },
    { id: 41, name: '花冠龍', attribute: ['草屬性', '龍屬性'], workCompatibility: ['伐木', '播種'], image: 'https://patchwiki.biligame.com/images/palworld/d/d2/qd9g7k7imue09no12s203besmo4rwke.png' },
    { id: 42, name: '幻悅蝶', attribute: ['草屬性'], workCompatibility: ['製藥', '播種'], image: 'https://patchwiki.biligame.com/images/palworld/8/89/5vziq4cct5n1u7caj8tkxl096lcj7u3.png' },
    { id: 43, name: '趴趴鯰', attribute: ['地屬性'], workCompatibility: ['搬運', '澆水', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/b/b4/1p9zozu9bq237tmmezgrcnf8wlfsr5h.png' },
    { id: 44, name: '獄焰王', attribute: ['火屬性'], workCompatibility: ['伐木', '生火'], image: 'https://patchwiki.biligame.com/images/palworld/3/38/pjlalf0sok22oxfbsrfdnfbole8au22.png' },
    { id: 45, name: '龐克蜥', attribute: ['暗屬性'], workCompatibility: ['手作', '搬運', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/1/1e/bbgj2aijeyy0sl0v8m1jg0f1l0ryi8e.png' },
    { id: 46, name: '姬小兔', attribute: ['無屬性'], workCompatibility: ['手作', '搬運', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/5/58/9dwix6l79zd9b7h6a83okzyyveuaava.png' },
    { id: 47, name: '君王美露帕', attribute: ['無屬性'], workCompatibility: ['伐木'], image: 'https://patchwiki.biligame.com/images/palworld/8/8c/jjdgb5st1jpqod5quy24jqj7ns6ae7t.png' },
    { id: 48, name: '雲海鹿', attribute: ['無屬性'], workCompatibility: ['手作', '搬運', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/3/3e/kndyjr5cu08c8loi8nocat45kbsgp4p.png' },
    { id: 49, name: '熱血蜥', attribute: ['火屬性'], workCompatibility: ['手作', '搬運', '生火', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/8/8a/6yf95m7mtltav6atgiuum54342uzh68.png' },
    { id: 50, name: '朱雀', attribute: ['火屬性'], workCompatibility: ['生火'], image: 'https://patchwiki.biligame.com/images/palworld/c/c5/p6pa9r348qzznttbwh54ge0pjvxt19z.png' },
    { id: 51, name: '天擒鳥', attribute: ['無屬性'], workCompatibility: ['採集'], image: 'https://patchwiki.biligame.com/images/palworld/b/b9/bl7n5jnxwrkj6ziw7pf1fvj699d1f5e.png', },
    { id: 52, name: '暴電熊', attribute: ['雷屬性'], workCompatibility: ['伐木', '發電', '手作', '搬運'], image: 'https://patchwiki.biligame.com/images/palworld/5/52/2202dwrzomkem444rd328ttao0lfg87.png' },
    { id: 53, name: '鐵拳猿', attribute: ['無屬性'], workCompatibility: ['伐木', '手作', '搬運'], image: 'https://patchwiki.biligame.com/images/palworld/b/b6/let6npg40lybh1e8ylhoqpnczk5mch2.png' },
    { id: 54, name: '喚冬獸', attribute: ['冰屬性'], workCompatibility: ['冷卻'], image: 'https://patchwiki.biligame.com/images/palworld/c/cc/mh61nrlb7bfnoq2sgv0i7i3xku39bzq.png' },
    { id: 55, name: '空渦龍', attribute: ['火屬性'], workCompatibility: ['採集'], image: 'https://patchwiki.biligame.com/images/palworld/5/5a/p4cadb84u8ina4jw9m6fwz8xemircsm.png' },
    { id: 56, name: '聖光騎士', attribute: ['無屬性'], workCompatibility: ['伐木', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/a/a4/ei70052cg0m93ragr1udk3jrgcr0som.png' },
    { id: 57, name: '清雀', attribute: ['水屬性'], workCompatibility: ['澆水'], image: 'https://patchwiki.biligame.com/images/palworld/c/c1/4xyx9odj7ia1ody0ptwvdwog6eg08tv.png' },
    { id: 58, name: '阿努比斯', attribute: ['地屬性'], workCompatibility: ['手作', '搬運', '採礦'], image: 'https://patchwiki.biligame.com/images/palworld/c/c7/2qps5jo0lgglea160w5bcg02zj6t1m0.png' },
    { id: 59, name: '天羽龍', attribute: ['龍屬性'], workCompatibility: ['手作', '搬運', '採集'], image: 'https://patchwiki.biligame.com/images/palworld/2/26/tiw2e7rlve8flzlx3083cwotbup3nrp.png' },

  ]);

  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [selectedWorkCompatibilities, setSelectedWorkCompatibilities] = useState([]);

  const handleSortById = () => {
    const sortedCharacters = [...characters].sort((a, b) => {
      return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
    });
    setCharacters(sortedCharacters);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleToggleAttribute = (attribute) => {
    setSelectedAttributes((prevSelected) =>
      prevSelected.includes(attribute)
        ? prevSelected.filter((attr) => attr !== attribute)
        : [...prevSelected, attribute]
    );
  };

  const handleToggleWorkCompatibility = (work) => {
    setSelectedWorkCompatibilities((prevSelected) =>
      prevSelected.includes(work)
        ? prevSelected.filter((w) => w !== work)
        : [...prevSelected, work]
    );
  };

  const filteredCharacters = characters.filter((character) => {
    // 檢查是否有屬性符合選擇的條件
    const hasMatchingAttributes =
      selectedAttributes.length === 0 ||
      selectedAttributes.some((attribute) => character.attribute.includes(attribute));

    // 檢查是否有工作適應性符合選擇的條件
    const hasMatchingWorkCompatibility =
      selectedWorkCompatibilities.length === 0 ||
      selectedWorkCompatibilities.some((work) =>
        character.workCompatibility.includes(work)
      );

    return hasMatchingAttributes && hasMatchingWorkCompatibility;
  });

  return (
    <div className="app-container">
      <h1 className="custom-title text-center my-4">帕魯圖鑑</h1>
      <div className="sorting-buttons">
        <button onClick={handleSortById}>
          {sortOrder === 'asc' ? 'ID 小到大' : 'ID 大到小'}
        </button>

        <div>
          <label>屬性篩選：</label>
          {['暗屬性', '水屬性', '火屬性', '無屬性', '冰屬性', '草屬性', '地屬性', '雷屬性', '龍屬性'].map((attribute) => (
            <button
              key={attribute}
              onClick={() => handleToggleAttribute(attribute)}
              style={{
                backgroundColor: selectedAttributes.includes(attribute) ? 'lightblue' : ''
              }}
            >
              {attribute}屬性
            </button>
          ))}
        </div>

        <div>
          <label>工作適應性篩選：</label>
          {['搬運', '採集', '採礦', '澆水', '生火', '播種', '牧場', '發電', '伐木', '手作', '冷卻', '製藥'].map((work) => (
            <button
              key={work}
              onClick={() => handleToggleWorkCompatibility(work)}
              style={{
                backgroundColor: selectedWorkCompatibilities.includes(work) ? 'lightgreen' : ''
              }}
            >
              {work}
            </button>
          ))}
        </div>
      </div>

      <CharacterList characters={filteredCharacters} onCharacterClick={setSelectedCharacter} />

      {selectedCharacter && (
        <CharacterDetail character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
}

export default App;