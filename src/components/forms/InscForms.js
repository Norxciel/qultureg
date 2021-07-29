import React, { useState, useEffect } from 'react';
import { Text, Image, View, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useForm, Controller } from "react-hook-form";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import MyContext from '../context/UseContext';
import { useContext } from 'react';



const InscForm = () => {
    const navigation = useNavigation(); // instaurer navigation
    const contexte = useContext(MyContext); // instaurer UseContext

    const [pwdVisible, setPwdVisble] = React.useState(false);
    const [list, setList] = useState('');

    const handlePwdVisible = () => {
        setPwdVisble(!pwdVisible);
    };

    const ref = firestore().collection('UserQultureG');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => addRedrirect(data);

    function addRedrirect(data) {
        addUser(data)

    }

    const addUser = async (data) => {
        auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then((response) => {

                ref.doc(response.user.uid).set({
                    name: data.lastname,
                    firstname: data.firstname,
                    nickname: data.nickname,
                    email: response.user.email,
                }).then(() => { navigation.navigate('homeStart') })

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });

    }

    ref.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
            const { name, firstname, nickname, email, password, uid } = doc.data();
            list.push({
                id: doc.id,
                name, firstname, nickname, email, password, uid
            });
            setList(list)
        });
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>

            <TouchableOpacity style={{ padding: 8 }}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Icon name="less-than" size={30} color={'white'}

                />
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 10, color: '#5FC2BA', fontSize: 30, fontFamily: 'Roboto', marginBottom: 20 }}>Inscription</Text>
            </View>
            <ScrollView>
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
                                placeholder={'Prénom'}
                                placeholderTextColor={'#5FC2BA'}

                            />
                        )}
                        name="lastname"
                        defaultValue=""
                    />
                    {errors.firstname && <Text style={{ color: '#5FC2BA', marginTop: 5 }}>Ce champ est obligatoire</Text>}

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                secureTextEntry={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Nom'}
                                placeholderTextColor={'#5FC2BA'}
                            />
                        )}
                        name="firstname"
                        defaultValue=""
                    />

                    {errors.name && <Text style={{ color: '#5FC2BA', marginTop: 5 }}>This is required.</Text>
                    }

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                secureTextEntry={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Pseudo'}
                                placeholderTextColor={'#5FC2BA'}
                            />
                        )}
                        name="nickname"
                        defaultValue=""
                    />

                    {errors.nickname && <Text style={{ color: '#5FC2BA', marginTop: 5 }}>This is required.</Text>
                    }

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
                                placeholder={'E-mail'}
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
                                placeholder={'Mot de passe'}
                                placeholderTextColor={'#5FC2BA'}
                            />
                        )}
                        name="password"
                        defaultValue=""
                    />

                    {errors.password && <Text style={{ color: '#5FC2BA', marginTop: 5 }}>This is required.</Text>
                    }

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
                                placeholder={'Confirmation mot de passe'}
                                placeholderTextColor={'#5FC2BA'}
                            />
                        )}
                        name="confirmPassword"
                        defaultValue=""
                    />

                    {errors.nickname && <Text style={{ color: '#5FC2BA', marginTop: 5 }}>This is required.</Text>
                    }


                </View>
            </ScrollView>


            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{
                    width: 150, height: 45, backgroundColor: "#5FC2BAA6",
                    borderRadius: 20, alignItems: 'flex-start', marginTop: 30, alignItems: 'center', justifyContent: 'center'
                }} onPress={handleSubmit(onSubmit)} >

                    <Title style={{ color: 'white' }}>S'inscrire</Title>

                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: "90%", height: 250 }} resizeMode={'contain'} source={require('../../assets/images/unDraw/unDraw_Connect.png')} />
            </View>

        </View>
    )
}

export default InscForm;

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
        color: '#5FC2BA',
    },
});