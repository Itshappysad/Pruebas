import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { Button } from "../components/ui/button";
import ItemPicture from "../components/ItemPic";
import ItemButton from "../components/ItemPictureButton";
/* import SelectDemo from "../components/Checkbox";*/

function EditItem() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signUp");
    }
  }, [user, navigate]);

  return (
    <div className="h-full ">
      <div className="px-10 text-center">
        <h2 className="font-bold ">Añadir Items como empresa</h2>
        <p>Aqui tu puedes crear items en la tienda</p>
      </div>
      <form className="px-48  flex flex-col gap-1">
        <div className="flex gap-6">
          <div className=" flex-col flex-wrap">
            <div>
              <label className="font-bold py-2" htmlFor="name">
                Nombre del producto:
              </label>
              <Input />
              <p className="font-extralight py-1">
                Aqui puedes ponerle el nombre al producto que vas a añadir
              </p>
            </div>
            <div>
              <label className="font-bold py-2" htmlFor="name">
                Precio:
              </label>
              <Input />
              <p className="font-extralight py-1">
                Aqui puedes cambiar el precio del producto
              </p>
            </div>
            <div className="flex flex-row gap-1">
              <div className=" flex  ">
                <div className="w-full">
                  <label className="font-bold py-2 block" htmlFor="address">
                    Color:
                  </label>

                  <select
                    name="Colores"
                    id="colors"
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

                <div className="px-20 w-full">
                  <label className="font-bold py-2 " htmlFor="address">
                    Tallas:
                  </label>
                  <select
                    name="Bancos"
                    id="banks"
                    className="border-1 block  border-gray-400 rounded-md  h-9 focus:border-blue-500 focus:border-4"
                  >
                    <option value="">Elegir...</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                    <option value="xxxl">XXL</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="py-3 ">
              <label className="font-bold py-2 block" htmlFor="address">
                Categoria de ropa:
              </label>
              <select
                name="Bancos"
                id="banks"
                className="border-1   border-gray-400 rounded-md w-full h-9 focus:border-blue-500 focus:border-4"
              >
                <option value="">Elegir...</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
              </select>
            </div>
            <div>{/* <SelectDemo /> */}</div>

            <div className="flex flex-col py-6">
              <Button className="px-36">Subir informacion</Button>
            </div>
          </div>
          <div className="flex flex-col  rounded-sm h-32 px-10">
            <ItemPicture id="" />
            <ItemButton />
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditItem;
