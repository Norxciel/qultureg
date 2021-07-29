import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../home/homeScreen";
import SearchScreen from "../search/searchScreen";
import GeoScreen from "../localisation/geoScreen";
import SettingScreen from "../settings/settingsScreen";
import SettingScreenArtiste from "../settings/settingScreenArtiste";
import MyContext from "../context/UseContext";
import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DEFAULT_ICON_SIZE = 26;

export default function Navigator(props, { navigation }) {
	const Tab = createMaterialBottomTabNavigator();
	const theme = useTheme();
	const { user } = props
	return (
		<Tab.Navigator
			initialRouteName="home"
			labeled={false}
			barStyle={{
				backgroundColor: theme.colors.primary
			}}
			activeColor={theme.colors.secondary}
			inactiveColor='#3B556D'
		>
			<Tab.Screen
				name="home"
				options={{
					tabBarIcon: ({ color }) => (
						<Icon
							name="home"
							size={DEFAULT_ICON_SIZE}
							color={color}
						/>
					),
				}}
			>
				{() => <HomeScreen user={user} />}
			</Tab.Screen>
			<Tab.Screen
				name="search"
				options={{
					tabBarIcon: ({ color, focused }) => (
						<Icon
							name="magnify"
							size={DEFAULT_ICON_SIZE}
							color={color}
							style={{}}
						/>
					),
				}}
			>
				{() => <SearchScreen />}
			</Tab.Screen>
			<Tab.Screen
				name="loc"
				options={{
					tabBarIcon: ({ color }) => (
						<Icon
							name="map-marker"
							size={DEFAULT_ICON_SIZE}
							color={color}
						/>
					),
				}}
			>
				{() => <GeoScreen />}
			</Tab.Screen>
			<Tab.Screen
				name="settings"
				options={{
					tabBarIcon: ({ color }) => (
						<Icon
							name="cog"
							size={DEFAULT_ICON_SIZE}
							color={color}
						/>
					),
				}}
			>
				{() => <SettingScreenArtiste />}
			</Tab.Screen>
		</Tab.Navigator>

	);
}
