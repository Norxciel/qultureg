import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

// Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

// Themes
import { Provider as PaperProvider } from "react-native-paper";
import { themes } from "./src/components/themes/themes";

// Locker
import Orientation from "react-native-orientation-locker";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import HomeStackScreen from "./src/components/home/homeStackScreen";

export default function App() {
	React.useEffect(() => {
		Orientation.lockToPortrait();
		return () => {};
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#1D2942" }}>
			<StatusBar barStyle={"light-content"} />
			<Provider store={store}>
				<PaperProvider theme={themes.dark}>
					<NavigationContainer>
						<HomeStackScreen />
					</NavigationContainer>
				</PaperProvider>
			</Provider>
		</SafeAreaView>
	);
}
