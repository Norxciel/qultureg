import React from 'react';
import { Text, Image, View, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { TextInput } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup";

const validationSchema = yup.object().shape({

})


const ConnexionForm = () => {
    const navigation = useNavigation();

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

    function onChangeEmail(text) {
        alert('hi');
    }

    return (
        
        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>
            <StatusBar hidden={true} />
            <TouchableOpacity style={{ padding: 5 }}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Icon name="less-than" size={30} color={'white'} />
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 15, color: '#5FC2BA', fontSize: 45, fontFamily: 'Roboto' }}>Se connecter</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: "90%", height: 250 }} resizeMode={'contain'} source={require('../assets/images/unDraw/unDraw_Connect.png')} />
            </View>

            <View style={{ alignItems: 'center' }}>
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
                            placeholder={' Votre E-mail ici'}
                            placeholderTextColor={'#5FC2BA'}

                        />
                    )}
                    name="email"
                    defaultValue=""
                />
                {errors.email && <Text style={{ color: '#5FC2BA', marginTop: 5 }}>Ce champ est obligatoire</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={' Votre mot de passe ici'}
                            placeholderTextColor={'#5FC2BA'}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />

                {errors.password && <Text style={{ color: '#5FC2BA', marginTop: 5 }}>This is required.</Text>
                }
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{
                    width: 150, height: 45, backgroundColor: "#5FC2BAA6",
                    borderRadius: 20, alignItems: 'flex-start', marginTop: 45, alignItems: 'center', justifyContent: 'center'
                }} onPress={handleSubmit(onSubmit)} >

                    <Title style={{ color: 'white' }}>Connexion</Title>

                </TouchableOpacity>
            </View>



        </View>
    )
}

export default ConnexionForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: '#5FC2BA',
        borderWidth: 1,
        marginTop: 20,
        color: "#5FC2BA"
    },
});