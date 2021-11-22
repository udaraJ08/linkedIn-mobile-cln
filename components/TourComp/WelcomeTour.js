import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeTour = ({ navigation }) => {

    ///routing
    const navigateToAvatar = () => {
        navigation.navigate("uploadAvatar");
    }

    return (
        <View style={[Theme.mainScreen, Theme.center]}>
            <Text style={[styles.mainTopic, Theme.fontThin]}>Welcome user !</Text>
            <Text style={[styles.txtMoto, Theme.fontThin]}>This will only take seconds</Text>
            <>
                <Image
                    style={[styles.mainImage]}
                    source={require('../../assets/images/success.png')}
                />
            </>
            <Text style={[styles.txtMoto, Theme.fontThin]}>Your network is your power...</Text>
            <TouchableOpacity
                onPressOut={() => navigateToAvatar()}
                style={[
                    Theme.linkedinBack,
                    styles.nextBtn,
                    Theme.center,
                    Theme.flxDirectionRow,
                ]}>
                <Text style={[Theme.whiteFont, { marginRight: 10 }]}>NEXT</Text>
                <Icon name="long-arrow-right" color="#ecf0f1" size={20} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        resizeMode: 'contain',
        width: "100%",
        height: "50%",
        alignItems: 'center',
    },
    mainTopic: {
        fontSize: 40,
    },
    txtMoto: {
        fontSize: 17,
    },
    nextBtn: {
        marginTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8
    }

})

export default WelcomeTour
