import { combineReducers } from 'redux';

const INITIAL_STATE = {
	pokemons: []
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	pokemons: pokemonReducer
});
