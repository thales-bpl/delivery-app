import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchToken = async (dataTest) => {
  const { endpoint, body, setIsFailed, navigate, setUserExists } = dataTest;
  await api.post(endpoint, body)
    .then(({ data }) => {
      setIsFailed(false);
      localStorage.setItem('user', JSON.stringify(data.token));
      setUserExists(false);
      navigate('/customer/products');
    })
    .catch(() => {
      setIsFailed(true);
      setUserExists(true);
    });
  return data;
};

export default fetchToken;
