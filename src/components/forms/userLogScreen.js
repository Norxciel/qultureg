import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
	getUserByMailPwd,
} from "../../data/schemas/userSchema";

import { setUser } from "../../redux/slices/userSlice";

const validationSchema = yup.object().shape({
	email: yup.string().required("Ce champs est requis !"),
	password: yup.string().required("Ce champs est requis !"),
});

export default function UserLogin({ navigation: nav }) {
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
		alert("Transition to Firebase WIP")
	};

	return (
		<View style={styles.container}>
			<View style={styles.wrap_input}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							placeholder="Votre email"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="email"
					defaultValue=""
				/>
				{errors.email && (
					<Text style={styles.text_error}>
						{errors.email.message}
					</Text>
				)}
			</View>
			<View style={styles.wrap_input}>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							placeholder="Votre mot de passe"
							secureTextEntry={!pwdVisible}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
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
					<Text style={styles.text_error}>
						{errors.password.message}
					</Text>
				)}
			</View>

			<Button mode="contained" onPress={handleSubmit(onSubmit)}>
				Se connecter
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	wrap_input: {
		marginBottom: 20,
		width: "80%",
	},
	input: {},

	text_error: {
		color: "crimson",
	},
});
