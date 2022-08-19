import PropTypes from 'prop-types';
// import { getSellerById } from '../../api/salesRequest';

export default function THeadOrder({ order }) {
  const handleClick = () => {
    console.log('funciona');
  };

  return (
    <thead className="table_head_order">
      <tr>
        <th
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO ${order.id}`}
        </th>

        <th
          data-testid={ `customer_order_details__
          element-order-details-label-seller-name` }
        >
          P. Vendedora: Fulana
          {/* `P. Vendedora: ${getSellerById(order.sellerId)} ` */}
        </th>

        { /* Back tem que fazer uma rota /seller/:id */ }
        <th
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {order.saleDate}
        </th>

        <th
          data-testid={ `customer_order_details__
          element-order-details-label-delivery-status` }
        >
          {order.status}
        </th>

        <th>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            onClick={ handleClick }
          >
            Marcar como entregue
          </button>
        </th>
      </tr>
    </thead>
  );
}

THeadOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    sellerId: PropTypes.number,
  }).isRequired,
};
