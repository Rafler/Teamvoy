import {ACTION_TYPES} from "./actionTypes";

export const getPreparedPokemonsTypes = types => ({
    type: ACTION_TYPES.GET_POKEMONS_TYPES,
    types,
});

export const getPreparedPokemonsData = pokemons => ({
    type: ACTION_TYPES.GET_POKEMONS,
    pokemons,
});

 export const getPreparedPokemonsInfo = pokemonInfo => ({
    type: ACTION_TYPES.GET_POKEMONS_INFO,
    pokemonInfo,
});
