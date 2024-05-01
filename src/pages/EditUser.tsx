import { useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { type EditUser, editUserSchema } from '../schemas/edit';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../components/input';
import { Button } from '../components/ui/button';
import { editUser } from '../core/database';
import { toast } from 'sonner';

function EditUser() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditUser>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  });

  useEffect(() => {
    if (!user) {
      navigate('/signUp');
    }
  }, [user, navigate]);

  const onSubmit: SubmitHandler<EditUser> = async data => {
    if (!user) return;

    const res = await editUser({ email: user.email, userData: data });

    if (!res) {
      return toast.error('Ha ocurrido un error');
    }

    toast.success('Modificado correctamente');
  };

  return (
    <div className='h-full'>
      <h2 className='text-center mb-3'>Editar informacion</h2>
      <form
        className='px-96 flex flex-col gap-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='name'>Nombre:</label>
          <Input {...register('name')} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <Input {...register('email')} />
        </div>
        <Button disabled={isSubmitting}>Confirmar</Button>
      </form>
    </div>
  );
}
export default EditUser;
