import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { type EditUser, editUserSchema } from "../schemas/edit";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/input";
import { Button } from "../components/ui/button";
import { editUser } from "../core/database";
import { toast } from "sonner";
import {
  ProfilePicture,
  ProfilePictureButtons,
} from "../components/ProfilePic";

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
      navigate("/signUp");
    }
  }, [user, navigate]);

  const onSubmit: SubmitHandler<EditUser> = async (data) => {
    if (!user) return;

    const res = await editUser({ email: user.email, userData: data });

    if (!res) {
      return toast.error("Ha ocurrido un error");
    }

    toast.success("Modificado correctamente");
  };

  return (
    <div className="h-full ">
      <div className="px-10">
        <h2 className="font-bold">Mi perfil</h2>
        <p>Aqui puedes editar toda la informacion sobre ti y tu perfil</p>
      </div>
      <form
        className="px-10 flex flex-col gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex">
          <div className="flex-col">
            <ProfilePicture />
            <ProfilePictureButtons />
          </div>

          <div className="flex flex-col ">
            <div>
              <label className="font-bold py-2" htmlFor="name">
                Nombre:
              </label>
              <Input {...register("name")} />
              <p className="font-extralight py-1">
                Aqui puedes cambiar todos los datos sobre tu nombre y como se
                muestra a la pagina
              </p>
            </div>
            <div>
              <label className="font-bold py-2" htmlFor="email">
                Email:
              </label>
              <Input {...register("email")} />
              <p className="font-extralight py-1">
                Aqui puedes cambiar los datos sobre tu correo electronico
              </p>
            </div>
            <div className="pt-36">
              <Button className="px-60" disabled={isSubmitting}>
                Editar informacion
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditUser;
