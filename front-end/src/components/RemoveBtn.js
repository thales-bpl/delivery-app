import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MainContext from '../store/Context';

export default function RemoveBtn({ id }) {
  const { productsCart, setProductsCart } = useContext(MainContext);

  const handleClick = () => {
    const updateCart = productsCart.filter((product) => product.id !== id && product);
    setProductsCart(updateCart);
    console.log(updateCart, id);
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      X
    </button>
  );
}

RemoveBtn.propTypes = {
  id: PropTypes.number.isRequired,
};
