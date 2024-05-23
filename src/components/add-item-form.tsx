import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { Button } from "../components/ui/button";
import Input from "../components/input";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductForCompany } from "../core/database";
import { toast } from "sonner";

import {
  RegisterProductForm,
  registerProductFormSchema,
} from "../schemas/product";
import ItemButton from "./ItemPictureButton";
import ItemPicture from "./ItemPic";
import { Combobox } from "./ui/combobox";

function AddItemForm() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterProductForm>({
    resolver: zodResolver(registerProductFormSchema),
  });

  useEffect(() => {
    if (!user) {
      navigate("/signUp");
    }
  }, [user, navigate]);

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const categoryOptions = ["Camisa, Pantalon,"];

  const onSubmit: SubmitHandler<RegisterProductForm> = async (data) => {
    console.log(data);
    try {
      if (!user) {
        throw new Error("Usuario no autenticado");
      }
      // const success = await createProductForCompany({
      //   userId: user.id,
      //   companyId: company.id,
      //   productData: data,
      // });

      // if (success) {
      //   toast.success("Producto creado exitosamente!");
      // } else {
      //   throw new Error("Error al crear el producto");
      // }
    } catch (error) {
      toast.error("Error al crear el producto");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-48  flex flex-col gap-1"
    >
      <div className="flex gap-6">
        <div className=" flex-col flex-wrap">
          <div>
            <label className="font-bold py-2" htmlFor="name">
              Nombre del producto:
            </label>
            <Input {...register("name")} />
          </div>
          <div>
            <label className="font-bold py-2" htmlFor="price">
              Precio:
            </label>
            <Input {...register("price", { valueAsNumber: true })} />
          </div>
          <div className="flex flex-row gap-1 w-full">
            <div className="w-[50%]">
              <label className="font-bold py-2 block" htmlFor="address">
                Color:
              </label>

              <select
                {...register("colors")}
                className="border-1  block  border-gray-400 rounded-md w-full h-9 focus:border-blue-500 focus:border-4"
              >
                <option value="">Elegir...</option>
                <option value="white">Blanco</option>
                <option value="black">Negro</option>
                <option value="blue">Azul</option>
                <option value="red">Rojo</option>
                <option value="yellow">Amarillo</option>
                <option value="green">Verde</option>
                <option value="purple">Morado</option>
                <option value="orange">Naranja</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label className="font-bold py-2 " htmlFor="address">
                Tallas:
              </label>
              <Combobox
                options={sizeOptions.map((size) => ({
                  label: size,
                  value: size,
                }))}
              />
            </div>
          </div>

          <div className="py-3 ">
            <label className="font-bold py-2 block" htmlFor="address">
              Categoria de ropa:
            </label>
            {/* <<Combobox
                options={categoryOptions.map((category) => ({
                  label: category,
                  value: category,
                }))}
              /> */}
          </div>
          <div className="py-3 ">
            <label className="font-bold py-2 block" htmlFor="address">
              Material:
            </label>
            <select
              {...register("materials")}
              className="border-1   border-gray-400 rounded-md w-full h-9 focus:border-blue-500 focus:border-4"
            >
              <option value="">Elegir...</option>
              <option value="algodon">Algodón</option>
              <option value="poliester">Poliéster</option>
              <option value="seda">Seda</option>
              <option value="lana">Lana</option>
            </select>
          </div>

          <div className="py-4">
            <Button disabled={isSubmitting} className="px-60">
              Subir informacion
            </Button>
          </div>
        </div>
        <div className="flex flex-col  rounded-sm h-32 px-10">
          <ItemPicture id="" />
          <ItemButton />
        </div>
      </div>
    </form>
  );
}

export default AddItemForm;
