import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { name: userName } = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/customer/products') }
      >
        products
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/customer/orders/:id') }
      >
        orders
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
        // onClick={ () => navigate('/profile') implementar}
      >
        { userName }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        quit
      </button>
    </nav>
  );
}
