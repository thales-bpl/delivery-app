import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchProducts = async (setProducts) => {
  const endpoint = '/products';

  await api.get(endpoint)
    .then((data) => {
      console.log(data);
      setProducts(data);
      // console.log(data);
      // localStorage.setItem('user', JSON.stringify(data.token));
    })
    .catch((err) => {
      setProducts(['erro:', err.message]);
    });
};

export default fetchProducts;
