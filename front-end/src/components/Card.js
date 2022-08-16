import PropTypes from 'prop-types';
import React, { useState } from 'react';

const cervejaBugada = require('../images/antarctica_pilsen_300ml.jpg');

export default function CardProduct({ index, price, name }) {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (event) => {
    if (event.target.value <= 0) {
      setQuantity(0);
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

  return (
    <div>
      <span data-testid={ `customer_products__element-card-price-${index}` }>
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
};
