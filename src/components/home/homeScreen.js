import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default function HomeScreen(){
    return (
        <View style={styles.main_container}>
            <Text>Home page</Text>
            <Text>Home page</Text>
            <Text>Home page</Text>
            <Text>Home page</Text>
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