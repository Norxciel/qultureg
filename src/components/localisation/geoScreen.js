import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function GeoScreen(){
    return (
        <View style={styles.main_container}>
            <Text>GeoScreen page</Text>
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