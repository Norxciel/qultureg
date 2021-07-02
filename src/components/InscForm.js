import React from 'react';
import { Text, Image, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InscForm = () => {

    function onChangeEmail(text) {
        alert('hi');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>

            <TouchableOpacity style={{ padding: 5 }}>
                <Icon name="less-than" size={30} color={'white'} />
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 15, color: '#5FC2BA', fontSize: 45, fontFamily: 'Roboto' }}>Se connecter</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: "90%", height: 250 }} resizeMode={'contain'} source={require('../assets/images//unDraw/unDraw_Connect.png')} />
            </View>

            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeEmail(text)}
                    value={''}
                    placeholder={'Votre mail ici'}
                    placeholderTextColor={'#5FC2BA'}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeEmail(text)}
                    value={''}
                    placeholder={'Votre mot de passe ici'}
                    placeholderTextColor={'#5FC2BA'}
                    keyboardType="email-address"
                    secureTextEntry
                />
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{
                    width: 150, height: 45, backgroundColor: "#5FC2BAA6",
                    borderRadius: 20, alignItems: 'flex-start', marginTop: 30, alignItems: 'center', justifyContent: 'center'
                }}>

                    <Title style={{ color: 'white' }}>Connexion</Title>

                </TouchableOpacity>
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
    },
});