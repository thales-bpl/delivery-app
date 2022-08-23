import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const updateOrder = async (endpoint, header, setOrder) => {
  await api.put(endpoint, header)
    .then(({ data }) => setOrder(data));
};

export default updateOrder;
