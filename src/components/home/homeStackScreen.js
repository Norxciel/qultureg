import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import HomeStart from "../HomeStart"
import Navigator from "../navigation/navigator";
import UserLogin from "../forms/userLogScreen"
import UserInsc from '../UserInsc';

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
            <Stack.Screen name="user_login" options={{
                headerTransparent: true,
                headerShown: false
            }}>
                {(props) => <UserLogin {...props} />}
            </Stack.Screen>
            <Stack.Screen name="UserInsc" options={{
                headerTransparent: true,
                headerShown: false
            }}>
                {() => <UserInsc />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
