import React from "react";
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ImageBackground,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { themes } from "../themes/themes";

// import components
import SearchBar from "./searchBar";

const Search = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#1C2942" }}>
			<View style={styles.main_container}>
				<View style={styles.containerSearch}>
					<SearchBar />
				</View>
				<View style={styles.containerResult}>
					<ImageBackground
						source={require("../../assets/images/unDraw/unDraw_Search.png")}
						style={styles.image}
					></ImageBackground>
				</View>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	containerSearch: {
		flex: 0.1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: themes.dark.colors.primary,
	},
	containerResult: {
		flex: 0.9,
		width: "100%",
		backgroundColor: themes.dark.colors.primary,
	},
	image: {
		width: "95%",
		height: "80%",
		resizeMode: "cover",
		justifyContent: "center",
		marginTop: 80,
		paddingRight: 30,
	},
});

export default Search;
