export type ResgisterUser = {
  name: string;
  email: string;
  password?: string | null;
  id: string;
  provider?: string | null;
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