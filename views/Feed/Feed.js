import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Theme from '../../assets/css/theme.style'

const Feed = ({ navigation }) => {

    const routeToProfile = () => {
        navigation.navigate("profile");
    }

    return (
        <View style={[Theme.mainScreen, Theme.center, Theme.whiteBack]}>
            <Text>This is the FEED</Text>
            <TouchableOpacity onPressOut={routeToProfile}>
                <Text style={[Theme.f35]}>PROFILE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Feed
