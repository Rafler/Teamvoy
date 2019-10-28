import React from "react";

const Card = ({ pokemon, setCurrentPokemon }) => {
  return (
    <div className="card" onClick={() => setCurrentPokemon(pokemon)}>
      <img src={pokemon.info.sprites.front_shiny} alt="pokemon" />
      <div className="content">
        <h1 className="header">{pokemon.name}</h1>
        {pokemon.info.types.map(type => (
          <span key={type.type.name} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
