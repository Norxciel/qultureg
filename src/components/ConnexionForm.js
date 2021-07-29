import React, { useState, useEffect } from "react";
import {
	Text, Image, View, TouchableOpacity, StyleSheet, Alert
} from "react-native";
import { Title, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navigator from "./navigation/navigator";
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

	const onSubmit = (data) => {
		auth().signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			setUser(user);
	
		})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				if (errorCode == 'auth/wrong-password') {
					Alert.alert('Erreur', 'erreur d\'envoi')
				}
				console.log(errorCode, errorMessage);
			});
	};

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
	} else {
		return (<Navigator user={user} />)
	}
}






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
