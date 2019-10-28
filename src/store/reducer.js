import {store} from "./index";
import {ACTION_TYPES} from "./actionTypes";
import {loadInfo} from "./loadData";

const initialState = {
    pokemons:[],
    types: [],
};

 export function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ACTION_TYPES.GET_POKEMONS: {
            action.pokemons.results.map(pokemon => loadInfo(pokemon.url)(store.dispatch));
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.pokemons.results],
                loadMore: action.pokemons.next,
            };
        }
        case ACTION_TYPES.GET_POKEMONS_INFO: {
            return {
                ...state,
                pokemons: state.pokemons.map((pokemon) =>{
                    if(pokemon.name === action.pokemonInfo.name){
                        return ({
                            ...pokemon,
                            info: action.pokemonInfo,
                        });
                    } else {
                        return (pokemon)
                    }
                }),
            }
        }
        case ACTION_TYPES.GET_POKEMONS_TYPES: {
            return {
                ...state,
                types: action.types.results
            }
        }
        default: {
            return state;
        }
    }
}
