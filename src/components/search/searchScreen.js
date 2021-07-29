import React from "react";
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ImageBackground,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";

import { Searchbar } from "react-native-paper";

import { themes } from "../themes/themes";

// import components
import SearchBar from "./searchBar";
import CardItem from "../utils/cardItem";

import firestore from "@react-native-firebase/firestore";

const Search = ({navigation}) => {
	const [data, setData] = React.useState([]);

	const resetData = () => {
		setData([]);
	};

	const [searchQuery, setSearchQuery] = React.useState("");
	const onChangeSearch = (query) => setSearchQuery(query);

	

	React.useEffect(() => {
		// Effect
		if(searchQuery!=""){
			firestore()
			.collection("Articles")
			.get()
			.then((query) => {
				let li = [];
				query.forEach((art) => {
					if (art.data().Genre.startsWith(searchQuery)) {
						console.log("matching!");
						li.push(art.data());
					}
				});
				li.length>0?setData(li):setData([])
				
			})
			.catch((err) => {
				console.log(err);
			});
		}else{
			setData([])
		}
		return () => {
			// Clean Up
		};
	}, [searchQuery]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#1C2942" }}>
			<View style={styles.containerSearch}>
				<Searchbar
					placeholder="Recherche..."
					onChangeText={onChangeSearch}
					value={searchQuery}
					style={{
						width: "90%",
					}}
				/>
			</View>
			{data.length != 0 ? (
				<View style={{flex:5}}>
					<FlatList
						data={data}
						keyExtractor={(item, id) => id}
						numColumns={1}
						renderItem={({ item }) => {
							const { Artiste, Genre, Durée, Article } = item;
							console.log(Object.keys(item));
							return (
								<CardItem
									item={item}
									nav={navigation}
								/>
							);
						}}
					/>
				</View>
			) : (
				<View style={styles.main_container}>
					{/* Container principal  */}
					<View style={styles.containerResult}>
						{/* Container 1 */}
						<View
							style={{
								width: "100%",
								height: "25%",
								flexDirection: "row",
							}}
						>
							{/* Bloc 1 left */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/musique/musique1.jpeg")}
									resizeMode="contain"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 60,
									}}
								>
									MUSIQUE
								</Text>
							</TouchableOpacity>

							{/* bloc 2 right */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/sculpture/Sculpture1.jpeg")}
									resizeMode="contain"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 60,
									}}
								>
									SCULTURE
								</Text>
							</TouchableOpacity>
						</View>
						{/* Container 2 */}
						<View
							style={{
								width: "100%",
								height: "25%",
								flexDirection: "row",
							}}
						>
							{/* Bloc 1 left */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/litterature/litterature1.jpeg")}
									resizeMode="contain"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 50,
									}}
								>
									LITTÉRATURE
								</Text>
							</TouchableOpacity>

							{/* bloc 2 right */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/peinture/peinture5.jpeg")}
									resizeMode="contain"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 60,
									}}
								>
									PEINTURE
								</Text>
							</TouchableOpacity>
						</View>
						{/* Container 3 */}
						<View
							style={{
								width: "100%",
								height: "25%",
								flexDirection: "row",
							}}
						>
							{/* Bloc 1 left */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/Histoire/histoire5.jpeg")}
									resizeMode="contain"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 60,
									}}
								>
									HISTOIRE
								</Text>
							</TouchableOpacity>

							{/* bloc 2 right */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/Theatre/Theatre4.jpeg")}
									resizeMode="center"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 63,
									}}
								>
									THÉÂTRE
								</Text>
							</TouchableOpacity>
						</View>
						{/* Container 1 */}
						<View
							style={{
								width: "100%",
								height: "25%",
								flexDirection: "row",
							}}
						>
							{/* Bloc 1 left */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/Archéologie/Archeo3.jpeg")}
									resizeMode="contain"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 50,
									}}
								>
									ARCHÉOLOGIE
								</Text>
							</TouchableOpacity>

							{/* bloc 2 right */}
							<TouchableOpacity
								style={{
									width: "50%",
									height: "100%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../../assets/images/litterature/litterature1.jpeg")}
									resizeMode="contain"
									style={{
										width: "90%",
										height: "100%",
										opacity: 0.6,
									}}
								/>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										position: "absolute", // child
										bottom: 60, // position where you want
										left: 50,
									}}
								>
									LITTÉRATURE
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	main_container: {
		flex: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	containerSearch: {
		flex: 1,
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
