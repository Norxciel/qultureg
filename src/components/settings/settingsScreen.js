import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { themes } from '../themes/themes';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const DEFAULT_ICON_SIZE = 26

export default function SettingScreen(){
    return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C2942'}}>
        <View style={styles.main_container}>
            <View style={styles.containerTitle}>
                <Text style={styles.Title}>Paramètre</Text>
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
            {/* Container Réglage */}
            <View style={styles.containerReglage}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: '#3B556D',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10, 
                        shadowColor: themes.dark.colors.secondary,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 5,
                    }}
                >
                    <Icon  
                        name="cog-outline"
                        size={DEFAULT_ICON_SIZE}
                        style={{
                            color: themes.dark.colors.secondary,
                        }}
                    />
                </TouchableOpacity>
                <Text style={styles.reglage}>RÉGLAGES</Text>
            </View>
            {/* Container Info */}
        <View  style={styles.containerMainInfo}>
            <View style={styles.containerInfo}>
                <Text style={styles.Prenom}>Prénom</Text>
                <Text style={styles.Nom2}>Nom</Text>
                <Text style={styles.Pseudo}>Pseudo</Text>
            </View>
        
            {/* Container Email */}
            <View style={styles.containerEmail}>
                <Text style={styles.Email}>Email@email.com</Text>
            </View>
        </View>
            {/* Container Préférences */}
            <View style={styles.containerMainPreference}>
                <View style={styles.containerPreference}>
                    <Text style={styles.preferenceTitle}>Vos préférences</Text>
                    <ScrollView 
                        horizontal
                        >
                        {/* Bloc Musique */}
                        <View style={{
                            
                            width: '60%', 
                            height: '90%',
                            backgroundColor: '#1C2942',
                            alignItems: 'center',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 10,
                            marginBottom: 10

                            }}>
                            <Text style={styles.categories}>Musiques</Text>
                            {/* Bloc tag */}
                            <View style={{width: '90%', height: '85%', paddingTop: 10}}>
                                <TouchableOpacity
                                    style={{
                                        width: '50%',
                                        backgroundColor: '#3B556D',
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text style={{color: '#FFF'}}>Hello</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Bloc Peinture */}
                        <View style={{
                            width: '60%', 
                            height: '90%',
                            backgroundColor: '#1C2942',
                            alignItems: 'center',
                            marginStart: 10,
                            marginEnd: 10,
                            marginBottom: 10,
                            marginTop: 10
                            }}>
                            <Text style={styles.categories}>Peintures</Text>
                            {/* Bloc tag */}
                            <View style={{width: '90%', height: '85%', paddingTop: 10}}>
                                <TouchableOpacity
                                    style={{
                                        width: '50%',
                                        backgroundColor: '#3B556D',
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text style={{color: '#FFF'}}>Hello</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Bloc Sculture */}
                        <View style={{
                            width: '60%', 
                            height: '100%',
                            backgroundColor: '#1C2942',
                            alignItems: 'center',
                            marginStart: 10,
                            marginEnd: 10,
                            marginBottom: 10,
                            marginTop: 10
                            }}>
                            <Text style={styles.categories}>Scultures</Text>
                            {/* Bloc tag */}
                            <View style={{width: '90%', height: '85%', paddingTop: 10}}>
                                <TouchableOpacity>
                                    <Text style={{color: '#FFF'}}>Hello</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Bloc Litterature */}
                        <View style={{
                            borderWidth: 1,
                            borderColor: themes.dark.colors.secondary,
                            width: '60%', 
                            height: '100%',
                            backgroundColor: '#1C2942',
                            alignItems: 'center',
                            marginStart: 10,
                            marginEnd: 10,
                            marginBottom: 10,
                            marginTop: 10
                            }}>
                            <Text style={styles.categories}>Scultures</Text>
                            <TouchableOpacity
                                style={{
                                    width: 10,
                                    height: 10
                                }}
                            >
                                <Text>Hello</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
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
    containerReglage: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B556D',
        width: '90%',
    },
    containerEmail: {
        flex: 1,
        backgroundColor: '#3B556D',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderTopWidth: 1, 
        borderColor: themes.dark.colors.secondary,
    },
    containerMainPreference: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerPreference: {
        width: '90%',
        height: '90%',
        backgroundColor: '#3B556D',
        alignItems: 'center'
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
    reglage: {
        paddingTop: 10,
        color: themes.dark.colors.secondary
    },
    Prenom: {
        margin: 10,
        color : '#FFF',
    },
    Nom2: {
        margin: 10,
        color : '#FFF',
    },
    Pseudo: {
        margin: 10,
        color : '#FFF',
    },
    Email: {
        color : '#FFF',
    },
    preferenceTitle: {
        color: '#FFF',
        marginTop: 10,
        fontSize: 18,
    },
    categories: {
        color: '#FFF'
    }
});