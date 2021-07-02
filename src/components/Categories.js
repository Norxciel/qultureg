import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Categories = () => {
    return (

        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>
            <TouchableOpacity style={{ padding: 5 }}>
                <Icon name="less-than" size={30} color={'white'} />
            </TouchableOpacity>

            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        width: "90%", height: 80, backgroundColor: "#5FC2BAA6",
                        borderRadius: 20, alignItems: 'flex-start', alignItems: 'center', justifyContent: 'center', marginTop: 15, flexDirection: 'row',
                    }}>
                        <ImageBackground style={{ width: "100%", height: 80, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover' source={require('../assets/images/musique/Rock.jpeg')}>
                            <Title style={{ color: 'white' }}>Rock</Title>

                        </ImageBackground>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        width: "90%", height: 80, backgroundColor: "#5FC2BAA6",
                        borderRadius: 20, alignItems: 'flex-start', alignItems: 'center', justifyContent: 'center', marginTop: 50, flexDirection: 'row',
                    }}>
                        <ImageBackground style={{ width: "100%", height: 80, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover' source={require('../assets/images/musique/Rock.jpeg')}>
                            <Title style={{ color: 'white' }}>Techno</Title>

                        </ImageBackground>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        width: "90%", height: 80, backgroundColor: "#5FC2BAA6",
                        borderRadius: 20, alignItems: 'flex-start', alignItems: 'center', justifyContent: 'center', marginTop: 50, flexDirection: 'row',
                    }}>
                        <ImageBackground style={{ width: "100%", height: 80, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover' source={require('../assets/images/musique/Rock.jpeg')}>
                            <Title style={{ color: 'white' }}>Jazz</Title>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: "90%", height: 80, backgroundColor: "#5FC2BAA6",
                        borderRadius: 20, alignItems: 'flex-start', alignItems: 'center', justifyContent: 'center', marginTop: 50, flexDirection: 'row',
                    }}>
                        <ImageBackground style={{ width: "100%", height: 80, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover' source={require('../assets/images/musique/Rock.jpeg')}>
                            <Title style={{ color: 'white' }}>Blues</Title>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: "90%", height: 80, backgroundColor: "#5FC2BAA6",
                        borderRadius: 20, alignItems: 'flex-start', alignItems: 'center', justifyContent: 'center', marginTop: 50, flexDirection: 'row',
                    }}>
                        <ImageBackground style={{ width: "100%", height: 80, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover' source={require('../assets/images/musique/Rock.jpeg')}>
                            <Title style={{ color: 'white' }}>Country</Title>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: "90%", height: 80, backgroundColor: "#5FC2BAA6",
                        borderRadius: 20, alignItems: 'flex-start', alignItems: 'center', justifyContent: 'center', marginTop: 50, flexDirection: 'row',
                    }}>
                        <ImageBackground style={{ width: "100%", height: 80, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover' source={require('../assets/images/musique/Rock.jpeg')}>
                            <Title style={{ color: 'white' }}>Rap</Title>

                        </ImageBackground>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>


    )
}

export default Categories;