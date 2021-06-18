import axios from 'axios';
import { endpoint } from '../utils/pokemon.utils';

export async function getPokemon(offset, limit) {
	axios
		.get(endpoint + '?offset=' + offset + '&limit=' + limit)
		.then((response) => response.data)
		.then(function(allPokemon) {
			allPokemon.results.forEach(function(pokemon) {
				fetchPokemonData(pokemon);
			});
		});
}

async function fetchPokemonData(pokemon) {
	let url = pokemon.url;
	axios.get(url).then((response) => response.data).then(function(pokeData) {
		console.log(pokeData);
	});
}
