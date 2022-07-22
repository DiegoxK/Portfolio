import { useState, createContext } from "react";
export const Context = createContext();

function Store({ children }) {
  // const [language, setLanguage] = useState("es");
  const [userState, setUserState] = useState("user");

  return (
    <Context.Provider value={{ userState, setUserState }}>
      {children}
    </Context.Provider>
  );
}

export default Store;
