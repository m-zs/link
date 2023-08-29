import { useApi, useQueryContext } from "../..";
import { extractDataFromResponse } from "../../utils";
import { Pokemon } from "./types";
import { pokemonQueryBuilder } from "./query-builder";
import { pokemonEndpoints } from "./endpoints";

export type GetPokemonData = { id: number };
export type GetPokemonResponse = Pokemon;

export const useGetPokemonRequest = () => {
  const { api } = useApi();

  const getPokemonRequest = (data: GetPokemonData) =>
    extractDataFromResponse(
      api.get<GetPokemonResponse>(pokemonEndpoints.pokemon(data.id))
    );

  return { getPokemonRequest };
};

export const usePokemonQuery = (data: GetPokemonData) => {
  const { getPokemonRequest } = useGetPokemonRequest();
  const { useQuery } = useQueryContext();

  return useQuery(pokemonQueryBuilder.id(data.id), () =>
    getPokemonRequest(data)
  );
};
