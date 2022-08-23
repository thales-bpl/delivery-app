import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const getSales = (setSale) => {
  const endpoint = '/sale';
  api.get(endpoint)
    .then(({ data }) => {
      console.log(data);
      setSale(data);
    })
    .catch((err) => {
      console.log(err.message);
      setSale([]);
    });
};

export default api;
