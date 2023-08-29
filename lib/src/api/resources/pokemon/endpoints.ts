export const pokemonEndpoints = {
  index: (url: number | string = "") => "/pokemon/" + url,
  pokemon: (id: number) => pokemonEndpoints.index(id),
};
