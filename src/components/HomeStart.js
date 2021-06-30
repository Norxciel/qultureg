import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import Video from './Video';
import Titre from './Titre';
import Butt from './Butt';

const HomeStart = (props) => {

    return (
        <View>
            <StatusBar hidden={true} />
                <Video />
            <View style={{ padding: 8 }}>
                <Titre />

            </View>

            <View style={{ alignItems: 'center' }}>
                <Butt {...props} />
            </View>

        </View>
    )
}

export default HomeStart;

