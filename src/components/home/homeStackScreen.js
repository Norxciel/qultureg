import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStart from "../HomeStart";
import Navigator from "../navigation/navigator";
import UserLogin from "../forms/userLogScreen";
import UserInsc from "../UserInsc";
import ConnexionForm from "../ConnexionForm";
import InscForms from "../forms/InscForms";
import auth from "@react-native-firebase/auth";
import MyContext from "../context/UseContext";

export default function HomeStack({ navigation }) {
	const osef = useContext(MyContext);

	const Stack = createStackNavigator();
	const [user, setUser] = useState("");

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged((user) => {
			setUser(user ?? "");
			// osef.useContext(MyContext)
		});
		return subscriber; // unsubscribe on unmount
	}, []);
	// console.log('user', osef);

	return (
		<Stack.Navigator initialRouteName="homeStart">
			<Stack.Screen
				name="home"
				options={{
					headerTransparent: true,
					headerShown: false,
				}}
			>
				{(props) => {
					return <Navigator {...props} />;
				}}
			</Stack.Screen>
			<Stack.Screen
				name="homeStart"
				options={{
					headerTransparent: true,
					headerShown: false,
				}}
			>
				{() => <HomeStart />}
			</Stack.Screen>

			<Stack.Screen
				name="UserInsc"
				options={{
					headerTransparent: true,
					headerShown: false,
				}}
			>
				{() => <UserInsc />}
			</Stack.Screen>

			<Stack.Screen
				name="ConnexionForm"
				options={{
					headerTransparent: true,
					headerShown: false,
				}}
			>
				{() => <ConnexionForm />}
			</Stack.Screen>

			<Stack.Screen
				name="InscForms"
				options={{
					headerTransparent: true,
					headerShown: false,
				}}
			>
				{() => <InscForms />}
			</Stack.Screen>
		</Stack.Navigator>
	);
}
