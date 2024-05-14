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
                className="text-decoration-none text-gray-600"
                asChild
                variant="outline"
              >
                <Link to="/company">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g id="office" fill="currentColor">
                      <path d="M12.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,13Z" />
                      <path d="M12.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,9Z" />
                      <path d="M12.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,5Z" />
                      <path d="M8.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,13Z" />
                      <path d="M8.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,9Z" />
                      <path d="M8.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,5Z" />
                      <path d="M16.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,13Z" />
                      <path d="M16.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,9Z" />
                      <path d="M16.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,5Z" />
                      <path d="M22,21H21V2a1,1,0,0,0-1-1H4A1,1,0,0,0,3,2V21H2a1,1,0,0,0,0,2H22A1,1,0,0,0,22,21ZM10,21V19h4v2Zm6,0V18a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v3H5V3H19V21Z" />
                    </g>
                  </svg>{" "}
                  Empresa
                </Link>
              </Button>
              <Button
                className="text-decoration-none text-gray-600"
                asChild
                variant="outline"
              >
                <Link to="/edititem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <title />
                    <g fill="currentColor">
                      <path d="M15.393,2.994a.5.5,0,0,0-.011-.912L12.4.785a1,1,0,0,0-.8,0L2.531,4.728a.5.5,0,0,0,.007.92L6.093,7.129a.5.5,0,0,0,.4-.008Z" />
                      <path d="M13.25,22.494a.5.5,0,0,0,.707.455l8.957-4.071a1,1,0,0,0,.586-.911V7.212a.5.5,0,0,0-.707-.456l-9.25,4.205a.5.5,0,0,0-.293.455Zm4.9-9.236a.5.5,0,0,1,.707,0l1.5,1.5a.5.5,0,0,1-.353.853h-.75v2a.75.75,0,1,1-1.5,0v-2H17a.5.5,0,0,1-.354-.853Z" />
                      <path d="M7.927,9.519a.5.5,0,0,0-.469.045.5.5,0,0,0-.223.416v1.631a.75.75,0,0,1-1.5,0V8.939a.5.5,0,0,0-.308-.462L1.192,6.712A.5.5,0,0,0,.5,7.174V17.945a1,1,0,0,0,.615.923l9.943,4.142a.5.5,0,0,0,.469-.045.5.5,0,0,0,.223-.416v-11.1a.5.5,0,0,0-.308-.462Z" />
                      <path d="M12.286,9.71a.5.5,0,0,0,.4-.007L21.55,5.674a.5.5,0,0,0-.008-.914L18.449,3.415a.5.5,0,0,0-.41,0L9.2,7.518a.5.5,0,0,0,.018.915Z" />
                    </g>
                  </svg>{" "}
                  Añadir items
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
