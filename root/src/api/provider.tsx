import React, { createContext, useContext } from "react";
import axios, { AxiosInstance } from "axios";

interface ApiProviderProps {
  children: React.ReactNode;
}

interface ApiProviderContextValue {
  api: AxiosInstance;
}

const AxiosContext = createContext<ApiProviderContextValue | null>(null);

const API_BASE_URL = "https://pokeapi.co/api/v2/";

export const useApi = (): ApiProviderContextValue => {
  const context = useContext(AxiosContext);

  if (!context) {
    throw new Error();
  }

  return context;
};

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const value: ApiProviderContextValue = {
    api: axiosInstance,
  };

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};
