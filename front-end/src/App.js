import React from 'react';
import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import ClientOrder from './pages/ClientOrder';
import Checkout from './pages/checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/orders/:id" element={ <ClientOrder /> } />
        <Route exact path="customer/checkout" element={ <Checkout /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
