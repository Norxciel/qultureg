import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Button } from "react-native-paper";

import { themes } from "../themes/themes";

export default function RequestAccount() {
	return (
		<View style={[styles.main_container]}>
			<View style={[styles.center,{flex:3}]}>
				<Text style={{ color: "white", fontSize:24, textAlign:"center" }}>
					Pour accéder à cet espace, veuillez vous connecter.
				</Text>
			</View>
			<View style={[styles.center,{flex:3, width:"100%"}]}>
				<Button
                    style={styles.btn}
					mode="contained"
					theme={{
						colors: { primary: themes.dark.colors.secondary },
					}}
				>
					Se connecter
				</Button>
				<Button
                    style={styles.btn}
					theme={{
						colors: { primary: themes.dark.colors.secondary },
					}}
				>
					Je n'ai pas de compte
				</Button>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
    center:{
        alignItems: "center",
		justifyContent: "center",
    },
    btn:{
        width:"70%"
    }
});
