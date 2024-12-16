"use client";
import React, { createContext, useEffect, useState } from "react";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getCookie("token") || "");

  const logIn = (authToken, first_name, last_name, ) => {
    setToken(authToken);
    setUser({ first_name, last_name });
    setUserType(userType);
    setCookie("token", authToken);
    setCookie("first_name", first_name);
    setCookie("last_name", last_name);
  };

  const logOut = () => {
    setToken("");
    setUser(null);
    setUserType(null);
    deleteCookie("token");
    deleteCookie("username");
    deleteCookie("userType");
  };

  useEffect(() => {
    const savedUsername = getCookie("username");
    const savedUserType = getCookie("userType");

    if (savedUsername) {
      setUser({ username: savedUsername });
    }

    if (savedUserType) {
      setUserType(savedUserType); 
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
