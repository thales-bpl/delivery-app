import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getLocalStorage from '../services/getLocalStorage';

export default function Navbar() {
  // const { name: userName, role } = JSON.parse(localStorage.getItem('user'));

  const [userStored, setUserStored] = useState({
    userName: '',
    role: '',
  });

  const navigate = useNavigate();

  const getUser = getLocalStorage('user');

  useEffect(() => {
    if (!getUser) {
      navigate('/login');
      console.log('voltou para login');
    }

    if (getUser) {
      const { name, role } = getUser;
      setUserStored({ userName: name, role });
      console.log(`fez o login de ${role}`);

      if (role === 'customer') {
        navigate('/customer/products');
      }

      if (role === 'seller') {
        navigate('/seller/orders');
      }

      if (role === 'administrator') {
        navigate('/admin/manage');
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const customerNavbar = (
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
        onClick={ () => navigate('/customer/orders') }
      >
        orders
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
        // onClick={ () => navigate('/profile') implementar}
      >
        { userStored.userName }
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

  const sellerNavbar = (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        PEDIDOS
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userStored.userName }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </nav>
  );

  const adminNavbar = (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        GERENCIAR USUÁRIOS
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { `${userStored.userName} Admin`}
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </nav>
  );

  // se o usuário for cliente, renderiza o navbar de cliente
  if (userStored.role === 'customer') {
    return customerNavbar;
  }

  // se usuário for vendedor, renderiza o navbar de vendedor
  if (userStored.role === 'seller') {
    return sellerNavbar;
  }

  // se usuário for adm, renderiza o navbar de adm
  if (userStored.role === 'administrator') {
    return adminNavbar;
  }

  // se não ..Loading..
  return (<>...Loading...</>);
}
