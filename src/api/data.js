const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';
export const getData = (url=BASE_URL) => fetch(`${url}`).then(response => response.json());
