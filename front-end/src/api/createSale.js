import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const createSale = async (body) => {
  const endpoint = '/sale';
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
