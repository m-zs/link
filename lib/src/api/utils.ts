import { ApiResponse } from "./types";

export const extractDataFromResponse = <T>(response: ApiResponse<T>) =>
  response.then(({ data }) => data);
