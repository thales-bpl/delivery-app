import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../store/Context';
// import { createSale } from '../api/createSale';
import getLocalStorage from '../services/getLocalStorage';

export default function FinishOrderBtn() {
  const navigate = useNavigate();
  const {
    productsCart,
    totalPrice,
    selectedSeller,
    adressInput,
    adssNumberInput,
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
      deliveryAdress: adressInput,
      deliveryNumber: adssNumberInput,
      products: salesProducts,
    };
    console.log(payload);
    // await createSale(payload)
    //   .then(navigate(`/customer/orders/${id}`));
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
