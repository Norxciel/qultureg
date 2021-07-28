import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

// Style
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// Form
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const validateSchema = yup.object().shape({
	firstName: "",
	lastName: "",
	pseudo: "",
	email: "",
	password: "",
});

export default function UserUpdate() {
    const [pwdVisible, setPwdVisible] = React.useState(false)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validateSchema),
	});

	const onSubmit = (data) => {
		const {} = data;
		console.log("Update user!\n");
		// console.log(data);
	};

	return (
		<View style={styles.main_container}>
			<View
				style={[
					styles.center,
					{
						flex: 1,
					},
				]}
			>
				<Text style={styles.text_header}>Utilisateur</Text>
			</View>
			<View
				style={[
					styles.center,
					{
						flex: 5,
					},
				]}
			>
				<ScrollView
					style={{ width: "80%" }}
				>
					<View style={{}}>
						<View style={styles.wrap_inp}>
							<Controller
								control={control}
								name="firstName"
								defaultValue="Benjamin"
								render={({
									field: { onChange, onBlur, value },
								}) => {
									return (
										<TextInput
											style={styles.inp}
											placeholder="Prénom"
											underlineColor="#ADF1D2"
											onBlur={onBlur}
											onChangeText={onChange}
											value={value}
										/>
									);
								}}
							/>
							{errors.firstName && (
								<Text>{errors.firstName.message}</Text>
							)}
						</View>
						<View style={styles.wrap_inp}>
							<Controller
								control={control}
								name="lastName"
								defaultValue="RAULT"
								render={({
									field: { onChange, onBlur, value },
								}) => {
									return (
										<TextInput
											style={styles.inp}
											placeholder="Nom"
											underlineColor="#ADF1D2"
											onBlur={onBlur}
											onChangeText={onChange}
											value={value}
										/>
									);
								}}
							/>
							{errors.lastName && (
								<Text>{errors.lastName.message}</Text>
							)}
						</View>
						<View style={styles.wrap_inp}>
							<Controller
								control={control}
								name="pseudo"
								defaultValue="norxciel"
								render={({
									field: { onChange, onBlur, value },
								}) => {
									return (
										<TextInput
											style={styles.inp}
											placeholder="Pseudo"
											underlineColor="#ADF1D2"
											onBlur={onBlur}
											onChangeText={onChange}
											value={value}
										/>
									);
								}}
							/>
							{errors.pseudo && (
								<Text>{errors.pseudo.message}</Text>
							)}
						</View>
						<View style={styles.wrap_inp}>
							<Controller
								control={control}
								name="email"
								defaultValue="b_rault@outlook.fr"
								render={({
									field: { onChange, onBlur, value },
								}) => {
									return (
										<TextInput
											style={styles.inp}
											placeholder="Email"
											underlineColor="#ADF1D2"
											onBlur={onBlur}
											onChangeText={onChange}
											value={value}
										/>
									);
								}}
							/>
							{errors.email && (
								<Text>{errors.email.message}</Text>
							)}
						</View>
						<View style={styles.wrap_inp}>
							<Controller
								control={control}
								name="password"
								defaultValue="JeSuis1Mdp!"
								render={({
									field: { onChange, onBlur, value },
								}) => {
									return (
										<TextInput
											style={styles.inp}
                                            secureTextEntry={pwdVisible}
                                            right={<Icon name="eye"/>}
											placeholder="Mot de passe"
											underlineColor="#ADF1D2"
											onBlur={onBlur}
											onChangeText={onChange}
											value={value}
										/>
									);
								}}
							/>
							{errors.password && (
								<Text>{errors.password.message}</Text>
							)}
						</View>
					</View>
				</ScrollView>
				<Button
					style={styles.btn}
					mode="contained"
					theme={{ colors: { primary: "#ADF1D2" } }}
					onPress={handleSubmit(onSubmit)}
				>
					Modifier
				</Button>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		width: "100%",
	},
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	wrap_inp: {
		marginBottom: 20,
		// width: "80%",
	},
	inp: {},
	btn: {
		width: "100%",
	},

	// Delimiter
	text_header: {
		color: "#ADF1D2",
		fontSize: 40,
		fontWeight: "bold",
	},

	text_error: {
		color: "crimson",
	},
});
