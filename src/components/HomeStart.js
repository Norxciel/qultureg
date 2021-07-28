import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native'
import Video from './Video';
import Titre from './Titre';
import Butt from './Butt';
import MyContext from './context/UseContext';
import { TouchableNativeFeedbackComponent } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';

const HomeStart = (props) => {
    const customer = useContext(MyContext);

    const ref = firestore().collection('UserQultureG')
    function logOut() {
        auth()
            .signOut()
            .then(() => {alert('User signed out!'); customer.setUser('')});
    }


    useEffect(() => {
        ref.doc(customer.user).get()
        .then(res => {
            console.log(res.data());
        })
    }, []);
    return (

        (customer.user != null) ?
            <View>
                <StatusBar hidden={true} />
                <Video />
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Titre />
                    <Text style={{ color: '#5FC2BA', fontSize: 20 }}> Bienvenue {customer.user.email}</Text>
                </View>

                <View style={{ alignItems: 'center' }}>

                    <TouchableOpacity style={{
                        width: 150,
                        height: 45,
                        backgroundColor: "#5FC2BAA6",
                        borderRadius: 20,
                        alignItems: "flex-start",
                        marginTop: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                        onPress={() => {
                            logOut();
                        }}>
                        <Text style={{ color: "white" }}>Se déconnecter</Text>
                    </TouchableOpacity>



                </View>

            </View>
            :
            <View>
                <StatusBar hidden={true} />
                <Video />
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Titre />

                </View>

                <View style={{ alignItems: 'center' }}>
                    <Butt {...props} />
                </View>

            </View>


    )
}

export default HomeStart;

