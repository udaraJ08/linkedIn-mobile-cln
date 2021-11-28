import { Avatar } from 'native-base'
import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';


const Post = () => {

    //SELECTORS
    const { userData } = useSelector(state => state.loginReducer);

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
                        <Text style={[Theme.txtSemiDark]}>28th Nov. 2021</Text>
                    </View>
                </View>
                <View style={[Theme.pt20]}>
                    <Text style={[Theme.txtDark]}>This is the linky's first post.</Text>
                </View>
                <View style={[Theme.mt20]}>
                    <ImageBackground style={[Theme.w100, { height: 200 }]} source={{ uri: "https://c4.wallpaperflare.com/wallpaper/116/883/732/students-studying-motivational-minimalism-wallpaper-preview.jpg" }} resizeMode="cover" />
                </View>
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


            <View style={[Theme.whiteBack, Theme.p10, Theme.mt10]}>
                <View style={[Theme.flxDirectionRow]}>
                    <View style={[Theme.center]}>
                        <Avatar source={{ uri: userData ? userData[0]._data.image : "" }} />
                    </View>
                    <View style={[Theme.ml10]}>
                        <Text style={[Theme.fontBold, Theme.txtDark]}>Mr. Sinister</Text>
                        <Text style={[Theme.txtSemiDark]}>Working at NASA as a janitor</Text>
                        <Text style={[Theme.txtSemiDark]}>28th Nov. 2021</Text>
                    </View>
                </View>
                <View style={[Theme.pt20]}>
                    <Text style={[Theme.txtDark]}>Never Give up No matter what.🐱‍🚀</Text>
                </View>
                <View style={[Theme.mt20]}>
                    <ImageBackground style={[Theme.w100, { height: 200 }]} source={{ uri: "https://wallpaperaccess.com/full/5621348.jpg" }} resizeMode="cover" />
                </View>
                <View style={[Theme.mt20, Theme.flxDirectionRow, Theme.alignItemsCenter, style.bottomBorder, Theme.pb10]}>
                    <Icon name="thumbs-up" size={20} />
                    <Text style={[Theme.fontBold, Theme.f12]}>{" "}50 likes</Text>
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


            <View style={[Theme.whiteBack, Theme.p10, Theme.mt10]}>
                <View style={[Theme.flxDirectionRow]}>
                    <View style={[Theme.center]}>
                        <Avatar source={{ uri: userData ? userData[0]._data.image : "" }} />
                    </View>
                    <View style={[Theme.ml10]}>
                        <Text style={[Theme.fontBold, Theme.txtDark]}>U J Wanniarachchi</Text>
                        <Text style={[Theme.txtSemiDark]}>Software engineer Intern at Fcode Labs</Text>
                        <Text style={[Theme.txtSemiDark]}>28th Nov. 2021</Text>
                    </View>
                </View>
                <View style={[Theme.pt20]}>
                    <Text style={[Theme.txtDark]}>Hi It's meee. 😋😂</Text>
                </View>
                <View style={[Theme.mt20]}>
                    <ImageBackground style={[Theme.w100, { height: 200 }]} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/link-phnx.appspot.com/o/avatar%2Ffile%3A%2Fstorage%2Femulated%2F0%2FAndroid%2Fdata%2Fcom.linkedclone%2Ffiles%2FPictures%2F3327fa6f-61b6-42fe-86b2-e24ded28b76d.jpg?alt=media&token=0694bf9c-5081-4ac4-a64e-64a7a2303a01" }} resizeMode="cover" />
                </View>
                <View style={[Theme.mt20, Theme.flxDirectionRow, Theme.alignItemsCenter, style.bottomBorder, Theme.pb10]}>
                    <Icon name="thumbs-up" size={20} />
                    <Text style={[Theme.fontBold, Theme.f12]}>{" "}120 likes</Text>
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
