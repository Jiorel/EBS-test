export interface IObject {
  [key: string]: any;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  category: ICategory;
  price: number;
}
