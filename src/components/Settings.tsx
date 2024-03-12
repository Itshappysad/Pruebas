import { Offcanvas } from "react-bootstrap";
import { auth } from "../core/auth";
import { useEffect, useState } from "react";
import { getUser, type User } from "../core/database";

type SettingsProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export function Settings({ isOpen, handleClose }: SettingsProps) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [error, setError] = useState(false);

  useEffect(() => {
    const run = async () => {
      const sessionUser = auth.currentUser;

      if (!sessionUser) {
        return setError(true);
      }

      const user = await getUser(sessionUser.uid);

      if (!user) {
        return setError(true);
      }

      setCurrentUser(user);
    };
    run();
  });

  return (
    <Offcanvas show={isOpen} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton></Offcanvas.Header>
      {error && <p className="bg-red-200 text-red-500 p-3">Error</p>}
      {currentUser?.email}
    </Offcanvas>
  );
}
