import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { themes } from '../themes/themes';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DEFAULT_ICON_SIZE = 26

export default function SettingScreenArtiste (){
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#1C2942'}}>
            <View  style={styles.main_container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.Title}>Artiste</Text>
                </View>
                {/* Container Image + Nom */}
            <View style={styles.containerImage}>
                <Image 
                    source={require('../../assets/images/profil_pics/profil_jocondeDuck.png')}
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60
                    }}
                />
                <Text style={styles.Nom}>Nom</Text>
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
    },
    containerMainInfo: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    Title: {
        fontSize: 40,
        color : themes.dark.colors.secondary,
    },
    Nom: {
        paddingTop: 10,
        fontSize: 20,
        color: themes.dark.colors.secondary,
    },
})

