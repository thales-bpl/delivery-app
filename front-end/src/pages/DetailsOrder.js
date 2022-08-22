import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Navbar from '../components/Navbar';
import OrderTableData from '../components/DetailsCard';
import updateOrder from '../api/updateOrder';
import requestSalesSeller from '../api/requestSalesSeller';

export default function CustomerOrderDetails() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const testId = 'customer_order_details__element-order-details-label-delivery-status';

  const headers = { headers: {
    Authorization: token,
  } };

  useEffect(() => {
    async function fetchData() {
      await requestSalesSeller(`/sales/${id}`, headers, setOrder);
    }
    fetchData();
  }, []);

  const dispatchOrder = () => {
    updateOrder(`/sales/${id}`, { status: 'Entregue' }, headers);
    const cloneOrder = order;
    setOrder({ ...cloneOrder, status: 'Entregue' });
  };

  return (
    <div>
      <Navbar />
      <h1>Detalhes do Pedido</h1>
      <div>
        <div>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            PEDIDO
            {order.id}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vend:
            { order.seller ? order.seller.name : null }
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            Data
            { order.saleDate ? format(Date.parse(order.saleDate), 'dd/MM/yyyy') : null }
          </span>
          <span
            data-testid={ testId }
          >
            {order.status}
          </span>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            onClick={ dispatchOrder }
            disabled={ !(order.status === 'Em Trânsito' || order.status === undefined) }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
          { order.products ? order.products.map((prod, index) => (
            <OrderTableData
              key={ prod.name }
              id={ index }
              name={ prod.name }
              quantity={ prod.SaleProduct.quantity }
              price={ (prod.price).replace('.', ',') }
              subtotal={
                (prod.price * prod.SaleProduct.quantity)
                  .toFixed(2)
                  .replace('.', ',')
              }
              rmButton={ false }
            />)) : null }
        </table>
        <div data-testid="customer_order_details__element-order-total-price">
          {
            order.totalPrice ? (order.totalPrice).replace('.', ',') : null
          }
        </div>
      </div>
    </div>
  );
}
