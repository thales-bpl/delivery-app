import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../api/fetchProducts';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import CarContext from '../store/Car.context';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(true);
  const [showTotalPrice, setShowTotalPrice] = useState(0);
  const { cart } = useContext(CarContext);

  const convertUrlImage = (urlImage) => {
    const urlWithBasePath = urlImage;
    const resultUrl = urlWithBasePath.replace(/^http[s]?:\/\/.+?\//, '');
    return resultUrl;
    // https://stackoverflow.com/questions/11550790/remove-hostname-and-port-from-url-using-regular-expression
  };

  useEffect(() => {
    if (showTotalPrice === '0,00') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [showTotalPrice]);

  useEffect(() => {
    const totalPrice = cart
      .reduce((a, c) => a + Number(c.quantity * c.price), 0)
      .toFixed(2);
    const totalPriceCorrect = totalPrice.replace('.', ',');
    setShowTotalPrice(totalPriceCorrect);
  }, [cart]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <>
      <Navbar />
      { products.map(
        ({ price, url_image: urlImage, name, id }) => (
          <Card
            key={ id }
            index={ id }
            price={ price }
            urlImage={ convertUrlImage(urlImage) }
            name={ name }
          />),
      )}
      <Link
        to="/customer/checkout"
        data-testid="customer_products__checkout-bottom-value"
      >
        <button
          disabled={ disable }
          type="button"
          data-testid="customer_products__button-cart"
        >
          {
            cart.length === 0 ? 0 : showTotalPrice
          }
        </button>
      </Link>
    </>
  );
}
