import React from 'react';

export default function Navbar() {
  return (
    <nav>
      Navbar
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        products
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        orders
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Perfil
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        quit
      </button>
    </nav>
  );
}
