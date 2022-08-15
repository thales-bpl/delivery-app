import React, { useEffect, useState } from 'react';
import fetchProducts from '../api/fetchProducts';
import Navbar from '../components/Navbar';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <>
      <Navbar />
      {products}
    </>
  );
}
