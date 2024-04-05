import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../core/auth';
import { User, getUser } from '../core/database';

type AuthContextProps = {
  user: User | null;
  logOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async u => {
      if (!u) return setUser(null);

      const dbUser = await getUser(u.uid);

      setUser(dbUser);
    });
  }, []);

  const logOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
