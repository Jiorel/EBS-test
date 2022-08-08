import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from 'contexts';
import { getProducts } from 'api';
import { Table } from 'components';
import { IProduct } from 'types';

const HomePage: React.FC = () => {
  const cart = useCart();
  const history = useHistory();
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const tableColumns = ['name', 'category', 'price'];

  const tableRows = products.map((product) => ({
    ...product,
    category: product.category.name,
  }));

  const tableActions = [
    { title: '+', handler: cart.addProductToCart },
    { title: '-', handler: ({ id }: IProduct) => cart.removeProductFromCart(id) },
  ];

  const cartProductsCount = cart.products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <div>
      <button onClick={() => history.push('/cart')}>Go to cart</button>
      <span>Product count: {cartProductsCount}</span>
      <Table columns={tableColumns} rows={tableRows} actions={tableActions} />
    </div>
  );
};

export default HomePage;
