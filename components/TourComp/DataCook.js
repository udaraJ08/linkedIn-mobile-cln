import { StatusBar } from 'native-base'
import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Theme from '../../assets/css/theme.style'
import { useDispatch, useSelector } from 'react-redux'
import { Pulse } from 'react-native-animated-spinkit'
import { userRegisterListen } from '../../views/Tour/action'
import { DEFAULT, SUCCESS } from '../../views/Tour/config.const'

const DataCook = ({ navigation }) => {

    //selector
    const user = useSelector(state => state.tourReducer);
    const dispatch = useDispatch();

    //hooks
    useEffect(() => {
        if (!user.profileCreated) dispatch(userRegisterListen(user))
        routeHandler()
    }, [user]);

    const routeHandler = () => {
        const { profileCreated } = user;

        if (profileCreated)
            navigation.navigate("profile");
    }

    return (
        <View style={[Theme.mainScreen, Theme.center]}>
            <StatusBar animated={true} backgroundColor="#3498db" />
            <Text style={[Theme.f25, Theme.fontThin, Theme.mb10]}>COOKING YOUR PROFILE</Text>
            <Text style={[Theme.f15, Theme.fontThin]}>This will take seconds</Text>
            <Image
                style={[styles.mainImage]}
                source={require('../../assets/images/bbq.png')}
            />
            <Pulse size={70} color="#3498db" />
            <Text style={[Theme.mt20, Theme.f15]}>COOKING YOUR
                <Text style={[Theme.fontSemiBold, Theme.linkedInFontColor, Theme.f25]}> DATA</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        resizeMode: 'contain',
        width: "100%",
        height: "30%",
        alignItems: 'center',
    },

})

export default DataCook
