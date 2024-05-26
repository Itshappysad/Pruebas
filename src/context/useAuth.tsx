import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../core/auth";
import { User, Company } from "../core/types";
import { database, getCompany, getUser } from "../core/database";
import { doc, onSnapshot } from "firebase/firestore";

type AuthContextProps = {
  user: User | null;
  company: Company | null;
  logOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [company,setCompany] = useState<Company | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (u) => {
      if (!u) return setUser(null);

      const dbUser = await getUser(u.uid);
      const dbCompany = await getCompany(u.uid);

      onSnapshot(doc(database, "users", u.uid), (doc) => {
        setUser({ id: u.uid, ...doc.data() } as User);
      });

      onSnapshot(doc(database, "companies", u.uid), (doc) => {
        setCompany({...doc.data() } as Company);
      });

      setUser(dbUser);
      setCompany(dbCompany)
    });
  }, []);

  const logOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, company, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
