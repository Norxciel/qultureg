import React, { useContext, useState } from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import Video from './Video';
import Titre from './Titre';
import MyContext from './context/UseContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import Navigator from './navigation/navigator';
import Butt from './Butt';

const HomeStart = (props) => {
    const customer = useContext(MyContext);

    const ref = firestore().collection('UserQultureG');

    function logOut() {
        auth()
            .signOut()
            .then(() => { Alert.alert('User signed out!'); customer.setUser('') });
    }


    ref.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
            const { name, firstname, nickname, email, password, uid } = doc.data();
            list.push({
                id: doc.id,
                lastname: name,
                firstname: firstname,
            });
            // console.log(list);
        });
    }, []);

    return (

        (customer.user != null) ?
            <View>
                <StatusBar hidden={true} />
                <Video />
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Titre />
                    <Text style={{ color: '#5FC2BA', fontSize: 20 }}> Bienvenue {customer.user.uid}</Text>
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

                    <Butt />
                </View>
            </View>

    )
}

export default HomeStart;

