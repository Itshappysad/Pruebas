import { Button } from "../components/ui/button";
import { useRef } from "react";
import useProfilePicture from "../hooks/useProfilePicture";

type Props = {
  id: string;
};

const ProfilePictureButtons = ({ id }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { uploadProfilePicture } = useProfilePicture(id);

  return (
    <>
      <input
          className="hidden"
          type="file"
          accept="image/*"
          onChange={uploadProfilePicture}
          id="imageUpload"
          ref={fileInputRef}
        />
      <label htmlFor="imageUpload">

        <Button
          className="flex-none translate-y-52 translate-x-12 w-26 "
          type="button"
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          Actualizar imagen de perfil
        </Button>
      </label>
    </>
  );
};

export default ProfilePictureButtons;
