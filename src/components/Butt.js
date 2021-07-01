import React from 'react';
import {
    StatusBar, StyleSheet, Dimensions, Text, View, TouchableOpacity, navigation, navigate
} from 'react-native';
import { Title } from 'react-native-paper';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import { useNavigation } from '@react-navigation/native'


const LogButton = () => {

    const navigation = useNavigation()

    return (

        <View style= {{alignItems: 'center'}}>
            <TouchableOpacity style={{
                width: 150, height: 45, backgroundColor: "#5FC2BAA6",
                borderRadius: 20, alignItems: 'flex-start', marginTop: 400, alignItems: 'center', justifyContent: 'center'
            }}
            onPress={() => navigation.navigate('UserInsc')}>

                <Title style={{ color: 'white' }}>S'inscrire</Title>

            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 150, height: 45, backgroundColor: "transparent",
                borderRadius: 20, alignItems: 'flex-start', marginTop: 20, alignItems: 'center', 
            }}>

                <Title style={{ color: 'white' }}>Se connecter</Title>

            </TouchableOpacity>

            
            <TouchableOpacity style={{
                width: 250, height: 45, backgroundColor: "transparent",
                borderRadius: 20, alignItems: 'flex-start', marginTop: 25, alignItems: 'center',  }} 
                onPress={() => navigation.navigate('home')}>

                <Title style={{ color: 'white' }}>Se connecter sans compte</Title>

            </TouchableOpacity>
        </View>
    )
}

export default LogButton;

