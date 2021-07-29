import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import {createStackNavigator} from "@react-navigation/stack"

// Screens
import DetailScreen from "../PageArtiste"
import SearchScreen from "../search/searchScreen"

export default function StackSearchScreen(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialPage="search"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="search"
            >
                {(props)=><SearchScreen {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="detail">
                {(props)=><DetailScreen {...props}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}