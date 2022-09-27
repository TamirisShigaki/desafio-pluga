import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Cards from '../components/Cards';
import Search from '../components/Search';
import ModalCard from '../components/ModalCard';
import api from '../services/API';
import '../styles/Home.css';

// Modal.setAppElement('#root');

function Home() {
  const [search, setSearch] = useState('');
  const [tools, setTools] = useState([]);
  const [filter, setFilter] = useState([]);
  const [upPage, setUpPage] = useState(0);
  const [endPage, setEndPage] = useState(11);
  const [mIsOpen, setMIsOpen] = useState(false);

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

  const modalOpen = (obj) => {

    const lStorage = JSON.parse(localStorage.getItem('tools')) || [];

    if (lStorage.length < 4) {
      const newTools = [obj, ...lStorage];
      localStorage.setItem('tools', JSON.stringify(newTools));
    } else {
      const newTools = [obj, ...lStorage.slice(0, 3)];
      localStorage.setItem('tools', JSON.stringify(newTools));
    }

    setMIsOpen(true);
  }

  const modalClose = () => {
    setMIsOpen(false);
  }

  return (
    <div>
        <Search
        state={search}
        callback={handleChange}
        />
        <div className="home-container">
          {
            tools.length ? filter
            .filter((_element, index) => index >= upPage && index <= endPage).map(({ app_id, name, color, icon, link }) => (
              <Cards
                key={app_id}
                name={name}
                color={color}
                icon={icon}
                link={link}
                open={() => modalOpen({
                  app_id, name, color, icon, link,
                })}
              />
            )) : <span>Carregando...</span> }
        </div>

      <Modal
        isOpen={mIsOpen}
        onRequestClose={() => modalClose()}
        overlayClassName="modal-overlay"
        className="home-modal"
      >
        <ModalCard />
        <button className="home-modal-btn" type="button" onClick={modalClose}>Fechar</button>
      </Modal>

      <div className="home-btn">
        <button className="home-btn-back" type="button" onClick={backPage} disabled={upPage <= 0}>
          <span>Voltar</span>
        </button>

        <button className="home-btn-next" type="button" onClick={nextPage} disabled={endPage > tools.length - 1}>
          <span>Proxima</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
