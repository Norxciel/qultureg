import React from "react";
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ImageBackground,
	Image,
	TouchableOpacity
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

				{/* Container principal  */}
				<View style={styles.containerResult}>

					{/* Container 1 */}
					<View style={{width: '100%', height: '25%', flexDirection: 'row'}}>

						{/* Bloc 1 left */}
						<TouchableOpacity style={{ width: '50%', height: '100%',alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/musique/musique1.jpeg')}
								resizeMode= 'contain'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 60
								}}
							>
								MUSIQUE
							</Text>
						</TouchableOpacity>

						{/* bloc 2 right */}
						<TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/sculpture/Sculpture1.jpeg')}
								resizeMode= 'contain'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 60
								}}
							>
								SCULTURE
							</Text>
						</TouchableOpacity>
					</View>
					{/* Container 2 */}
					<View style={{width: '100%', height: '25%', flexDirection: 'row'}}>

						{/* Bloc 1 left */}
						<TouchableOpacity style={{ width: '50%', height: '100%',alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/litterature/litterature1.jpeg')}
								resizeMode= 'contain'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 50
								}}
							>
								LITTÉRATURE
							</Text>
						</TouchableOpacity>

						{/* bloc 2 right */}
						<TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/peinture/peinture5.jpeg')}
								resizeMode= 'contain'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 60
								}}
							>
								PEINTURE
							</Text>
						</TouchableOpacity>
					</View>
					{/* Container 3 */}
					<View style={{width: '100%', height: '25%', flexDirection: 'row'}}>

						{/* Bloc 1 left */}
						<TouchableOpacity style={{ width: '50%', height: '100%',alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/Histoire/histoire5.jpeg')}
								resizeMode= 'contain'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 60
								}}
							>
								HISTOIRE
							</Text>
						</TouchableOpacity>

						{/* bloc 2 right */}
						<TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/Theatre/Theatre4.jpeg')}
								resizeMode= 'center'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6,
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 63
								}}
							>
								THÉÂTRE
							</Text>
						</TouchableOpacity>
					</View>
					{/* Container 1 */}
					<View style={{width: '100%', height: '25%', flexDirection: 'row'}}>

						{/* Bloc 1 left */}
						<TouchableOpacity style={{ width: '50%', height: '100%',alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/Archéologie/Archeo3.jpeg')}
								resizeMode= 'contain'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 50
								}}
							>
								ARCHÉOLOGIE
							</Text>
						</TouchableOpacity>

						{/* bloc 2 right */}
						<TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center'}}>
							<Image 
								source={require('../../assets/images/litterature/litterature1.jpeg')}
								resizeMode= 'contain'
								style={{
									width: '90%',
									height: '100%',
									opacity: 0.6
								}}
							/>
							<Text
								style={{
								fontWeight: 'bold',
								color: 'white',
								position: 'absolute', // child
								bottom: 60, // position where you want
								left: 50
								}}
							>
								LITTÉRATURE
							</Text>
						</TouchableOpacity>
					</View>
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
