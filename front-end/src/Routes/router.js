import React from 'react';
import { Route, Routes, Redirect, BrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Redirect from="/" to="/login" />
        <Route path="/login" element={ Login } />
        <Route path="/register" element={ Register } />
      </Routes>
    </BrowserRouter>
  );
}
