import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../store/Context';
import { createSale } from '../api/createSale';

export default function FinishOrderBtn() {
  const navigate = useNavigate();
  const { productsCart } = useContext(MainContext);

  const handleClick = async () => {
    await createSale(productsCart)
      .then(navigate(`/customer/orders/${id}`));
  };

  return (
    <button
      type="button"
      className="finish_order_btn"
      onClick={ handleClick }
    >
      Finalizar Pedido
    </button>
  );
}
