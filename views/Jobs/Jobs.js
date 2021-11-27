import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Theme from '../../assets/css/theme.style'

const Jobs = () => {

    return (
        <View style={[Theme.mainScreen, Theme.center, Theme.whiteBack]}>
            <Image
                style={[styles.mainImage]}
                source={require('../../assets/images/construction.png')}
            />
            <Text style={[Theme.f17, Theme.mt10, Theme.fontBold]}>Jobs is under development</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: "100%",
        height: "30%",
    },

})
export default Jobs;
