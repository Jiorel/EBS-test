import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from 'contexts';
import { Table } from 'components';
import { IProduct } from 'types';

const CartPage: React.FC = () => {
  const cart = useCart();
  const history = useHistory();

  const tableColumns = ['name', 'category', 'quantity', 'price'];
  const tableActions = [
    { title: '+', handler: cart.addProductToCart },
    { title: '-', handler: ({ id }: IProduct) => cart.removeProductFromCart(id) },
  ];

  const totalPrice = cart.products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div>
      <button onClick={() => history.push('/')}>Back to shop</button>
      <span>Total Price: {totalPrice}$</span>
      <Table columns={tableColumns} rows={cart.products} actions={tableActions} />
    </div>
  );
};

export default CartPage;
