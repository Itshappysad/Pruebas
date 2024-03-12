import { useNavigate } from "react-router-dom";
import { auth } from "../core/auth";
import { useEffect } from "react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const user = auth.currentUser;
  console.log(auth);
  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/signup", { replace: true });
    }
  }, [navigate, user]);

  return children;
}
export default ProtectedRoute;
