import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, Outlines } from '../../../styles';
import { Text } from '../../atoms';

// Define the interface for the component's props
interface PokemonTypeProps {
  name: string; // The name of the Pokémon type to display
  pokemonType?: Colors.PokemonType; // The type of the Pokémon, optional
}

// Create styles based on the provided properties
const styles = (props?: Pick<PokemonTypeProps, 'pokemonType'>) =>
  StyleSheet.create({
    pokemonType: {
      padding: 4, // Padding inside the view
      alignSelf: 'baseline', // Align the view to the baseline
      borderRadius: Outlines.borderRadius['large'], // Apply large border radius
      backgroundColor: Colors.pokemonType[props?.pokemonType || 'Type'], // Set background color based on the Pokémon type
    },
  });

// Define the PokemonType component
function PokemonType(props: PokemonTypeProps): React.JSX.Element {
  return (
    <View style={styles(props).pokemonType}>
      <Text header="subtitle3">{props.name}</Text>
    </View>
  );
}

export default PokemonType;
