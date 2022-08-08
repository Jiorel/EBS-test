import { request } from 'utilities';
import { IProduct } from 'types';

export const getProducts = (): Promise<IProduct[]> => {
  return request('/products');
};
