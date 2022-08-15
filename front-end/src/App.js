import React from 'react';
import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Checkout from './pages/checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <div /> } />
        <Route exact path="customer/checkout" element={ <Checkout /> } />
        <Route exact path="`/customer/orders/:id" element={ <div /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
