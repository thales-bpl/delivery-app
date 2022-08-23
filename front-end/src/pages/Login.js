import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fetchToken from '../api/fetchToken';
import rockGlass from '../images/rockGlass.svg';
import getLocalStorage from '../services/getLocalStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFailed, setIsFailed] = useState(false);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  useEffect(() => {
    const minPassSize = 6;
    const testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (testEmail.test(email) && password.length >= minPassSize) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    const userIsLogged = getLocalStorage('user');
    if (userIsLogged) {
      navigate('/customer/products');
    }
  }, [email, password]);

  const onClick = () => {
    const params = {
      endpoint: '/login',
      body: { email, password },
      setIsFailed,
      navigate,
    };
    fetchToken(params);
  };

  return (
    <div className="login">
      <object
        className="logo"
        type="image/svg+xml"
        data={ rockGlass }
        alt="logo"
      >
        Delivery 23
      </object>
      <input
        type="email"
        data-testid="common_login__input-email"
        placeholder="email@trybeer.com.br"
        onChange={ handleEmail }
      />
      <input
        type="password"
        name="password"
        data-testid="common_login__input-password"
        placeholder="******"
        onChange={ handlePassword }
      />
      <button
        type="submit"
        data-testid="common_login__button-login"
        disabled={ isDisabled }
        onClick={ () => onClick() }
      >
        Login
      </button>
      <Link to="/register">
        <button type="button" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </Link>
      { isFailed && (
        <span data-testid="common_login__element-invalid-email">
          Email ou senha incorreta
        </span>
      )}
    </div>
  );
}
