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
            <Text style={[Theme.f35, Theme.fontThin, Theme.mb10, Theme.linkedInFontColor]}>WELCOME USER</Text>
            <Text style={[Theme.f15, Theme.fontThin]}>This will only take seconds</Text>
            <>
                <Image
                    style={[styles.mainImage]}
                    source={require('../../assets/images/success.png')}
                />
            </>
            <Text style={[styles.txtMoto, Theme.fontThin]}>Your
                <Text style={[Theme.fontSemiBold, Theme.linkedInFontColor]}> NETWORK </Text>
                is your
                <Text style={[Theme.fontSemiBold, Theme.linkedInFontColor]}> POWER </Text>
                ...</Text>
            <TouchableOpacity
                onPressOut={() => navigateToAvatar()}
                style={[
                    Theme.linkedinBack,
                    Theme.btnM50,
                    Theme.center,
                    Theme.flxDirectionRow,
                ]}>
                <Text style={[Theme.whiteFont, Theme.mr10]}>NEXT</Text>
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
    }
})

export default WelcomeTour
