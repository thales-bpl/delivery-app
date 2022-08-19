import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { getSaleById } from '../api/salesRequest';
import THeadOrder from '../components/Table/THeadOrder';
import TableHeader from '../components/Table/TableHeader';
import TableBody from '../components/Table/TableBody';

export default function OrderDetails() {
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [saleTotal, setSaleTotal] = useState('0');

  const getOrderDetails = useCallback(async () => {
    const { products: soldPdc, ...sale } = await getSaleById(1);
    setOrder(sale); setProducts(soldPdc);
  }, []);

  const calculateTotal = useCallback(() => {
    let total = 0;
    products.forEach(({ quantity, price }) => {
      total += quantity * price;
    });
    setSaleTotal(total.toFixed(2).replace('.', ','));
  }, [products]);

  useEffect(() => {
    getOrderDetails();
  }, [getOrderDetails]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  return (
    <>
      <Navbar />
      <h2>Detalhes do Pedido</h2>
      <table className="checkout_produts_section">
        <THeadOrder order={ order } />
        <TableHeader />
        <TableBody userRole="customer" page="order_details" products={ products } />
      </table>
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        {`R$ ${saleTotal}`}
      </span>
    </>
  );
}
