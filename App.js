import React from "react";

import { Provider as PaperProvider } from "react-native-paper";
import { themes } from "./src/components/themes/themes";

import Navigator from "./src/components/navigation/navigator";
import HomeStart from './src/components/HomeStart';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackScreen from "./src/components/home/homeStackScreen";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<PaperProvider theme={themes.dark}>
			<NavigationContainer>
				<HomeStackScreen />
			
			</NavigationContainer>

		</PaperProvider>
	);
}
