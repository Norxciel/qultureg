import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PageArtiste = () => {

    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942', alignItems: 'center' }}>

            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 180, height: 180, borderRadius: 150, marginTop: 60 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 15, color: '#5FC2BA', fontSize: 30, fontFamily: 'Roboto', marginBottom: 20 }}>Appel Entrant</Text>
            </View>

            <View style={{ alignItems: 'center', width: '75%', alignContent: 'center', alignSelf: 'center' }}>
                <Text numberOfLines={8} style={{ color: 'white' }}> Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Sed debitis esse impedit nostrum! Eius, minus eligendi sapiente modi
                    dolores blanditiis neque esse possimus sint! Sapiente dolore voluptatibus quas earum molestiae!
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Sed debitis esse impedit nostrum! Eius, minus eligendi sapiente modi
                    dolores blanditiis neque esse possimus sint! Sapiente dolore voluptatibus quas earum molestiae</Text>

            </View>


            <TouchableOpacity style={{
                width: 250, height: 45, backgroundColor: "#5FC2BAA6",
                borderRadius: 20, alignItems: 'flex-start', marginTop: 65, marginBottom: 20, alignItems: 'center', justifyContent: 'center'
            }}>
                <View style={{flexDirection: 'row'}}>

                    <Title style={{ color: 'white' }}>Envoyer un mail   </Title>
                    <Icon name="mail" size={30} color={'white'} />
                </View>


            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 250, height: 45, backgroundColor: "#5FC2BAA6",
                borderRadius: 20, alignItems: 'flex-start', marginBottom: 20, alignItems: 'center', justifyContent: 'center'
            }}>
                <View style={{flexDirection: 'row'}}>

                    <Title style={{ color: 'white' }}>Portfolio   </Title>
                    <Icon name="diamond-stone" size={30} color={'white'} />
                </View>


            </TouchableOpacity>

        </View>
    )
}

export default PageArtiste;