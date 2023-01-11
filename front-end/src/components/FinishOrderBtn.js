import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import MainContext from '../store/Context';
import { createSale } from '../api/salesRequest';
import getLocalStorage from '../services/getLocalStorage';

export default function FinishOrderBtn({ totalPrice, adressInput, adssNumberInput }) {
  const navigate = useNavigate();
  const {
    productsCart,
    selectedSeller,
  } = useContext(MainContext);

  const handleClick = async () => {
    const { id, token } = getLocalStorage('user');
    if (!id) navigate('/login');
    const salesProducts = productsCart.map((prod) => (
      { productId: prod.id, quantity: prod.quantity }
    ));
    const payload = {
      userId: id,
      sellerId: selectedSeller,
      totalPrice,
      deliveryAddress: adressInput,
      deliveryNumber: adssNumberInput,
      purchasedProducts: salesProducts,
    };
    const { newSaleId } = await createSale(payload, token);
    navigate(`/customer/orders/${newSaleId}`);
  };

  return (
    <button
      data-testid="customer_checkout__button-submit-order"
      type="button"
      className="finish_order_btn"
      onClick={ handleClick }
    >
      Finalizar Pedido
    </button>
  );
}

FinishOrderBtn.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  adressInput: PropTypes.string.isRequired,
  adssNumberInput: PropTypes.string.isRequired,
};
