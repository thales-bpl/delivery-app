import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import MainContext from './Context';

function MainProvider({ children }) {
  const [showName, setShowName] = useState('');
  const [productsCart, setProductsCart] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');
  const defaultContext = useMemo(() => (
    {
      showName,
      setShowName,
      productsCart,
      setProductsCart,
      selectedSeller,
      setSelectedSeller,
    }
  ), [showName, productsCart, selectedSeller]);

  return (
    <MainContext.Provider value={ defaultContext }>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default MainProvider;
