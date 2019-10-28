import {getData} from "../api/data";
import {getPreparedPokemonsData, getPreparedPokemonsInfo, getPreparedPokemonsTypes} from "./actionCreators";

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

export const loadTypes = () => dispatch => {
    getData("http://pokeapi.co/api/v2/type")
        .then(response => {
            dispatch(getPreparedPokemonsTypes(response));
        })
};
