import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchToken = async (dataTest) => {
  const { endpoint, body, setUser, setIsFailed, navigate } = dataTest;
  await api.post(endpoint, body)
    .then(({ data }) => {
      console.log(data);
      setUser(data);
      setIsFailed(false);
      localStorage.setItem('user', JSON.stringify(data.token));
      navigate('/customer/products');
    })
    .catch(() => {
      setIsFailed(true);
    });
  return data;
};

export default fetchToken;
