import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function SellerOrders() {
  // - 48: seller_orders__element-order-id-<id>
  // - 49: seller_orders__element-delivery-status-<id>
  // - 50: seller_orders__element-order-date-<id>
  // - 51: seller_orders__element-card-price-<id>
  // - 52: seller_orders__element-card-address-<id></id>

  const mockedSellerOrder = [{
    id: 0,
    deliveryStatus: 'PRONTO',
    orderDate: '08/04/21',
    Price: 23.80,
    Adress: 'Rua cê senta em tres',
  },
  {
    id: 1,
    deliveryStatus: 'PREPARANDO',
    orderDate: '08/04/21',
    Price: 14.20,
    Adress: 'Rua cê senta em quatro',
  },
  {
    id: 2,
    deliveryStatus: 'ENTREGUE',
    orderDate: '07/04/21',
    Price: 28.46,
    Adress: 'Rua cê senta em dois',
  },
  ];

  return (
    <div>
      <Navbar />
      {mockedSellerOrder.map((order) => {
        console.log(order);

        const empStr = '';
        const calc = order.id + 1;
        const str = empStr + calc;
        const pad = '0000';
        const NumPedido = pad.substring(0, pad.length - str.length) + str;

        // https://stackoverflow.com/questions/5366849/convert-1-to-0001-in-javascript

        return (
          <Link
            key={ order.id }
            data-testid={ `seller_orders__element-order-id-${order.id}` }
            to={ `/seller/orders/${order.id}` }
          >
            <span>
              {NumPedido}
            </span>

            <p
              data-testid={ `seller_orders__element-delivery-status-${order.id}` }
            >
              { order.deliveryStatus }
            </p>
            <p
              data-testid={ `seller_orders__element-order-date-${order.id}` }
            >
              { order.orderDate }
            </p>
            <span
              data-testid={ `seller_orders__element-card-price-${order.id}` }
            >
              { order.Price.toFixed(2).replace('.', ',') }
            </span>
            <p
              data-testid={ `seller_orders__element-card-address-${order.id}` }
            >
              { order.Adress }
            </p>
          </Link>
        );
      })}

    </div>
  );
}
