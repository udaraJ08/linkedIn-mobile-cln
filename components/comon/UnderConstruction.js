import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const UnderConstruction = () => {
    return (
        <View>
            <Image
                style={[styles.mainImage]}
                source={require('../../assets/images/construction.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: "100%",
        height: "50%",
    },

})

export default UnderConstruction
