import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchToken = async (dataTest) => {
  const {
    endpoint,
    body,
    setIsFailed,
    navigate,
  } = dataTest;

  await api.post(endpoint, body)
    .then(({ data }) => {
      setIsFailed(false);
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));

      if (data.role === 'customer') {
        navigate('/customer/products');
      }
      if (data.role === 'seller') {
        navigate('/seller/orders');
      }
      if (data.role === 'admin') {
        navigate('/admin/manage');
      }
      if (!data.role) {
        navigate('/login');
      }
    })
    .catch(() => {
      setIsFailed(true);
    });
};

export default fetchToken;
