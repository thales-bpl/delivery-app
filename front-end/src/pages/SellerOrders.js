import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSales } from '../api/sellers/getSales';
import Navbar from '../components/Navbar';

export default function SellerOrders() {
  // - 48: seller_orders__element-order-id-<id>
  // - 49: seller_orders__element-delivery-status-<id>
  // - 50: seller_orders__element-order-date-<id>
  // - 51: seller_orders__element-card-price-<id>
  // - 52: seller_orders__element-card-address-<id></id>

  const [sale, setSale] = useState([]);

  useEffect(() => {
    getSales(setSale);
  }, []);

  return (
    <div>
      <Navbar />
      {sale.map((order) => {
        const empStr = '';
        const str = empStr + order.id;
        const pad = '0000';
        const NumPedido = pad.substring(0, pad.length - str.length) + str;

        // https://stackoverflow.com/questions/5366849/convert-1-to-0001-in-javascript

        return (
          <Link
            key={ order.id }
            data-testid={ `seller_orders__element-order-id-${order.id}` }
            to={ `/seller/orders/${order.id}` }
          >
            <h2>
              {NumPedido}
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
        );
      })}

    </div>
  );
}
