import React, { createContext, useContext } from "react";
import { AxiosInstance } from "axios";

export type ApiInstance = AxiosInstance;

export type ApiProviderProps = {
  children: React.ReactNode;
  api: ApiInstance;
};

export type ApiProviderContextValue = {
  api: ApiInstance;
};

const AxiosContext = createContext<ApiProviderContextValue | null>(null);

export const useApi = (): ApiProviderContextValue => {
  const context = useContext(AxiosContext);

  if (!context) {
    throw new Error();
  }

  return context;
};

export const ApiProvider = ({ children, api }: ApiProviderProps) => {
  const value: ApiProviderContextValue = {
    api,
  };

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};
