import React from 'react'
import { View, Text } from 'react-native'
import Theme from '../../assets/css/theme.style'

const Profile = () => {
    return (
        <View style={[Theme.mainScreen, Theme.center]}>
            <Text>This is the PROFILE</Text>
        </View>
    )
}

export default Profile
