import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import CarContext from '../store/Car.context';

const cervejaBugada = require('../images/antarctica_pilsen_300ml.jpg');

export default function CardProduct({ index, price, name, showItens }) {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(CarContext);
  const cartProduct = {
    id: index,
    name,
    price,
    quantity: Number(quantity),
    subtotal: (price * quantity).toFixed(2),
  };

  if (cartProduct > 0) {
    showItens.push(cartProduct);
  }

  const handleChange = (event) => {
    if (event.target.value <= 0) {
      setQuantity(null);
    } else {
      setQuantity(event.target.value);
    }
  };

  const addProduct = () => {
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const finalCart = cart.filter((prod) => prod.name !== name)
      .filter((prod) => prod.quantity !== 0);
    if (cartProduct.quantity <= 0) {
      setCart([...finalCart]);
    } else {
      setCart([...finalCart, cartProduct]);
    }
  }, [quantity]);

  return (
    <div>
      <span
        data-testid={
          `[customer_products__element-card-price-${index}][data-testid$='-${index}']`
        }
      >
        { price.replace('.', ',') }
      </span>
      <img
        height="100px"
        width="100px"
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ cervejaBugada }
        alt="Imagem do produto"
      />
      <p data-testid={ `customer_products__element-card-title-${index}` }>
        { name }
      </p>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          onClick={ removeProduct }
        >
          -
        </button>
        <input
          type="number"
          min="0"
          data-testid={ `customer_products__input-card-quantity-${index}` }
          value={ quantity }
          placeholder="0"
          onChange={ (event) => { handleChange(event); } }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${index}` }
          onClick={ addProduct }
        >
          +
        </button>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // urlImage: PropTypes.string.isRequired,
  showItens: PropTypes.instanceOf(Array).isRequired,
};
