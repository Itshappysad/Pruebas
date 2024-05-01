import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string({ required_error: 'Campo requerido' }).optional(),
  email: z
    .string({ required_error: 'Campo requerido' })
    .email('Ingresa un correo valido')
    .optional(),
});

export type EditUser = z.infer<typeof editUserSchema>;
