import React from 'react';

const App = ({loadData, pokemons, loadMore}) => (
        <div>
            <button onClick={() => loadData()}>Load</button>
            {pokemons && pokemons.map(pokemon =>(
                <div key={pokemon.name}>{pokemon.name}</div>
            ))}
           <button onClick={() => loadData(loadMore)}>Load More</button>
        </div>
    );
;

export default App;
