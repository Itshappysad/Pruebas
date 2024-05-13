import { z } from 'zod';

export const singUserSchema = z
  .object({
    email: z
      .string({ required_error: 'Campo requerido' })
      .email('Ingresa un correo válido'),
    password: z
      .string({ required_error: 'Campo requerido' })
  })

export type SinginUser = z.infer<typeof singUserSchema>;
