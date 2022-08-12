import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchToken = async (endpoint, body, setUser, setIsFailed) => {
  await api.post(endpoint, body)
    .then(({ data }) => {
      console.log(data);
      setUser(data);
      setIsFailed(false);
      localStorage.setItem('user', JSON.stringify(data.token));
    })
    .catch(() => {
      setIsFailed(true);
    });
  return data;
};

export default fetchToken;
