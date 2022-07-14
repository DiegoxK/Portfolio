import { useState, createContext } from "react";

export const Context = createContext();

function Store({ children }) {
  const [language, setLanguage] = useState("spanish");
  const [userState, setUserState] = useState("user");

  return (
    <Context.Provider
      value={{ language, setLanguage, userState, setUserState }}
    >
      {children}
    </Context.Provider>
  );
}

export default Store;
