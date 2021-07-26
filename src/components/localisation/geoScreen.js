import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Dimensions } from 'react-native';
import Mapbox, { Logger } from '@react-native-mapbox-gl/maps';

// edit logging messages
Logger.setLogCallback(log => {
  const { message } = log;
console.log(log);
  // expected warnings - see https://github.com/mapbox/mapbox-gl-native/issues/15341#issuecomment-522889062
  if (
    message.match('Request failed due to a permanent error: Canceled') ||
    message.match('Request failed due to a permanent error: Socket Closed')
  ) {
    return true;
  }
  return false;
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




MapboxGL.setAccessToken("sk.eyJ1IjoiY291bGV1cmRlc29uIiwiYSI6ImNrcWo5ZzU1aTAwOG0ycG5zc3hnanB0MXIifQ.wRAxTtzMPWrqv329kbF0Cg");


export default function GeoScreen() {

    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');

    Geolocation.getCurrentPosition(info => setLon(info.coords.longitude));
    Geolocation.getCurrentPosition(info => setLat(info.coords.latitude));

    console.log(lon.toString());
    console.log(lat.toString());

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView localizeLabels={true} logoEnabled={false} style={styles.map} >
                    <MapboxGL.Camera zoomLevel={15} animationMode={'flyTo'} animationDuration={1100} centerCoordinate={[parseFloat(lon), parseFloat(lat)]} />
                    <MapboxGL.UserLocation animated={true} renderMode={'native'}/>
                </MapboxGL.MapView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,


    },
    container: {
        height: 300,
        width: windowWidth,
  
    },
    map: {
        width: "100%",
        height: windowHeight - 55,
    }
});