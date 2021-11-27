import React from 'react'
import { View, Text } from 'react-native'
import Theme from '../../assets/css/theme.style'

const Post = () => {
    return (
        <View style={[Theme.mainScreen, Theme.center]}>
            <Text>This is the POST</Text>
        </View>
    )
}

export default Network
