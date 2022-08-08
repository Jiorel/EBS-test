import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './CartContext';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <CartProvider>{children}</CartProvider>
    </BrowserRouter>
  );
};

export default ContextProvider;
