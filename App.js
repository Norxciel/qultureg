import React, {useState, useEffect} from "react";
import { SafeAreaView, StatusBar } from "react-native";
import MyContext from "./src/components/context/UseContext";
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

// Auth
import auth from '@react-native-firebase/auth' 

export default function App() {
	React.useEffect(() => {
		Orientation.lockToPortrait();
		return () => { };
	}, []);

	const [user, setUser] = useState('');

useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user=>{
        setUser(user)
        // osef.useContext(MyContext)
    });
    return subscriber; // unsubscribe on unmount
  }, []);
// console.log('user', user.uid);

const isLogged = {
	user: user,
	setUser: () => setUser()
}
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#1D2942" }}>
			<StatusBar barStyle={"light-content"} />
			<Provider store={store}>
				<PaperProvider theme={themes.dark}>
					<NavigationContainer>
						<MyContext.Provider value={isLogged}>
							<HomeStackScreen />
						</MyContext.Provider>
					</NavigationContainer>
				</PaperProvider>
			</Provider>
		</SafeAreaView>
	);
}
