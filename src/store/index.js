import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getData } from '../api/data';

const ACTION_TYPES = {
    GET_POKEMONS: 'GET_POKEMONS',
    GET_POKEMONS_INFO: 'GET_POKEMONS_INFO'
};

const getPreparedPokemonsData = pokemons => ({
    type: ACTION_TYPES.GET_POKEMONS,
    pokemons,
});

const getPreparedPokemonsInfo = pokemonInfo => {
    let infoArr = [];
    infoArr.push(pokemonInfo);
    return {
    type: ACTION_TYPES.GET_POKEMONS_INFO,
    pokemonsInfo: infoArr,
}};

export const loadData = (link) => dispatch =>{
    getData(link)
        .then(response => {
            dispatch(getPreparedPokemonsData(response));
        })
};

export const loadInfo = (link) => dispatch =>{
    getData(link)
        .then(response => {
            dispatch(getPreparedPokemonsInfo(response));
        })
};
const initialState = {
    pokemons:[],
    pokemonsInfo: [],
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ACTION_TYPES.GET_POKEMONS: {
            console.log(action.pokemons.results.map(pokemon => loadInfo(pokemon.url)()));
            return {
                ...state,
                pokemons: action.pokemons.results,
                loadMore: action.pokemons.next,
            };
        }
        case ACTION_TYPES.GET_POKEMONS_INFO: {
            console.log(action.pokemonsInfo)
            return {
                ...state,
                pokemonsInfo: action.pokemonsInfo,
            }
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));
