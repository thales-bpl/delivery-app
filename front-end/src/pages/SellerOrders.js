import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSales } from '../api/sellers/getSales';
import Navbar from '../components/Navbar';
import convertToMoreZeros from '../services/convertToMoreZeros';

export default function SellerOrders() {
  const [sale, setSale] = useState([]);

  useEffect(() => {
    getSales(setSale);
  }, []);

  return (
    <div>
      <Navbar />
      {sale.map((order) => (
        <Link
          key={ order.id }
          data-testid={ `seller_orders__element-order-id-${order.id}` }
          to={ `/seller/orders/${order.id}` }
        >
          <h2>
            {convertToMoreZeros(order.id)}
          </h2>

          <p
            data-testid={ `seller_orders__element-delivery-status-${order.id}` }
          >
            { order.status }
          </p>
          <p
            data-testid={ `seller_orders__element-order-date-${order.id}` }
          >
            { order.saleDate }
          </p>
          <p
            data-testid={ `seller_orders__element-card-price-${order.id}` }
          >
            { order.totalPrice.toFixed(2).replace('.', ',') }
          </p>
          <p
            data-testid={ `seller_orders__element-card-address-${order.id}` }
          >
            { order.deliveryAddress }
          </p>
        </Link>
      ))}

    </div>
  );
}
