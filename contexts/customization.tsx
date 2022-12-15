import { createContext, useContext, useState } from "react";

interface CustomizationState {
  logo: any;
  name: any;
  token: any;
  primary: any;
  setLogo: any;
  setName: any;
  setToken: any;
  setPrimary: any
}

export const CustomizationStateContext = createContext<CustomizationState>({} as CustomizationState);

export function CustomizationContextProvider({ children }) {
  const [logo, setLogo] = useState({ raw: undefined, preview: undefined});
  const [name, setName] = useState();
  const [token, setToken] = useState();
  const [primary, setPrimary] = useState();

  const contextValue = {
    logo,
    name,
    token,
    primary,
    setLogo,
    setName,
    setToken,
    setPrimary
  };

  return (
    <CustomizationStateContext.Provider value={contextValue}>
      {children}
    </CustomizationStateContext.Provider>
  );
}

export function useCustomization() {
  const context = useContext(CustomizationStateContext);

  if (!context)
    throw new Error(`useCustomization not inside CustomizationStateContext`);

  return context;
}