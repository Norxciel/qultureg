import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';


const UserInsc = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942', alignItems: 'center' }}>

            <View style={{ width: 100, height: 100, alignItems: 'center' }}>
                <Image style={{ width: 300, height: 300 }} source={require('../img/logo_women.png')} />
            </View>

            <View>
                <TouchableOpacity style={{
                    width: 200, height: 45, backgroundColor: "#5FC2BAA6",
                    borderRadius: 20, alignItems: 'flex-start', marginTop: 350, alignItems: 'center', justifyContent: 'center', marginBottom: 35
                }}>

                    <Title style={{ color: 'white' }}>Compte Utilisateur</Title>

                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{
                    width: 200, height: 45, backgroundColor: "#5FC2BAA6",
                    borderRadius: 20, alignItems: 'flex-start', marginTop: 0, alignItems: 'center', justifyContent: 'center'
                }}>

                    <Title style={{ color: 'white' }}>Compte Artiste</Title>

                </TouchableOpacity>
            </View>


        </View>
    )
}

export default UserInsc;