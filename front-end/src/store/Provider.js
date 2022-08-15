import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import MainContext from './Context';

function MainProvider({ children }) {
  const [showName, setShowName] = useState('');
  const [productsCart, setProductsCart] = useState('teste context');
  const defaultContext = useMemo(() => (
    { showName, setShowName, productsCart, setProductsCart }
  ), [showName, productsCart]);

  return (
    <MainContext.Provider value={ defaultContext }>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.isRequired,
};

export default MainProvider;
