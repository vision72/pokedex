import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { height, width } from '../utils/pokemon.utils';

export default function Content({ isEnabled, pokemon }) {
	const ComfortableCard = ({ pokemon }) => {
		return (
			<View style={styles.comfortableCardContainer}>
				<Image
					style={{ width: 60, height: 60 }}
					resizeMode="cover"
					source={{ uri: item.sprites.front_shiny }}
				/>
				<Text style={styles.pokemonName}>{item.name}</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{!isEnabled ? <ComfortableCard pokemon={pokemon} /> : <Text>Hello Again</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: height * 0.3,
		width: width * 0.45,
		backgroundColor: 'red',
		display: 'flex',
		alignItems: 'center',
		marginVertical: 34,
		marginHorizontal: 34
	},
	comfortableCardContainer: {},
	pokemonName: {}
});
