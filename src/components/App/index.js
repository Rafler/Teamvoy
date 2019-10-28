import { connect } from 'react-redux';
import App from './App';
import {loadData, loadTypes} from "../../store/loadData";

const mapDispatch2Props = dispatch => ({
    loadData: (link) => dispatch(loadData(link)),
    loadTypes: () => dispatch(loadTypes()),
});

function mapState2Props(state) {
    return {
        pokemons: state.pokemons,
        loadMore: state.loadMore,
        types: state.types,
    };
}
const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(App);

export {
    Enhanced as App,
};
