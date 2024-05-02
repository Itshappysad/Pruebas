import { Button } from "../components/ui/button";

export const ProfilePicture = () => {
  return (
    <div>
      <label className="font-bold py-2" htmlFor="img">
        Imagen de perfil:
      </label>
      <div className="flex flex-row gap-x-10 gap-y-16 py-10">
        <img
          src="imgs/AeVlogo.jpeg"
          alt="pfp"
          className="basis-60	max-h-64 max-w-64 border rounded-full shadow-sm"
        />
      </div>
    </div>
  );
};

export const ProfilePictureButtons = () => {
  return (
    <div>
      <Button className="flex-none w-26 ">Cambiar foto </Button>
      <Button className="flex-none max-w-26 bg-slate-50 text-red-600 border hover:bg-red-600 hover:text-white">
        Quitar foto
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="20"
          height="20"
        >
          <title />
          <g data-name="Layer 17" id="Layer_17">
            <path
              d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z"
              fill="currentColor"
            />
            <path
              className="cls-1"
              d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z"
            />
            <path
              className="cls-1"
              d="M28,7H4A1,1,0,0,1,4,5H28a1,1,0,0,1,0,2Z"
            />
            <path
              className="cls-1"
              d="M20,7a1,1,0,0,1-1-1V3H13V6a1,1,0,0,1-2,0V2a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,20,7Z"
            />
            <path
              className="cls-1"
              d="M16,26a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V25A1,1,0,0,1,16,26Z"
            />
            <path
              className="cls-1"
              d="M21,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,21,24Z"
            />
            <path
              className="cls-1"
              d="M11,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,11,24Z"
            />
            <title />
          </g>
        </svg>
      </Button>
    </div>
  );
};
