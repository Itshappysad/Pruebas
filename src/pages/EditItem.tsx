import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import { Link, useNavigate } from "react-router-dom";
import AddItemForm from "../components/add-item-form";
import { useQuery } from "@tanstack/react-query";
import { getAccountBusiness } from "../core/database";
import { Button } from "../components/ui/button";

function EditItem() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signUp");
    }
  }, [user, navigate]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: async () => {
      const company = await getAccountBusiness();

      return company;
    },
  });

  return (
    <div className="h-full ">
      <div className="px-10 text-center">
        <h2 className="font-bold ">Añadir Items como empresa</h2>
        <p>Aqui tu puedes crear items en la tienda</p>
      </div>
      {!data ? (
        <div className="grid place-content-center">
          <Button asChild>
            <Link to="/Company">Crea tu empresa</Link>
          </Button>
        </div>
      ) : (
        <AddItemForm />
      )}
    </div>
  );
}
export default EditItem;
