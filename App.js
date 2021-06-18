/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, FlatList, useColorScheme, ToastAndroid } from 'react-native';

import { Colors, DebugInstructions, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/header';
import Content from './src/components/content';

import { getPokemon } from './src/services/pokemon.api';

const App = () => {
	const [ isEnabled, setIsEnabled ] = useState(false);
	const [ pokemons, setPokemons ] = useState([]);
	const [ offset, setOffset ] = useState(0);

	const toggleSwitch = () => {
		setIsEnabled(!isEnabled);
	};

	const weNeedSomePokemons = async () => {
		const pokemons = await getPokemon(offset, 20);

		if (pokemons) {
			setPokemons(pokemons);
		} else {
			ToastAndroid.show(pokemons, ToastAndroid.SHORT);
		}
	};

	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
	};

	useEffect(() => {
		weNeedSomePokemons();
	}, []);

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<FlatList
				data={pokemons}
				keyExtractor={(item) => item.name}
				renderItem={(item) => (
					<View key={item.index}>
						<Content isEnabled={isEnabled} pokemon={item} />
					</View>
				)}
				onEndReachedThreshold={0.01}
				onEndReached={(info) => {
					loadMoreResults(info);
				}}
				ListHeaderComponent={() => <Header isEnabled={isEnabled} toggleSwitch={() => toggleSwitch()} />}
				stickyHeaderIndices={[ 0 ]}
				numColumns={isEnabled ? 1 : 2}
				columnWrapperStyle={{ justifyContent: 'space-around' }}
				key={isEnabled ? 'h' : 'v'}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600'
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400'
	},
	highlight: {
		fontWeight: '700'
	}
});

export default App;
