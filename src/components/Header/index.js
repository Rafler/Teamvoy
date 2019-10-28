import { connect } from 'react-redux';

import Header from './Header';


function mapState2Props(state) {
    return {
        pokemons: state.pokemons,
        types: state.types,
    };
}
const Enhanced = connect(
    mapState2Props,
)(Header);

export {
    Enhanced as Header,
};
