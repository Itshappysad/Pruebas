import { z } from "zod";

export const companyObjectForm = z.object({
  name: z.string().min(2),
  address: z.string().min(1),
  bankType: z.string().min(1),
  bankAccount: z.string().min(10),
  nit: z.string().min(2),
  // nit: z
  //   .string()
  //   .regex(new RegExp(`^\\d{4,}(\\.\\d+)?-\\d$`), "Ingresa un NIT valido"),
  email: z
    .string({ required_error: "Campo requerido" })
    .email("Ingresa un correo valido")
    .min(1),
  phone: z.string().min(10),
  postalcode: z.number().int().positive().min(9999),
});

export type companyTypeForm = z.infer<typeof companyObjectForm>;
