import React from "react";

import "./PokemonDetails.scss";

const PokemonDetails = ({ currentPokemon, setCurrentPokemon }) => (
  <div className="right-block" onClick={() => setCurrentPokemon({})}>
    <div className="pokemon-details">
      <img src={currentPokemon.info.sprites.front_shiny} alt="pokemon" />
      <h1 className="title">{`${currentPokemon.name} #${currentPokemon.info.id}`}</h1>
      <table className="ui compact table">
        <tbody>
          <tr>
            <td>Type</td>
            <td>{currentPokemon.info.types.map(el => el.type.name + " ")}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{currentPokemon.info.stats[4].base_stat}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{currentPokemon.info.stats[3].base_stat}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{currentPokemon.info.stats[5].base_stat}</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>{currentPokemon.info.stats[2].base_stat}</td>
          </tr>
          <tr>
            <td>SP Defense</td>
            <td>{currentPokemon.info.stats[1].base_stat}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{currentPokemon.info.stats[0].base_stat}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{currentPokemon.info.weight}</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>{currentPokemon.info.moves.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PokemonDetails;
