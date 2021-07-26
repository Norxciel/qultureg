/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GeoScreen from './src/components/localisation/geoScreen';

AppRegistry.registerComponent(appName, () => GeoScreen);
