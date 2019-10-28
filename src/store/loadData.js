import { getData } from "../api/data";
import {
  getPreparedPokemonsData,
  getPreparedPokemonsInfo,
  getPreparedPokemonsTypes
} from "./actionCreators";

export const loadData = link => dispatch => {
  getData(link).then(response => {
    dispatch(getPreparedPokemonsData(response));
  });
};

export const loadInfo = link => dispatch => {
  getData(link).then(response => {
    dispatch(getPreparedPokemonsInfo(response));
  });
};

export const loadTypes = () => dispatch => {
  getData("https://pokeapi.co/api/v2/type/?limit=999").then(response => {
    dispatch(getPreparedPokemonsTypes(response));
  });
};
