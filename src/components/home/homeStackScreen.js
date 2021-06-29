import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./homeScreen"

export default function HomeStack() {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
            <Stack.Screen name="home">
                {()=><HomeScreen/>}
            </Stack.Screen>
        </Stack.Navigator>
	);
}
