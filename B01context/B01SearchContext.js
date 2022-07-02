import React, { createContext, useState } from 'react';

const B01SearchContext = createContext();

export const B01SearchContextProvider = ({ children }) => {
  const [keyword, onChangeText] = useState('');

  return (
    <B01SearchContext.Provider value={{ keyword, onChangeText }}>
      {children}
    </B01SearchContext.Provider>
  );
};

export default B01SearchContext;
