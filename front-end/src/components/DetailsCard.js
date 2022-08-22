import React from 'react';
import PropTypes from 'prop-types';

export default function OrderTableData({
  id,
  name,
  quantity,
  price,
  subtotal,
  rmButton,
}) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        { id + 1 }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${id}` }
      >
        { name }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
      >
        { quantity }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      >
        { price }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        { subtotal }
      </td>
      { rmButton && (
        <td
          data-testid={ `customer_checkout__element-order-table-remove-${id}` }
        >
          <button type="button" onClick={ () => { removeProduct(); } }>Remover</button>
        </td>
      ) }
    </tr>
  );
}

OrderTableData.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  rmButton: PropTypes.bool.isRequired,
};
