import { UseQueryContext } from "lib/src/api";
import { createContext, useContext } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

type QueryProviderContextValue = UseQueryContext;

const QueryContext = createContext<QueryProviderContextValue | null>(null);

export const useQueryContext = (): UseQueryContext => {
  const context = useContext(QueryContext);

  if (!context) {
    throw new Error();
  }

  return context;
};

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const queryClient = new QueryClient();

  const context = {
    queryClient,
    useQuery,
    useQueryClient,
    useQueryContext,
    useMutation,
  };

  return (
    <QueryContext.Provider value={context}>
      <QueryClientProvider client={context.queryClient}>
        {children}
      </QueryClientProvider>
    </QueryContext.Provider>
  );
};
