import React, { useEffect, useState } from 'react';

import './Header.scss'

const Header = ({types, updatePokemons, pokemons, setCurrentPokemon, active }) => {
    const [currentType, setCurrentType] = useState("");
    useEffect(() => {
        if (currentType) {
            updatePokemons(
                pokemons.filter(pokemon =>
                    pokemon.info.types.some(type => type.type.name === currentType)
                )
            );
        } else  {
            updatePokemons(pokemons)
        }
        setCurrentPokemon({})
    }, [currentType, pokemons, setCurrentPokemon, updatePokemons]);
    useEffect(()=>{
        setCurrentType("");
    }, [active]);
    return (
        <>
            <h1 className="header">POKEDEX</h1>
            <div className="filter-menu">
                <select
                    value={currentType}
                    onChange={({ target }) => setCurrentType(target.value)}
                    className="ui selection dropdown"
                >
                    <option value="" disabled>
                        Choose your type:
                    </option>
                    {types.map(type => (
                        <option value={type.name} key={type.name}>
                            {type.name}
                        </option>
                    ))}
                </select>
                <button type="reset" className="negative ui button" onClick={() => setCurrentType('')}>Reset</button>
            </div>
        </>
    );
};

export default Header;
