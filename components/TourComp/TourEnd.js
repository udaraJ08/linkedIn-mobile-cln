import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from "native-base"

const TourEnd = ({ navigation }) => {
    return (
        <View style={[Theme.mainScreen, Theme.center]}>
            <StatusBar animated={true} backgroundColor="#3498db" />
            <Text style={[Theme.f35, Theme.fontThin, Theme.mb10]}>READY TO GO</Text>
            <Text style={[Theme.f15, Theme.fontThin]}>This can be a begining of a
                <Text style={[Theme.fontSemiBold, Theme.linkedInFontColor]}> GREATNESS</Text>
            </Text>
            <>
                <Image
                    style={[styles.mainImage]}
                    source={require('../../assets/images/winners.png')}
                />
            </>
            <Text style={[styles.txtMoto, Theme.fontThin]}>Let's go and{" "}
                <Text style={[Theme.fontSemiBold, Theme.linkedInFontColor]}>Linked In </Text>
                with the world..</Text>
            <TouchableOpacity
                onPressOut={() => navigateToAvatar()}
                style={[
                    Theme.linkedinBack,
                    Theme.btnM50,
                    Theme.center,
                    Theme.flxDirectionRow,
                ]}>
                <Text style={[Theme.whiteFont, Theme.mr10]}>START JOURNEY</Text>
                <Icon name="linkedin-square" color="#ecf0f1" size={20} />
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

})

export default TourEnd
