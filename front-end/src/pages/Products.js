import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../api/fetchProducts';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import setLocalStorage from '../services/setLocalStorage';
import CarContext from '../store/Car.context';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(true);
  // const [checkout, setCheckout] = useState([]);
  const [showTotalPrice, setShowTotalPrice] = useState(0);
  const { cart } = useContext(CarContext);

  const showItens = [];

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
            price={ price.toString() }
            urlImage={ urlImage }
            name={ name }
            showItens={ showItens }
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
          onClick={ () => setLocalStorage('productsCart', cart) }
        >
          Ver carrinho: R$
          {
            cart.length === 0 ? '0,00' : showTotalPrice
          }
        </button>
      </Link>
    </>
  );
}
