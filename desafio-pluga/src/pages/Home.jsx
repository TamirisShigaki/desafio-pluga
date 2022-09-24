import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import api from '../services/api';

function Home() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const [upPage, setUpPage] = useState(0);
  const [endPage, setEndPage] = useState(11);

  useEffect(() => {
   api.get()
   .then((response) => setCards(response.data))
   .catch((err) => {
    console.error("error" + err);
   });
  }, []);

  const handleChange = ({target}) => {
    setSearch(target.value);
  }

  const nextPage = () => {
    setUpPage(upPage + 12);
    setEndPage(endPage + 12);
  }

  const backPage = () => {
    setUpPage(upPage - 12);
    setEndPage(endPage - 12);
  }
  return (
    <div>
      <div>
        <Search
        state={search}
        onChange={handleChange}
        />
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

      <div>
        <button type="button" onClick={backPage}>
          <span>Voltar</span>
        </button>

        <button type="button" onClick={nextPage}>
          <span>Proxima</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
