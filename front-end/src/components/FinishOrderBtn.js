import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import MainContext from '../store/Context';
import { createSale } from '../api/createSale';
import getLocalStorage from '../services/getLocalStorage';

export default function FinishOrderBtn({ totalPrice, adressInput, adssNumberInput }) {
  const navigate = useNavigate();
  const {
    productsCart,
    selectedSeller,
  } = useContext(MainContext);

  const handleClick = async () => {
    const user = getLocalStorage('user');
    if (!user) navigate('/login');
    const salesProducts = productsCart.map((prod) => (
      { productId: prod.id, quantity: prod.quantity }
    ));
    const payload = {
      userId: user.id,
      sellerId: selectedSeller,
      totalPrice,
      deliveryAddress: adressInput,
      deliveryNumber: adssNumberInput,
      products: salesProducts,
    };
    console.log(payload);
    const { newSaleId } = await createSale(payload);
    navigate(`/customer/orders/${newSaleId}`);
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

FinishOrderBtn.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  adressInput: PropTypes.string.isRequired,
  adssNumberInput: PropTypes.string.isRequired,
};

// {
//   "userId": 2,
//   "sellerId": 1,
//   "totalPrice": 14,
//   "deliveryAddress": "Rua do Alfeneiros",
//   "deliveryNumber": 20,
//   "products": [
//     { "product_id": 2, "quantity": 2 },
//     { "product_id": 3, "quantity": 3 }
//   ]
// }
