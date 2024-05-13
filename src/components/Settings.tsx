import { Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { Button } from "./ui/button";
import ProfilePicture from "./ProfilePic";

type SettingsProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export function Settings({ isOpen, handleClose }: SettingsProps) {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Offcanvas show={isOpen} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton></Offcanvas.Header>

      <div className="flex flex-col items-center h-full relative mx-10">
        {!user ? (
          <button
            className="
                    py-2 px-3 bg-blue-600 font-bold rounded-xl text-white transition-transform
                    hover:bg-gray-400
                    active:scale-95
                    disabled:bg-lime-900
                  "
          >
            <Link className="no-underline text-white w-max h-max" to="/signUp">
              Registrate!
            </Link>
          </button>
        ) : (
          <>
            <p className="text-4xl font-bold text-center">{user.name}</p>
            <ProfilePicture id={user.id} />
            <div className="flex flex-col gap-2">
              <Button
                className="text-decoration-none text-gray-600"
                asChild
                variant="outline"
              >
                <Link to="/edituser">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9.243 18.997H21v2H3v-4.243l9.9-9.9l4.242 4.243zm5.07-13.557l2.122-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415l-2.122 2.121z"
                    />
                  </svg>
                  Editar
                </Link>
              </Button>
              <Button
                variant="destructive"
                onClick={async () => {
                  await logOut();
                  navigate("/signUp");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12q0-.425.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7q.275-.3.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z"
                  />
                </svg>
                Cerrar sesión
              </Button>
            </div>
          </>
        )}
      </div>
    </Offcanvas>
  );
}
