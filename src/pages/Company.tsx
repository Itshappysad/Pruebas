import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { Button } from "../components/ui/button";
import Input from "../components/input";
import CompanyPicture from "../components/CompanyPic";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type companyTypeForm, companyObjectForm } from "../schemas/company";
import CompanyPictureButtons from "../components/Companybutton";
import { getCompany, editCompany } from "../core/database";
import { Company as CompanyDBType } from "../core/types";
import { toast } from "sonner";

export function Company() {
  const { user, company } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<companyTypeForm>({
    resolver: zodResolver(companyObjectForm),
    defaultValues: {
      name: company?.name || "",
      nit: company?.nit || "",
      bankType: company?.bankType || "",
      bankAccount: company?.bankAccount || "",
      email: company?.email || "",
      phone: company?.phone || "",
      address: company?.address || "",
      postalcode: company?.postalcode,
    },
  });

  useEffect(() => {
    if (!user) {
      navigate("/signUp");
    }
  }, [user, navigate]);

  const onSubmit: SubmitHandler<companyTypeForm> = async (data) => {
    try {
      if (!user) {
        throw new Error("Usuario no autenticado");
      }

      const companyData = {
        name: data.name,
        nit: data.nit,
        bankType: data.bankType,
        bankAccount: data.bankAccount,
        email: data.email,
        phone: data.phone,
        address: data.address,
        postalcode: data.postalcode
      }


      const success = await editCompany({
        id: user.id,
        companyData: companyData,
      });
      

      if (success) {
        toast.success("Empresa guardada exitosamente!");
      } else {
        throw new Error("Error al guardar la empresa");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al guardar la empresa");
    }
  }

  return (
    <div className="h-full ">
      <div className="px-10 text-center">
        <h2 className="font-bold ">Empresa</h2>
        <p>
          Aquí puedes manejar la información de tu empresa.
          <br />
          Se necesita para poder crear items en la tienda.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 flex flex-col gap-1"
      >
        <div>
          <div className="flex gap-6">
            <div className="flex-col rounded-sm h-32 w-1/2">
              <CompanyPicture id="" />
              <CompanyPictureButtons id="" />
            </div>

            <div className=" flex-col ">
              <div className="grid grid-cols-2 gap-1">
                <div>
                  <label className="font-bold py-2" htmlFor="name">
                    Nombre de la Empresa:
                  </label>
                  <Input {...register("name")} />
                  <p className="font-extralight py-1">
                    Aquí puedes cambiar todos los datos sobre tu nombre y como
                    se muestra a la pagina
                  </p>
                </div>
                <div className="px-4">
                  <label className="font-bold py-2" htmlFor="nit">
                    NIT:
                  </label>
                  <Input {...register("nit")} className="w-54" />
                  <p className="font-extralight py-1">
                    Aquí puedes cambiar los datos sobre tu número de identidad
                  </p>
                </div>
                <div className=" ">
                  <label className="font-bold py-2 block" htmlFor="Banktype">
                    Tipo de banco:
                  </label>
                  <select
                    {...register("bankType")}
                    className="border-1   border-gray-400 rounded-md w-full h-9 focus:border-blue-500 focus:border-4"
                  >
                    <option value="">Elegir...</option>
                    <option value="Bancolombia">Bancolombia</option>
                    <option value="BBVA">BBVA Colombia</option>
                    <option value="Visa">VISA Dedito</option>
                    <option value="BancoBogota">Banco de Bogota</option>
                    <option value="Davivienda">Davivienda</option>
                    <option value="Citibank">Citibank Colombia</option>
                    <option value="Colpatria">Scotiabank Colpatria</option>
                  </select>
                </div>
                <div className="px-4 ">
                  <label className="font-bold py-2 " htmlFor="bankAccount">
                    Número de Cuenta Bancaria:
                  </label>
                  <Input {...register("bankAccount")} className="w-38 " />
                </div>

                <div>
                  <label className="font-bold py-2 " htmlFor="address">
                    Dirección:
                  </label>
                  <Input {...register("address")} />
                </div>
                <div className="px-4">
                  <label className="font-bold py-2 " htmlFor="postalcode">
                    Código Postal:
                  </label>
                  <Input
                    {...register("postalcode", { valueAsNumber: true })}
                    className="w-38"
                  />
                </div>
                <div>
                  <label className="font-bold py-2" htmlFor="email">
                    Email:
                  </label>
                  <Input {...register("email")} />
                  <p className="font-extralight py-1">
                    Aquí puedes cambiar los datos sobre tu correo electrónico
                  </p>
                </div>
                <div className="px-4">
                  <label className="font-bold py-2" htmlFor="phone">
                    Teléfono:
                  </label>
                  <Input {...register("phone")} className="w-38" />
                  <p className="font-extralight py-1">
                    Aquí puedes cambiar los datos sobre tu número telefónico
                  </p>
                </div>
              </div>
              <div className="py-4">
                <Button disabled={isSubmitting} className="px-60">
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
