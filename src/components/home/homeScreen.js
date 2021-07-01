import React from 'react'
import { StyleSheet, View, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>
            <View style={{ flex: 1, width: windowWidth }}>

                <Text style={{ color: '#5FC2BA', fontSize: 18, marginLeft: 18, marginTop: 10 }}>À la une </Text>

                <View style={{ width: windowWidth, alignItems: 'center' }}>
                    <Image
                        style={{ width: "90%", height: 200, marginBottom: 10, marginTop: 12, borderRadius: 15 }}
                        source={require('../../img/Pieta.jpeg')}
                        resizeMode="cover"
                    />
                </View>

                <Text style={{ color: '#5FC2BA', fontSize: 18, marginLeft: 18, marginBottom: 10 }}>Catégories </Text>

                <ScrollView style={{ flex: 1, backgroundColor: '#1D2942' }}>



                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../img/music.jpeg')}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', position: 'relative', bottom: 65, fontSize: 25 }}>Musique </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../img/peinture.jpeg')}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', position: 'relative', bottom: 65, fontSize: 25 }}>Peinture </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../img/sculpture.jpeg')}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', position: 'relative', bottom: 65, fontSize: 25 }}>Sculpture </Text>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../img/litterature.jpeg')}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', position: 'relative', bottom: 65, fontSize: 25 }}>Litterature </Text>

                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>



    )
}
const styles = StyleSheet.create({
    main_container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});
