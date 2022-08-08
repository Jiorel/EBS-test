import React, { useEffect, useState, useContext, createContext } from 'react';
import { IProduct } from 'types';

interface ICartProduct extends IProduct {
  quantity: number;
}

interface ICartContextState {
  products: ICartProduct[];
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (productId: number) => void;
}

const CartContext = createContext<ICartContextState>({
  products: [],
  addProductToCart: () => null,
  removeProductFromCart: () => null,
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<ICartProduct>>([]);

  const addProductToCart = (product: IProduct) => {
    const productsCopy = [...products];
    const productIndex = productsCopy.findIndex(({ id }) => product.id === id);

    if (productIndex === -1) {
      productsCopy.push({ ...product, quantity: 1 });
      setProducts(productsCopy);
      return;
    }

    productsCopy[productIndex].quantity++;
    setProducts(productsCopy);
  };

  const removeProductFromCart = (productId: number) => {
    const productsCopy = [...products];
    const product = productsCopy.find(({ id }) => productId === id);

    if (product === undefined) {
      return;
    }

    if (product.quantity > 1) {
      product.quantity--;
      setProducts(productsCopy);
      return;
    }

    setProducts(productsCopy.filter(({ id }) => productId !== id));
  };

  const value: ICartContextState = {
    products,
    addProductToCart,
    removeProductFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
