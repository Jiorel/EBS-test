import React from 'react';
import { Route } from 'react-router-dom';
import { ContextProvider } from './contexts';
import { HomePage, CartPage } from './pages';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={CartPage} />
    </ContextProvider>
  );
};

export default App;
