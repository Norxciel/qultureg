import React from 'react'
import { useContext } from 'react'

import { StyleSheet, View, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';
import MyContext from '../context/UseContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen(props) {
    const contexte = useContext(MyContext)
    console.log(contexte);
    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>
            <View style={{ flex: 1, width: windowWidth }}>

                <Text style={{ color: '#5FC2BA', fontSize: 18, marginLeft: 18, marginTop: 10 }}>À la une </Text>

                <View style={{ width: windowWidth, alignItems: 'center' }}>
                    <Image
                        style={{ width: "90%", height: 200, marginBottom: 10, marginTop: 12, borderRadius: 15 }}
                        source={require('../../assets/images/sculpture/Sculpture2.jpeg')}
                        resizeMode="cover"
                    />
                </View>

                <Text style={{ color: '#5FC2BA', fontSize: 18, marginLeft: 18, marginBottom: 10 }}>Catégories </Text>

                <ScrollView style={{ flex: 1, backgroundColor: '#1D2942' }}>



                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../assets/images/musique/musique_guitare.jpeg')}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', position: 'relative', bottom: 65, fontSize: 25 }}>Musique </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../assets/images/peinture/peinture1.jpeg')}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', position: 'relative', bottom: 65, fontSize: 25 }}>Peinture </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../assets/images/sculpture/Sculpture1.jpeg')}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', position: 'relative', bottom: 65, fontSize: 25 }}>Sculpture </Text>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 100, justifyContent: 'center' }}
                                source={require('../../assets/images/litterature/litterature1.jpeg')}
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
