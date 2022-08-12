import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchToken from '../api/fetchToken';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  const handleName = ({ target: { value } }) => {
    setName(value);
  };

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const onClick = () => {
    const params = {
      endpoint: '/login/register',
      body: { name, email, password },
      setUserExists,
      navigate,
    };
    fetchToken(params);
  };

  useEffect(() => {
    const minPassSize = 6;
    const minNameSize = 12;
    const testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (testEmail.test(email)
      && password.length >= minPassSize
      && name.length >= minNameSize) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, name]);

  return (
    <div className="container-login">
      <h1>Cadastro</h1>
      Nome
      <input
        type="text"
        data-testid="common_register__input-name"
        placeholder="seu nome"
        onChange={ handleName }
      />
      Email
      <input
        type="email"
        data-testid="common_register__input-email"
        placeholder="email@trybe.com.br"
        onChange={ handleEmail }
      />
      Senha
      <input
        type="password"
        data-testid="common_register__input-password"
        placeholder="******"
        onChange={ handlePassword }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ isDisabled }
        onClick={ () => onClick() }
      >
        CADASTRAR
      </button>
      {userExists && (
        <span
          data-testid="common_register__element-invalid_register"
        >
          Usuario já existe
        </span>
      )}
    </div>
  );
}
