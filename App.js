import React from "react";

import Orientation from "react-native-orientation-locker";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import { Provider as PaperProvider } from "react-native-paper";
import { themes } from "./src/components/themes/themes";

import { NavigationContainer } from "@react-navigation/native";
import HomeStackScreen from "./src/components/home/homeStackScreen";

import PageArtiste from "./src/components/PageArtiste";
import PortFolio from "./src/components/PortFolio";
import ConnexionForm from "./src/components/ConnexionForm";
import InscForm from "./src/components/forms/InscForms";

export default function App() {
	React.useEffect(() => {
		Orientation.lockToPortrait();
		return () => {};
	}, []);

	return (
		<Provider store={store}>
			<PaperProvider theme={themes.dark}>
				<NavigationContainer>
					<HomeStackScreen />
				</NavigationContainer>

			{/* <ConnexionForm/> */}
			{/* <InscForm/> */}

			{/* <Categories/> */}

			</PaperProvider>

		</Provider>
	);
}
