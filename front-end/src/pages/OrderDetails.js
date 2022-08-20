import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getSaleById, getSellerById } from '../api/salesRequest';
import THeadOrder from '../components/Table/THeadOrder';
import TableHeader from '../components/Table/TableHeader';
import TableBody from '../components/Table/TableBody';
import formatDate from '../services/formatDate';

export default function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [saleTotal, setSaleTotal] = useState('0');
  const [seller, setSeller] = useState({});

  const getSeller = async (sellerid) => {
    const data = await getSellerById(sellerid);
    setSeller(data);
  };

  const getOrderDetails = useCallback(async () => {
    const { products: soldPdc, ...sale } = await getSaleById(id);
    const formatedDate = formatDate(sale.saleDate);
    setOrder({ ...sale, saleDate: formatedDate }); setProducts(soldPdc);
    getSeller(sale.sellerId);
  }, [id]);

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
        <THeadOrder order={ order } seller={ seller } setOrder={ setOrder } />
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
