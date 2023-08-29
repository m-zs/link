import { usePokemonQuery } from "../../api/resources/pokemon/pokemon";

export const Pokemon = () => {
  const pokemonQuery = usePokemonQuery({ id: 1 });

  if (!pokemonQuery.isSuccess) return <>loading...</>;

  const { data: pokemon } = pokemonQuery;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};
