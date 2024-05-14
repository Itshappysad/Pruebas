export type ResgisterUser = {
  name: string;
  email: string;
  password?: string | null;
  id: string;
  provider?: string | null;
  address?: string | null;
  postalcode?: number | null;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
};

export type Subscription = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export type Company = {
  id: string;
  name: string;
  email: string;
  address: string;
  postalcode: number;
  bankType: string;
  bankAccount: string;
  nit: string;
  phone: string;
};
