import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from './src/styles';

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
  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.grayScale.Dark // Dark mode background color
      : Colors.grayScale.White, // Light mode background color
  };

  // Render the SafeAreaView with the appropriate background color
  return <SafeAreaView style={backgroundStyle}></SafeAreaView>;
}

export default App;
