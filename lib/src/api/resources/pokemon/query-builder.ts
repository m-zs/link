export const pokemonQueryBuilder = {
  index: () => ["POKEMON_QUERY_KEY"],
  id: (id: number) => [...pokemonQueryBuilder.index(), id],
};
