import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Theme from '../../assets/css/theme.style'

const Feed = ({ navigation }) => {

    const routeToProfile = () => {
        navigation.navigate("profile");
    }

    return (
        <View style={[Theme.mainScreen, Theme.center, Theme.whiteBack]}>
            <Image
                style={[styles.mainImage]}
                source={require('../../assets/images/construction.png')}
            />
            <Text style={[Theme.f17, Theme.fontBold, Theme.mt10]}>Feed is under development</Text>
            <TouchableOpacity onPressOut={routeToProfile}>
                <Text style={[Theme.f15, Theme.btnM20, Theme.whiteFont, Theme.bgDanger]}>TEST PROFILE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: "100%",
        height: "30%",
    },

})

export default Feed
