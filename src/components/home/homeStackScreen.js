import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./homeScreen"
import HomeStart from "../HomeStart"
import Navigator from "../navigation/navigator";
import UserInsc from '../UserInsc';
import ConnexionForm from "../ConnexionForm";

export default function HomeStack({ navigation }) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="homeStart">
            <Stack.Screen name="home" options={{
                headerTransparent: true,
                headerShown: false
            }}>
                {() => <Navigator />}
            </Stack.Screen>
            <Stack.Screen name="homeStart" options={{
                headerTransparent: true,
                headerShown: false
            }}>
                {() => <HomeStart />}
            </Stack.Screen>
            <Stack.Screen name="UserInsc" options={{
                headerTransparent: true,
                headerShown: false
            }}>
                {() => <UserInsc />}
            </Stack.Screen>

            <Stack.Screen name="ConnexionForm" options={{
                headerTransparent: true,
                headerShown: false
            }}>
                {() => <ConnexionForm />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
