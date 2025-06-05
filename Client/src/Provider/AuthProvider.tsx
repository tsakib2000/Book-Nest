import { createContext, useState, type ReactNode, } from "react";
import { type User } from "firebase/auth";
// Define the shape of your context
type AuthContextType = {
  user: User| null;
  setUser: (user: User| null) => void;
};


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

// Props type for AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User| null>(null);

  const value: AuthContextType = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};