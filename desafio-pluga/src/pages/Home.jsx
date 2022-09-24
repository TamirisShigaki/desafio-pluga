import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import api from '../services/api';

function Home() {
  const [cards, setCards] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
   api.get()
   .then((response) => setCards(response.data))
   .catch((err) => {
    console.error("error" + err);
   });
  }, []);

  return (
    <div>
      {
        cards.map(({ app_id, name, color, icon, link }) => (
          <Cards
            key={app_id}
            name={name}
            color={color}
            icon={icon}
            link={link}
          />
        ))
      }
    </div>
  );
}

export default Home;
