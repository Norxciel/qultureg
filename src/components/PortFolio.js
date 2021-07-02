import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PortFolio = () => {

    return (
        <View style={{ flex: 1, backgroundColor: '#1D2942' }}>

            <TouchableOpacity style={{ padding: 5 }}>
                <Icon name="less-than" size={30} color={'white'} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />


            </View>

            <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>


                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />


            </View>

            <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>


                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />


            </View>

            <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>


                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />


            </View>

            <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>


                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />
                <Image style={{ width: "31%", height: 100, borderRadius: 20 }} source={require('../assets/images/profil_pics/profil_jocondeDuck.png')} />


            </View>

        </View>
    )
}

export default PortFolio;