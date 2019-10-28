import React, { useState, useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

import PokemonDetails from "../PokemonsDetails/PokemonDetails";
import Cards from "../Cards/Cards";
import { Header } from "../Header/";

import "./App.scss";

const App = ({ loadData, pokemons, loadMore, loadTypes}) => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [active, setActive] = useState(false);
  const [pokemonsArr, updatePokemons] = useState([]);
  function activeTimeout() {
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  }
  function loadMoreData() {
    activeTimeout();
    setCurrentPokemon({});
    loadData(loadMore);
  }
  useEffect(() => {
    activeTimeout();
    loadData();
    loadTypes();
  }, [loadData, loadTypes]);

  useEffect(() => {
    updatePokemons([...pokemons]);
  }, [pokemons]);

  return (
    <>
      <Dimmer active={active} inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
      <Header
        updatePokemons={updatePokemons}
        setCurrentPokemon={setCurrentPokemon}
        active={active}
      />
      <main className="main-block">
        <Cards
          pokemonsArr={pokemonsArr}
          setCurrentPokemon={setCurrentPokemon}
          loadMoreData={loadMoreData}
        />
        {currentPokemon.info && (
          <PokemonDetails
            currentPokemon={currentPokemon}
            setCurrentPokemon={setCurrentPokemon}
          />
        )}
      </main>
    </>
  );
};
export default App;
