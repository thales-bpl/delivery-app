import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import CarContext from './Car.context';

function CarProvider({ children }) {
  const [cart, setCart] = useState([]);
  const defaultContext = useMemo(() => ({ cart, setCart }), [cart]);
  return (
    <CarContext.Provider value={ defaultContext }>
      { children }
    </CarContext.Provider>
  );
}

CarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarProvider;
