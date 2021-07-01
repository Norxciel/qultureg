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