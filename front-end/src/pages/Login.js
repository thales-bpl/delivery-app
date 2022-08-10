import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);
  // const [isFailed, setIsFailed] = useState(false);
  const isFailed = false;

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
    }
  }, [email, password]);

  return (
    <div className="login">
      <input
        type="email"
        name="email"
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
        onClick={() => console.log('logou')}
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
