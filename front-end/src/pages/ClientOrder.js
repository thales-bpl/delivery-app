import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Navbar';
import fetchAuth from '../api/fetchAuth';
import CustomerOrderCard from '../components/ClientOrderCard';

export default function CustomerOrder() {
  const { token, id } = JSON.parse(localStorage.getItem('user'));
  const [orders, setOrders] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    async function getOrders() {
      try {
        const headers = { headers: { authorization: token } };
        await fetchAuth(`/sale/user/${id}`, headers, setOrders);
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  }, []);

  return (
    <div>
      <Header />
      <div />
      <div>
        { orders.length !== 0 ? orders.map((order) => (
          <CustomerOrderCard
            key={ order.id }
            id={ order.id }
            status={ order.status }
            saleDate={ order.saleDate }
            totalPrice={ order.totalPrice }
          />)) : <span>Você ainda não possui nenhum pedido</span> }
      </div>
    </div>
  );
}
