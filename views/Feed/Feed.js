import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Theme from '../../assets/css/theme.style'
import firestore from '@react-native-firebase/firestore';
import { logoutListen } from '../Login/action';
import { Avatar, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../../components/Feed/Post';
import { getAllPostListen } from './action';

const Feed = ({ navigation }) => {

    //SELECTORS
    const { userData } = useSelector(state => state.loginReducer);
    const { loaded, posts } = useSelector(state => state.feedReducer);
    const dispatch = useDispatch();

    //HOOKS
    useEffect(() => {
        dispatch(getAllPostListen());
    }, [posts]);

    const routeToProfile = () => {
        navigation.navigate("profile");
    }

    return (
        <View style={[Theme.mainScreen, Theme.whiteBack]}>
            <View style={[Theme.flex1, Theme.flxDirectionRow]}>
                <View style={[Theme.center, Theme.flex1]}>
                    <TouchableOpacity onPressOut={routeToProfile}>
                        <Avatar source={{ uri: userData ? userData[0]._data.image : "" }} />
                    </TouchableOpacity>
                </View>
                <View style={[Theme.flex4, Theme.justifyCenter]}>
                    <Input placeholder="Search" style={[styles.bgSearch]} variant={"filled"} />
                </View>
                <View style={[Theme.flex1, Theme.center]}>
                    <Icon name="commenting" size={25} />
                </View>
            </View>
            <View style={[Theme.flex8, styles.bgSection, Theme.w100]}>
                <ScrollView style={[Theme.flex1, Theme.pb10]}>
                    {
                        posts.map((e, index) => <Post key={index} data={e} />)
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: "100%",
        height: "30%",
    },
    bgSection: {
        backgroundColor: "#e0d9d3"
    },
    bgSearch: {
        backgroundColor: "#dfe4ea"
    }
})

export default Feed
