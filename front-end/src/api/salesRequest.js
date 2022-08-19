import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const apiSellers = async () => {
  const endpoint = 'login/sellers';
  const { data } = await api.get(endpoint);
  return data;
};

export const createSale = async (body, token) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const endpoint = '/sale';
  const { data } = await api.post(endpoint, body, config);
  return data;
};

export const getSaleById = async (id) => {
  const endpoint = `/sale/${id}`;
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
