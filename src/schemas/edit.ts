import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string({ required_error: 'Campo requerido' }).min(1).optional(),
  email: z
    .string({ required_error: 'Campo requerido' })
    .email('Ingresa un correo válido')
    .min(1).optional(),
  address:z.string({ required_error: 'Campo requerido' }).min(1).optional() ,
  postalcode: z.number().int().positive().min(9999)

});

export type EditUser = z.infer<typeof editUserSchema>;
