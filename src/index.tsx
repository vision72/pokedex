import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  ViewStyle,
  useColorScheme,
} from 'react-native';

import { PokemonType } from './components/molecules';
import { Colors } from './styles';

/**
 * The main App component.
 *
 * This component determines the color scheme (dark or light mode) and sets the background color
 * accordingly using the `SafeAreaView` component from React Native.
 *
 * @returns {React.JSX.Element} The rendered component.
 */
function App(): React.JSX.Element {
  // Determine if the device is in dark mode
  const isDarkMode = useColorScheme() === 'dark';

  // Define the background style based on the color scheme
  const backgroundStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode
        ? Colors.grayScale.Dark // Dark mode background color
        : Colors.grayScale.White, // Light mode background color
    },
  }) as StyleProp<ViewStyle>;

  // Render the SafeAreaView with the appropriate background color
  // Test component designs under SafeAreaView
  return (
    <SafeAreaView style={backgroundStyle}>
      <PokemonType name="Bulbasaur" pokemonType="Grass" />
    </SafeAreaView>
  );
}

export default App;
