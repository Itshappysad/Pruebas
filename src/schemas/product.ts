import { z } from "zod";

export const registerProductFormSchema = z.object({
  name: z.string().min(1),
  price: z.number().int().positive().min(1),
  colors: z.string().min(1),
  sizes: z.string().min(1),
  categories: z.string().min(1),
  materials: z.string().min(1),
});

export type RegisterProductForm = z.infer<typeof registerProductFormSchema>;
