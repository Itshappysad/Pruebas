export type ResgisterUser = {
  name: string;
  email: string;
  password?: string | null;
  id: string;
  provider?: string | null;
};
