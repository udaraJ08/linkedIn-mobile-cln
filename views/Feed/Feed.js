import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Theme from '../../assets/css/theme.style'
import firestore from '@react-native-firebase/firestore';
import { logoutListen } from '../Login/action';

const Feed = ({ navigation }) => {

    //SELECTORS
    const { userData } = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();

    let network;

    try {
        network = userData[0]._data.network;
    } catch (err) {
        dispatch(logoutListen());
    }

    //HOOKS
    useEffect(() => {
        const subscriber = firestore()
            .collection('network')
            .doc(network)
            .onSnapshot(documentSnapshot => {
                console.log('User data: ', documentSnapshot.data());
            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [userData]);

    //REAL-TIME-FETCH

    const routeToProfile = () => {
        navigation.navigate("profile");
    }

    return (
        <View style={[Theme.mainScreen, Theme.center, Theme.whiteBack]}>
            <View style={[Theme.flex1]}></View>
            <View style={[Theme.flex8, Theme.bgDanger]}><Text>asd</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: "100%",
        height: "30%",
    },

})

export default Feed
