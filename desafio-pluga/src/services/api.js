import axios from 'axios';

const URL = 'https://pluga.co/ferramentas_search.json';

const api = () => axios.get(URL);

export default api;