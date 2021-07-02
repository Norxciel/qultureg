import React from "react";
import {
	Text,
	Image,
	View,
	TouchableOpacity,
	// TextInput,
	KeyboardAvoidingView,
	StyleSheet,
} from "react-native";
import { Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-paper";

// react-native-keyboard-aware-scroll-view

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
	email: yup.string().required("Ce champs est requis."),
	password: yup.string().required("Ce champs est requis."),
});

const InscForm = () => {
	const [pwdVisible, setPwdVisible] = React.useState(false);
	const handlePwdVisible = () => {
		setPwdVisible(!pwdVisible);
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<View style={{ flex: 1, backgroundColor: "#1D2942" }}>
			<KeyboardAvoidingView>
				<TouchableOpacity style={{ padding: 5 }}>
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
						source={require("../assets/images//unDraw/unDraw_Connect.png")}
					/>
				</View>

				<View style={{ alignItems: "center" }}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.input}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								placeholder={"Votre E-mail ici"}
								placeholderTextColor={"#5FC2BA"}
								autoCapitalize="none"
							/>
						)}
						name="email"
						defaultValue=""
					/>
					{errors.email && (
						<Text style={{ color: "#5FC2BA", marginTop: 5 }}>
							{errors.email.message}
						</Text>
					)}

					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.input}
								secureTextEntry={true}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								placeholder={"Votre mot de passe ici"}
								placeholderTextColor={"#5FC2BA"}
								autoCapitalize="none"
								right={
									<TextInput.Icon
										name={pwdVisible ? "eye-off" : "eye"}
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
							{errors.password.message}
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
			</KeyboardAvoidingView>
		</View>
	);
};

export default InscForm;

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
