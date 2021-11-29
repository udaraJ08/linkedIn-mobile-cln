import { Avatar } from 'native-base'
import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const Post = ({ data }) => {

    const { asset, createdAt, description, likeCount, userID } = data._data;

    //SELECTORS
    const { userData } = useSelector(state => state.loginReducer);

    useEffect(() => {
        const subscriber = firestore()
            .collection('profile')
            .doc(userID)
            .get();
        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [userID]);

    //LEAD FUNCTIONS
    const assetAvailability = () => {
        console.log(asset);
        console.log(description);
        return !!asset;
    }

    return (
        <>
            <View style={[Theme.whiteBack, Theme.p10, Theme.mt10]}>
                <View style={[Theme.flxDirectionRow]}>
                    <View style={[Theme.center]}>
                        <Avatar source={{ uri: userData ? userData[0]._data.image : "" }} />
                    </View>
                    <View style={[Theme.ml10]}>
                        <Text style={[Theme.fontBold, Theme.txtDark]}>U J Wanniarachchi</Text>
                        <Text style={[Theme.txtSemiDark]}>Software engineer Intern at Fcode Labs</Text>
                        <Text style={[Theme.txtSemiDark]}>{createdAt}211</Text>
                    </View>
                </View>
                <View style={[Theme.pt20]}>
                    <Text style={[Theme.txtDark]}>{description}</Text>
                </View>
                {asset.trim().length > 0 && <View style={[Theme.mt20]}>
                    <ImageBackground
                        style={[Theme.w100, { height: 300 }]}
                        source={{ uri: asset }} resizeMode="cover" />
                </View>}
                <View style={[Theme.mt20, Theme.flxDirectionRow, Theme.alignItemsCenter, style.bottomBorder, Theme.pb10]}>
                    <Icon name="thumbs-up" size={20} />
                    <Text style={[Theme.fontBold, Theme.f12]}>{" "}20 likes</Text>
                </View>
                <View style={[Theme.mt10, Theme.flxDirectionRow]}>
                    <View style={[Theme.flex1, Theme.center]}>
                        <Icon name="thumbs-up" size={17} />
                        <Text style={[Theme.f12, Theme.fontBold]}>Like</Text>
                    </View>
                    <View style={[Theme.flex1, Theme.center]}>
                        <Icon name="commenting-o" size={17} />
                        <Text style={[Theme.f12, Theme.fontBold]}>comment</Text>
                    </View>
                    <View style={[Theme.flex1, Theme.center]}>
                        <Icon name="share" size={15} />
                        <Text style={[Theme.f12, Theme.fontBold]}>share</Text>
                    </View>
                    <View style={[Theme.flex1, Theme.center]}>
                        <Icon name="send" size={15} />
                        <Text style={[Theme.f12, Theme.fontBold]}>send</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    bottomBorder: {
        borderBottomColor: "#bdc3c7",
        borderBottomWidth: 1
    },
    likeBox: {
        justifyContent: "space-evenly",
        alignItems: 'center'
    }
})

export default Post
