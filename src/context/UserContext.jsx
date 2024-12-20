import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const nav = useNavigate();

  const logIn = () => setLogin(true);
  const logOut = () => {
    setLogin(false);
    nav("/week5/home");
  };

  return (
    <UserContext.Provider value={{ login, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
