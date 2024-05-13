import { useEffect, useState } from "react";
import SignUpForm from "../../components/sign-up-form";
import { cn } from "../../core/utils";
import SignInForm from "../../components/sign-in-form";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

import './styles.css'

function SignUp() {
  const [active, setActive] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <main className="flex flex-col justify-center items-center h-[100vh] px-8 py-20 bg-gray-100">
      <div className="rounded-3xl overflow-hidden flex relative w-[1200px] border-2 border-black">
        <div
          className={cn(
            "absolute bg-gradient-to-r from-black to-slate-800 flex items-center justify-center text-lime-50 px-10 flex-1 z-30 overflow-hidden transition-transform duration-200 left-0 top-1/2 -translate-y-1/2 h-full w-1/2 rounded-3xl",
            {
              "translate-x-full": active,
            }
          )}
        >
          <div className="p-2">
            <div
              className={cn(
                "flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ",
                {
                  "-translate-x-[200%]": active,
                }
              )}
            >
              <h1 className="font-bold text-4xl text-center font-cursive">Iniciar sesión</h1>
              <p className="text-center text-xl">
                Si ya tienes una cuenta
              </p>
              <button
                onClick={() => setActive(!active)}
                className="py-2 px-3 bg-transparent font-bold rounded-xl text-white transition-transform border border-white"
              >
                Ir a Iniciar sesión
              </button>
            </div>
            <div
              className={cn(
                "flex flex-col gap-5 items-center justify-center absolute top-1/2 left-1/2 -translate-x-[200%] transition-transform duration-200",
                {
                  "-translate-x-1/2 -translate-y-1/2": active,
                }
              )}
            >
              <h1 className="font-bold text-4xl text-center font-cursive">Crear cuenta</h1>
              <p className="text-center text-xl">
                Si no tienes una cuenta puedes crear una nueva.
                <br/>
                Es muy sencillo, Sólo necesitas un email y crear una contrasña.
              </p>
              <button
                onClick={() => setActive(!active)}
                className="py-2 px-3 bg-transparent font-bold rounded-xl text-white transition-transform border border-white"
              >
                Ir a Crear cuenta
              </button>
            </div>
          </div>
        </div>
        <div className="relative bg-white p-9 z-20 flex flex-1 justify-between">
          <div className="w-1/2">
            <h1 className="p-5 text-5xl font-bold text-black text-center font-cursive">
              Iniciar sesión
            </h1>
            <SignInForm />
          </div>
          <div style={{ width: "2%", height: "auto" }}></div>
          <div className="w-1/2">
            <h1 className="p-5 text-5xl font-bold text-black text-center font-cursive">
              Crear una cuenta
            </h1>
            <SignUpForm />
          </div>
        </div>
      </div>
      <a className="signup-back" href="/">Atrás</a>
    </main>
  );
}

export default SignUp;
