import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Navbar from '../components/Navbar';
import TableBody from '../components/Table/TableBody';
import updateOrder from '../api/updateOrder';
import requestSalesSeller from '../api/requestSalesSeller';

export default function SellerOrderDetails() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const testId = 'seller_order_details__element-order-details-label-delivery-status';

  const headers = { headers: {
    Authorization: token,
  } };

  useEffect(() => {
    async function fetchData() {
      await requestSalesSeller(`/sale/${id}`, headers, setOrder);
    }
    fetchData();
  }, []);

  const getOrderReady = () => {
    updateOrder(`/sale/${id}`, { status: 'Preparando' }, headers);
    const cloneOrder = order;
    setOrder({ ...cloneOrder, status: 'Preparando' });
  };

  const dispatchOrder = () => {
    updateOrder(`/sale/${id}`, { status: 'Em Trânsito' }, headers);
    const cloneOrder = order;
    setOrder({ ...cloneOrder, status: 'Em Trânsito' });
  };

  return (
    <div>
      <Navbar />
      <h1>Detalhes do Pedido</h1>
      <div>
        <div>
          <span data-testid="seller_order_details__element-order-details-label-order-id">
            PEDIDO
            {order.id}
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
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
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            onClick={ getOrderReady }
            disabled={ !(order.status === 'Pendente' || order.status === undefined) }
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            onClick={ dispatchOrder }
            disabled={ !(order.status === 'Preparando' || order.status === undefined) }
          >
            SAIU PARA ENTREGA
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
          { order.products && order.products.map((prod, index) => (
            <TableBody
              key={ prod.name }
              id={ index }
              name={ prod.name }
              quantity={ prod.SaleProduct.quantity }
              price={ (prod.price)/* .replace('.', ',') */ }
              subtotal={
                (prod.price * prod.SaleProduct.quantity)
                  .toFixed(2)
                  .replace('.', ',')
              }
              rmButton={ false }
            />)) }
        </table>
        <div data-testid="seller_order_details__element-order-total-price">
          {
            order.totalPrice && (order.totalPrice).replace('.', ',')
          }
        </div>
      </div>

    </div>
  );
}
