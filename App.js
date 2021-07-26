import React from "react";

import Orientation from "react-native-orientation-locker";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import { Provider as PaperProvider } from "react-native-paper";
import { themes } from "./src/components/themes/themes";

import { NavigationContainer } from "@react-navigation/native";
import HomeStackScreen from "./src/components/home/homeStackScreen";
import HomeScreen from "./src/components/home/homeScreen";

import PageArtiste from "./src/components/PageArtiste";
import PortFolio from "./src/components/PortFolio";
import InscForm from "./src/components/InscForm";
import { SafeAreaView, StatusBar } from "react-native";


export default function App() {
	React.useEffect(() => {
		Orientation.lockToPortrait();
		return () => {};
	}, []);

	return (
	<SafeAreaView style={{ flex: 1, backgroundColor: '#1D2942'}}>
		<StatusBar 
			barStyle={"light-content"}
		/>
		<Provider store={store}>
			<PaperProvider theme={themes.dark}>
				{/* <NavigationContainer>
					<HomeStackScreen />
				</NavigationContainer> */}

			{/* <PageArtiste/> */}
			<HomeScreen/>

			</PaperProvider>

		</Provider>
	</SafeAreaView>
	);
}
