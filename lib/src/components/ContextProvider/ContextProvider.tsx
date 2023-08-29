import { AxiosInstance } from "axios";
import { ApiProvider, QueryProvider, UseQueryContext } from "../../api";

export type ContextProviderProps = {
  children: React.ReactNode;
  api: AxiosInstance;
  query: UseQueryContext;
};

export const ContextProvider = ({
  children,
  api,
  query,
}: ContextProviderProps) => {
  console.log(api, query);
  return (
    <ApiProvider api={api}>
      <QueryProvider query={query}>{children}</QueryProvider>
    </ApiProvider>
  );
};
