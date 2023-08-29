import { TestFeature, ContextProvider } from "lib/src";
import { useApi } from "../../api";
import { useQueryContext } from "../../api/query-provider";

export type ContextWrapperProps = {
  children: React.ReactNode;
};

export const ContextWrapper = ({ children }: ContextWrapperProps) => {
  const { api } = useApi();
  const query = useQueryContext();

  return (
    <ContextProvider api={api} query={query}>
      {children}
    </ContextProvider>
  );
};

export const Test = () => {
  return (
    <ContextWrapper>
      <TestFeature />
    </ContextWrapper>
  );
};
