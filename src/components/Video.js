import React from 'react';
import {
    StatusBar, StyleSheet, Dimensions, Text, View
} from 'react-native';
import Video from "react-native-video";

const BackVideo = () => {
    return (
        <View>

            <Video
                source={require("../components/video/play.mp4")}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
            />
        </View>
    )
}

export default BackVideo;

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
backgroundVideo: {
height: height,
position: "absolute",
top: 0,
left: 0,
alignItems: "stretch",
bottom: 0,
right: 0,
opacity: .6
}
});