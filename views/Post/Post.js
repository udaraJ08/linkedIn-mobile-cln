import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Theme from '../../assets/css/theme.style'

const Post = () => {
    return (
        <View style={[Theme.mainScreen, Theme.whiteBack]}>

        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: "100%",
        height: "30%",
    },

})

export default Post;
