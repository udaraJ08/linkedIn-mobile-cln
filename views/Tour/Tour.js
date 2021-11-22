import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Theme from '../../assets/css/theme.style'
import TourRoutes from '../../routes/TourRoutes'

const Tour = () => {
    return (
        <>
            <TourRoutes />
            <View style={[style.bottomContainer, Theme.linkedinBack]}>
                <View style={[style.btmLower, Theme.center]}>
                    <Text style={[style.bottomTopic, Theme.whiteFont]}>LET'S GET STARTED</Text>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    bottomContainer: {
        height: 150,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    btmUpper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'flex-end',
    },
    btmLower: {
        flex: 1,
    },
    bottomTopic: {
        fontSize: 25,
        fontWeight: "bold",
    },
    navigationCircle: {
        borderRadius: 500,
        width: 15,
        height: 15,
        backgroundColor: "#ecf0f1",
    }
})


export default Tour
