import React, { useMemo, useState } from 'react';
import MainContext from './Context';

/* eslint-disable react/prop-types */
function MainProvider({ children }) {
  const [showName, setShowName] = useState('');
  const defaultContext = useMemo(() => ({ showName, setShowName }), []);
  return (
    <MainContext.Provider value={ defaultContext }>
      { children }
    </MainContext.Provider>
  );
}

export default MainProvider;
