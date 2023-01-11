import React from 'react';
import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import ClientOrder from './pages/ClientOrder';
import Checkout from './pages/checkout';
import OrderDetails from './pages/OrderDetails';
import SellerOrders from './pages/SellerOrders';
import Navbar from './components/Navbar';
import SellerOrderDetails from './pages/SellerOrderDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/orders" element={ <ClientOrder /> } />
        <Route exact path="customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders/:id" element={ <OrderDetails /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
        <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />

        <Route exact path="/admin/manage" element={ <Navbar /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
