import { Button } from "../components/ui/button";
import { useRef } from "react";

const ItemButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {/* <input
        className="hidden"
        type="file"
        accept="image/*"
        id="imageUpload"
        ref={fileInputRef}
      /> */}
      <label htmlFor="imageUpload">
        <Button
          className="flex-none  translate-x-14 w-26 h-8 "
          type="button"
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          Subir foto
        </Button>
      </label>
    </div>
  );
};

export default ItemButton;
