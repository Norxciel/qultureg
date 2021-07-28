import React, { useState, useEffect } from "react";
import {
	Text,
	Image,
	View,
	TouchableOpacity,
	// TextInput,
	StyleSheet,
} from "react-native";
import { Title, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
//
const validationSchema = yup.object().shape({
	email: yup.string().required("Ce champs est requis."),
	password: yup.string().required("Ce champs est requis."),
});

const ConnexionForm = () => {
	const navigation = useNavigation();
	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();
	// Handle user state changes
	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) setInitializing(false);
	}

    // const ref = firestore().collection('UserQultureG');

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	  }, []);

	const [pwdVisible, setPwdVisble] = React.useState(false);
	const handlePwdVisible = () => {
		setPwdVisble(!pwdVisible);
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	if (initializing) return null;
console.log(user);
  if (!user) {
    return (
		<View style={{ flex: 1, backgroundColor: "#1D2942" }}>
		<TouchableOpacity style={{ padding: 5 }}
			onPress={() => {
				navigation.goBack();
			}}>
			<Icon name="less-than" size={30} color={"white"} />
		</TouchableOpacity>

		<View style={{ alignItems: "center" }}>
			<Text
				style={{
					marginTop: 15,
					color: "#5FC2BA",
					fontSize: 45,
					fontFamily: "Roboto",
				}}
			>
				Se connecter
			</Text>
		</View>

		<View style={{ alignItems: "center" }}>
			<Image
				style={{ width: "90%", height: 250 }}
				resizeMode={"contain"}
				source={require("../assets/images/unDraw/unDraw_Connect.png")}
			/>
		</View>

		<View style={{ alignItems: "center" }}>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						theme={{colors:{text:"white"}}}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder={"Votre E-mail ici"}
						placeholderTextColor={"#5FC2BA"}
						autoCapitalize='none'
					/>
				)}
				name="email"
				defaultValue=""
			/>
			{errors.email && (
				<Text style={{ color: "#5FC2BA", marginTop: 5 }}>
					Ce champ est obligatoire
				</Text>
			)}

			<Controller
				control={control}
				rules={{
					maxLength: 100,
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						theme={{colors:{text:"white"}}}
						secureTextEntry={!pwdVisible}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder={"Votre mot de passe ici"}
						placeholderTextColor={"#5FC2BA"}
						autoCapitalize='none'
						right={
							<TextInput.Icon
								name={pwdVisible ? "eye-off" : "eye"}
								color="#5FC2BA"
								onPress={handlePwdVisible}
							/>
						}
					/>
				)}
				name="password"
				defaultValue=""
			/>

			{errors.password && (
				<Text style={{ color: "#5FC2BA", marginTop: 5 }}>
					This is required.
				</Text>
			)}
		</View>

		<View style={{ alignItems: "center" }}>
			<TouchableOpacity
				style={{
					width: 150,
					height: 45,
					backgroundColor: "#5FC2BAA6",
					borderRadius: 20,
					alignItems: "flex-start",
					marginTop: 30,
					alignItems: "center",
					justifyContent: "center",
				}}
				onPress={handleSubmit(onSubmit)}
			>
				<Title style={{ color: "white" }}>Connexion</Title>
			</TouchableOpacity>
		</View>
	</View>
    );
  }

  return (
    <View>
      <Text>Welcome {user}</Text>
    </View>
  );
}

	const onSubmit = (data) => {
		console.log(data);
	};

	

export default ConnexionForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		height: 40,
		width: 300,
		backgroundColor: "#1D2942",
		borderColor: "#5FC2BA",
		borderWidth: 1,
		marginTop: 20,
	},
});
