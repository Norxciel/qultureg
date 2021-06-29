import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function SettingScreen(){
    return (
        <View style={styles.main_container}>
            <Text>SettingScreen page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});