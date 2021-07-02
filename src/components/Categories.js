import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Title } from 'react-native-paper';

const Categories = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942', alignItems: 'center', alignContent: 'center' }}>

            <TouchableOpacity style={{
                width: "90%", height: 80, backgroundColor: "#5FC2BAA6",
                borderRadius: 20, alignItems: 'flex-start', alignItems: 'center', justifyContent: 'center', marginTop: 50, flexDirection: 'row',
            }}>
                <ImageBackground style={{ width: "100%", height: 80, justifyContent: 'center', alignItems: 'center' }}  resizeMode='cover' source={require('../assets/images/musique/musique_instruments.jpeg')}>
                    <Title style={{ color: 'white' }}>Rock</Title>

                </ImageBackground>



            </TouchableOpacity>


        </View>
    )
}

export default Categories;