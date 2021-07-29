import React from "react";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PageArtiste = (props) => {
	const { navigation, route } = props;
	const Article = route.params.item;

	console.log(Article.Article);

	return (
		<View style={{ flex: 1, backgroundColor: "#1D2942" }}>
			<TouchableOpacity
				style={{ padding: 5 }}
				onPress={() => {
					navigation.goBack();
				}}
			>
				<Icon name="less-than" size={30} color={"white"} />
			</TouchableOpacity>

			{/* <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 180, height: 180, borderRadius: 150, marginTop: 60 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
            </View> */}

			<View style={{ alignItems: "center" }}>
				<Text
					style={{
						marginTop: 15,
						color: "#5FC2BA",
						fontSize: 30,
						fontFamily: "Roboto",
						marginBottom: 20,
					}}
				>
					{Article.Artiste}
				</Text>
			</View>

			<ScrollView
            >
				<View style={{paddingHorizontal:15}}>
					<Text style={{ color: "white", textAlign: "justify" }}>
						{Article.Article}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default PageArtiste;
