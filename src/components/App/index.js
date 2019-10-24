import { connect } from 'react-redux';
import App from './App';
import {loadData} from "../../store";

const mapDispatch2Props = dispatch => ({
    loadData: (link) => dispatch(loadData(link)),
});

function mapState2Props(state) {
    return {
        pokemons: state.pokemons,
        loadMore: state.loadMore
    };
};

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props,
)(App);

export {
    Enhanced as App,
};
