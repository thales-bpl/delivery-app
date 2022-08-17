import React, { useEffect, useState } from 'react';
import Header from '../components/Navbar';
import fetchAuth from '../api/fetchAuth';
import CustomerOrderCard from '../components/ClientOrderCard';

export default function CustomerOrder() {
  const { token, id } = JSON.parse(localStorage.getItem('user'));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const headers = { headers: { authorization: token } };
        const request = await fetchAuth(`/sales/user/${id}`, headers);
        setOrders(request);
        console.log(orders);
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
        { orders.length !== 0 ? orders.map((prod) => (
          <CustomerOrderCard
            key={ prod.id }
            id={ prod.id }
            status={ prod.status }
            saleDate={ prod.saleDate }
            totalPrice={ prod.totalPrice }
          />)) : null }
      </div>
    </div>
  );
}
