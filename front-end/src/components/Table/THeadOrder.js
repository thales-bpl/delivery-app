import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { updateSale } from '../../api/salesRequest';
import getLocalStorage from '../../services/getLocalStorage';

export default function THeadOrder({ order, seller, setOrder }) {
  const [role, setRole] = useState('');
  const handleClick = async () => {
    const updateStatus = { status: 'Entregue' };
    const user = getLocalStorage('user');
    const newData = await updateSale(order.id, updateStatus, user.token);
    setOrder(newData);
  };

  useEffect(() => {
    const user = getLocalStorage('user');
    setRole(user.role);
  }, []);

  const IdSellerName = 'customer_order_details__element-order-details-label-seller-name';
  const IdStatus = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <thead className="table_head_order">
      <tr>
        <th
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO ${order.id}`}
        </th>

        <th
          data-testid={ IdSellerName }
        >
          { `P. Vendedora: ${seller.name} ` }
        </th>

        <th
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {order.saleDate}
        </th>

        <th
          data-testid={ IdStatus }
        >
          {order.status}
        </th>

        <th>
          {role === 'Seller'
            ? (
              <button
                type="button"
                disabled={ order.status !== 'Pendente' }
                data-testid="seller_order_details__button-delivery-check"
                onClick={ handleClick }
              >
                Marcar como entregue
              </button>)
            : (
              <button
                type="button"
                disabled
                data-testid="customer_order_details__button-delivery-check"
                onClick={ handleClick }
              >
                Marcar como entregue
              </button>
            )}
        </th>
      </tr>
    </thead>
  );
}

THeadOrder.propTypes = {
  setOrder: PropTypes.func.isRequired,
  seller: PropTypes.instanceOf(Object).isRequired,
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    sellerId: PropTypes.number,
  }).isRequired,
};
