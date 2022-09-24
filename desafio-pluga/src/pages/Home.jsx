import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import api from '../services/api';

function Home() {
  // const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const [tools, setTools] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  const [upPage, setUpPage] = useState(0);
  const [endPage, setEndPage] = useState(11);

  useEffect(() => {
    async function loadTools() {
      const response = await api();
      setTools(response.data);
      setFilter(response.data);
    }
    loadTools();
  }, []);

  const searchTool = (word) => {
    const newTool = tools
    .filter((value) => (value.name.toLowerCase()
    .includes(word.toLowerCase())));
    setFilter(newTool);
  }

  const handleChange = ({target}) => {
    setSearch(target.value);
    searchTool(target.value);
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
        callback={handleChange}
        />
        {
          tools.length ? filter
          .filter((_element, index) => index >= upPage && index <= endPage).map(({ app_id, name, color, icon, link }) => (
            <Cards
              key={app_id}
              name={name}
              color={color}
              icon={icon}
              link={link}
            />
          )) : <span>Carregando...</span> }
      </div>

      <div>
        <button type="button" onClick={backPage} disabled={upPage <= 0}>
          <span>Voltar</span>
        </button>

        <button type="button" onClick={nextPage} disabled={endPage > tools.length - 1}>
          <span>Proxima</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
