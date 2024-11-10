import React, { useState } from 'react';
import Card1 from './card11'; 
import './card.modules.css'
const TariffCards = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tariffs = [
    {
      id: 1,
      title: "безлимитный 300",
      rub: "руб",
      main: "300/мес",
      p: "до 10 Mбит/сек",
      description: "обьем включенного трафика не ограничен",
    },
    {
      id: 2,
      title: "безлимитный 450",
      rub: "руб",
      main: "450/мес",
      p: "до 50 Mбит/сек",
      description: "обьем включенного трафика не ограничен",
    },
    {
      id: 3,
      title: "безлимитный 550",
      rub: "руб",
      main: "550/мес",
      p: "до 100 Mбит/сек",
      description: "обьем включенного трафика не ограничен",
    },
    {
      id: 4,
      title: "безлимитный 1000",
      rub: "руб",
      main: "1000/мес",
      p: "до 200 Mбит/сек",
      description: "обьем включенного трафика не ограничен",
    },
  ];

  return (
    <React.Fragment>
      {tariffs.map((tariff) => (
        <div
          key={tariff.id}
          onClick={() => setSelectedTariff(tariff.id)}
          style={{
            border: selectedTariff === tariff.id ? '2px solid blue' : '1px solid #ccc',
            borderRadius: '5px',
            margin: '10px',
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: selectedTariff === tariff.id ? '#f0f8ff' : '#fff',
          }}
        >
          <Card1 style={{}} {...tariff} />
        </div>
      ))}
      
    </React.Fragment>
  );
};

export default TariffCards;


