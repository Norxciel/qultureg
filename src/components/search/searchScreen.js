import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Search(){
    return (
        <View style={styles.main_container}>
            <Text>Search page</Text>
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