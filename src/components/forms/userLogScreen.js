import React from "react";
import { Text, View, Button, Alert } from "react-native";
import { TextInput } from "react-native-paper";

import { useForm, Controller } from "react-hook-form";
import {yupResolver}from "@hookform/resolvers"
import * as yup from "yup";

const validationSchema = yup.object().shape({
    
})

export default function App() {
	const [pwdVisible, setPwdVisble] = React.useState(false);
	const handlePwdVisible = () => {
		setPwdVisble(!pwdVisible);
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<View>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name="email"
				defaultValue=""
			/>
			{errors.email && <Text>This is required.</Text>}

			<Controller
				control={control}
				rules={{
					maxLength: 100,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						secureTextEntry={true}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name="password"
				defaultValue=""
			/>

			<Button title="Submit" onPress={handleSubmit(onSubmit)} />
		</View>
	);
}
