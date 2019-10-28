import React from 'react';

import Card from "../Card/Card";

import './Cards.scss'

const Cards = ({pokemonsArr, setCurrentPokemon, loadMoreData}) => {
    return (
        <div className="left-block">
            <div className="ui link cards">
                {pokemonsArr.every(pokemon => pokemon.info) &&
                pokemonsArr.map(pokemon => (
                    <Card setCurrentPokemon={setCurrentPokemon} pokemon={pokemon}/>
                    ))}
            </div>
            <button onClick={loadMoreData} className="ui primary button">
                Load More
            </button>
        </div>
    );
};

export default Cards;
