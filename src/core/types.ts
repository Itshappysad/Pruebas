export type ResgisterUser = {
  name: string;
  email: string;
  password?: string | null;
  id: string;
  provider?: string | null;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  colors: string[];
  sizes: string[];
};
