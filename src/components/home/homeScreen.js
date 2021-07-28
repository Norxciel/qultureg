import React from 'react'
import { StyleSheet, View, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ color: '#FFF', fontSize: 30}}>QultureG</Text>
            </View>
            <View style={{ flex: 1, width: windowWidth }}>

                {/* Title */}
                <Text style={{ color: '#5FC2BA', fontSize: 18, marginLeft: 18, marginBottom: 10 }}>A la une </Text>

                {/* ScrollView */}
                <ScrollView style={{ flex: 1, backgroundColor: '#1D2942' }}>
                    
                    {/* A LA UNE 1 */}
                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 220, justifyContent: 'center' }}
                                source={require('../../assets/images/musique/musique_guitare.jpeg')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5}}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Article 1</Text>
                        </View>
                    </TouchableOpacity>

                    {/* A LA UNE 2 */}
                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center'}}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 220, justifyContent: 'center'}}
                                source={require('../../assets/images/peinture/peinture1.jpeg')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5}}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Article 2</Text>
                        </View>
                    </TouchableOpacity>

                    {/* A LA UNE 3 */}
                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 220, justifyContent: 'center' }}
                                source={require('../../assets/images/sculpture/Sculpture1.jpeg')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5}}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Article 3</Text>
                        </View>
                    </TouchableOpacity>

                    {/* A LA UNE 4 */}
                    <TouchableOpacity>
                        <View style={{ width: windowWidth, alignItems: 'center' }}>
                            <Image
                                style={{ width: "90%", borderRadius: 15, height: 220, justifyContent: 'center' }}
                                source={require('../../assets/images/sculpture/Sculpture1.jpeg')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5}}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Article 4</Text>
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
