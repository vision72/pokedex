/**
 * @format
 *
 * Entry point of the React Native application.
 * Registers the main application component with the AppRegistry.
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

/**
 * Registers the main application component.
 *
 * AppRegistry is the JS entry point to running all React Native apps.
 * App is the root component of the app.
 * appName is the name of the application as defined in app.json.
 */
AppRegistry.registerComponent(appName, () => App);
