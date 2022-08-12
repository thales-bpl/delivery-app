import React, { useState, useEffect } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  // const [user, setUser] = useState(false);
  const user = false;

  const handleName = ({ target: { value } }) => {
    setName(value);
  };

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  useEffect(() => {
    const minPassSize = 6;
    const maxNameSize = 12;
    const testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (testEmail.test(email)
      && password.length >= minPassSize
      && name.length <= maxNameSize) {
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
        onClick={ () => console.log('criou') }
      >
        CADASTRAR
      </button>
      {user && (
        <span
          data-testid="common_register__element-invalid_register"
        >
          Usuario já existe
        </span>
      )}
    </div>
  );
}
