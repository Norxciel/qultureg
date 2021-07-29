import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { themes } from "../themes/themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MyContext from "../context/UseContext";
import RequestAccount from "../utils/requestAccount";

const DEFAULT_ICON_SIZE = 28;

export default function SettingScreenArtiste({stackNav}) {
	const context = React.useContext(MyContext);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#1C2942" }}>
			{context.user ? (
				<View style={styles.main_container}>
					<View style={styles.containerTitle}>
						<Text style={styles.Title}>Paramètres</Text>
					</View>
					{/* Container Image + Nom */}
					<View style={styles.containerImage}>
						<Image
							source={require("../../assets/images/profil_pics/profil_jocondeDuck.png")}
							style={{
								width: 120,
								height: 120,
								borderRadius: 60,
							}}
						/>
						<Text style={styles.Nom}>Nom</Text>
						<View style={styles.containerIcon1}></View>
						<View style={styles.containerIcon2}></View>
					</View>

					{/* Container 1 Icon réglage */}
					<View style={styles.containerReglage}>
						<View
							style={{
								width: "50%",
								height: "100%",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<TouchableOpacity
								style={{
									width: 60,
									height: 60,
									borderRadius: 50,
									backgroundColor: "#3B556D",
									justifyContent: "center",
									alignItems: "center",
									marginTop: 10,
									shadowColor: themes.dark.colors.secondary,
									shadowOffset: { width: 0, height: 3 },
									shadowOpacity: 0.5,
									shadowRadius: 2,
									elevation: 5,
								}}
							>
								<Icon
									name="cog-outline"
									size={DEFAULT_ICON_SIZE}
									style={{
										color: themes.dark.colors.secondary,
									}}
								/>
							</TouchableOpacity>
							<Text style={styles.reglage}>RÉGLAGES</Text>
						</View>
						<View
							style={{
								width: "50%",
								height: "100%",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<TouchableOpacity
								style={{
									width: 60,
									height: 60,
									borderRadius: 50,
									backgroundColor: "#3B556D",
									justifyContent: "center",
									alignItems: "center",
									marginTop: 10,
									shadowColor: themes.dark.colors.secondary,
									shadowOffset: { width: 0, height: 3 },
									shadowOpacity: 0.5,
									shadowRadius: 2,
									elevation: 5,
								}}
							>
								<Icon
									name="image-plus"
									size={DEFAULT_ICON_SIZE}
									style={{
										color: themes.dark.colors.secondary,
									}}
								/>
							</TouchableOpacity>
							<Text style={styles.reglage}>AJOUT MÉDIA</Text>
						</View>
					</View>
					<View>
						<View
							style={{
								width: "100%",
								height: "40%",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<TouchableOpacity
								style={{
									width: 70,
									height: 70,
									borderRadius: 50,
									backgroundColor:
										themes.dark.colors.secondary,
									justifyContent: "center",
									alignItems: "center",
									marginTop: 50,
									shadowColor: themes.dark.colors.secondary,
									shadowOffset: { width: 0, height: 3 },
									shadowOpacity: 0.5,
									shadowRadius: 2,
									elevation: 5,
								}}
							>
								<Icon
									name="camera"
									size={40}
									style={{
										color: themes.dark.colors.primary,
										alignItems: "center",
										justifyContent: "center",
									}}
								/>
							</TouchableOpacity>
							<Text style={styles.reglage}>APPAREIL PHOTO</Text>
						</View>
					</View>
				</View>
			) : (
                <RequestAccount stackNav={stackNav}/>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
	},
    center:{
        alignItems:"center",
        justifyContent:"center"
    },
	containerMainInfo: {
		flex: 0.2,
		justifyContent: "center",
		alignItems: "center",
	},
	containerTitle: {
		flex: 0.2,
		justifyContent: "center",
		alignItems: "center",
	},
	containerImage: {
		flex: 0.6,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
	},
	Title: {
		fontSize: 40,
		color: themes.dark.colors.secondary,
	},
	Nom: {
		paddingTop: 10,
		fontSize: 20,
		color: themes.dark.colors.secondary,
	},
	containerIcon1: {
		width: "100%",
		backgroundColor: "red",
	},
	containerReglage: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",

		marginTop: 50,
	},
	reglage: {
		paddingTop: 10,
		color: themes.dark.colors.secondary,
	},
});
