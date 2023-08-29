import { createContext, useContext } from "react";
import {
  QueryClient,
  useQueryClient,
  useQuery,
  useMutation,
} from "react-query";

export type UseQueryContext = {
  useQueryClient: typeof useQueryClient;
  useQuery: typeof useQuery;
  useMutation: typeof useMutation;
  queryClient: QueryClient;
};

export type QueryProviderContextValue = UseQueryContext;

const QueryContext = createContext<QueryProviderContextValue | null>(null);

export const useQueryContext = (): UseQueryContext => {
  const context = useContext(QueryContext);

  if (!context) {
    throw new Error();
  }

  return context;
};

export type QueryProviderProps = {
  children: React.ReactNode;
  query: UseQueryContext;
};

export const QueryProvider = ({ children, query }: QueryProviderProps) => {
  const context = query;

  return (
    <QueryContext.Provider value={context}>{children}</QueryContext.Provider>
  );
};
