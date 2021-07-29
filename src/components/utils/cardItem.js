import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Card, Button } from "react-native-paper";

export default function CardItem(props) {
	const { item, nav } = props;
	const { Artiste: title, Genre: category } = item;
	return (
		<Card style={styles.main_container}>
			<Card.Title title={title} subtitle={category} />
			<Card.Actions>
				<Button
					style={styles.btn}
					mode="contained"
					onPress={() => nav.navigate("detail", {item:item})}
					theme={{ colors: { primary: "lavender" } }}
				>
					Lire l'article
				</Button>
			</Card.Actions>
		</Card>
	);
}
const styles = StyleSheet.create({
	main_container: {
		width: "100%",
		marginTop: 30,
		marginBottom: 15,
	},
	btn: {
		width: "100%",
	},
});
