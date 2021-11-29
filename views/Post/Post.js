import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import { width } from 'dom-helpers';
import moment from 'moment';
import { postAddListen } from './action';

export const ASSET = "post/ASSET";
export const NON_ASSET = "pots/NON_ASSET";

const Post = ({ navigation }) => {

    const date = new Date();

    const dispatch = useDispatch();

    //STATE
    const [asset, setAsset] = useState();
    const [description, setDescription] = useState("");
    const [disable, setDisable] = useState(true);
    const [postBtnColor, setPostBtnColor] = useState("#95a5a6");
    const [postType, setPostType] = useState(NON_ASSET);

    useEffect(() => {
        disableHandler()
    }, [description])

    //SELECTORS
    const { userData } = useSelector(state => state.loginReducer);

    //ROUTINGS
    const routeBack = () => {
        navigation.navigate("home");
    }

    //LEAD FUNCTIONS
    const disableHandler = () => {
        if (description.toString().trim().length > 0) {
            setDisable(false);
            setPostBtnColor("#3498db");
        }
        else {
            setDisable(true);
            setPostBtnColor("#95a5a6");
        }
    }

    const validatePost = () => {

        if (description.toString().trim().length > 0) {
            if (asset) {
                setPostType(ASSET);
            } else {
                setPostType(NON_ASSET);
            }
            return true;
        }

        return false;

    }

    const getToday = () => {

        return moment(date).format("MMM Do YY");
    }

    const addPost = () => {

        if (validatePost()) {
            dispatch(postAddListen({
                userID: userData[0]._ref._documentPath._parts[1],
                createdAt: getToday(),
                description,
                asset,
                likeCount: 0
            }, postType))
        }
        routeBack();

    }

    const onCamera = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
        }).then(image => {
            setAsset(image.path);
            setPostType(ASSET);
        }).catch(err => {
            console.log(err);
        });
    }

    const onGallery = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
        }).then(image => {
            setAsset(image.path);
            setPostType(ASSET);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <View style={[Theme.mainScreen, Theme.whiteBack]}>
            <View style={[Theme.flex1, Theme.flxDirectionRow, style.bottomBorder]}>
                <View style={[Theme.justifyCenter, Theme.pl10]}>
                    <TouchableOpacity
                        onPressOut={routeBack}
                    >
                        <Icon name="close" color="#2c3e50" size={27} />
                    </TouchableOpacity>
                </View>
                <View style={[Theme.justifyCenter, Theme.pl10]}>
                    <Text style={[Theme.f20, Theme.fontBold, Theme.txtDark]}>Share Post</Text>
                </View>
                <View style={[Theme.flex1, Theme.justifyCenter, Theme.alignEnd, Theme.pr30]}>
                    <TouchableOpacity
                        disabled={disable}
                        onPressOut={addPost}
                    >
                        <Text style={[Theme.f17, Theme.fontBold, { color: postBtnColor }]}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[Theme.flex1, Theme.flxDirectionRow, Theme.p10]}>
                <View>
                    <Avatar source={{ uri: userData ? userData[0]._data.image : "" }} size={20} />
                </View>
                <View style={[Theme.justifyCenter, Theme.pl10, Theme.justifyEnd]}>
                    <Text style={[Theme.fontBold, Theme.txtDark, Theme.pt30]}>U J Wanniarachchi</Text>
                    <View>
                        <TouchableOpacity style={[style.shareBtn, Theme.radius10, Theme.mt10]}>
                            <Text>
                                <Icon name="globe" color="#2c3e50" size={15} />
                                {" "}Anyone{" "}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[Theme.flex8]}>
                <View style={[Theme.flex1]}>
                    <ScrollView style={[Theme.p10, Theme.pt20,]}>
                        <TextInput
                            onChangeText={e => setDescription(e)}
                            multiline style={[Theme.f17, Theme.flex1]} placeholder={"Write down your idea here..."} />
                    </ScrollView>
                </View>
                <View style={[Theme.flex3]}>
                    <ScrollView style={[Theme.p10, Theme.pt20, Theme.flex5]}>
                        <ImageBackground
                            style={[Theme.w100, { height: 400 }]}
                            source={{ uri: asset }}
                        ></ImageBackground>
                    </ScrollView>
                </View>
            </View>
            <View style={[Theme.flex1, Theme.pl10, Theme.justifyEnd, Theme.pb10]}>
                <View style={[Theme.flxDirectionRow, Theme.mt10]}>
                    <View style={[Theme.flex1, Theme.jstfyBetween, Theme.flxDirectionRow]}>
                        <TouchableOpacity
                            onPressOut={onCamera}
                        >
                            <Icon name="camera" color="#2c3e50" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="video-camera" color="#2c3e50" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPressOut={onGallery}
                        >
                            <Icon name="image" color="#2c3e50" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="ellipsis-h" color="#2c3e50" size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={[Theme.flex1, Theme.flxDirectionRow, Theme.justifyEnd, Theme.alignItemsCenter, Theme.mr10]}>
                        <TouchableOpacity style={[Theme.mr10]}>
                            <Icon name="commenting-o" color="#2c3e50" size={25} />
                        </TouchableOpacity>
                        <Text style={[Theme.txtDark, Theme.fontBold]}>Anyone</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    bottomBorder: {
        borderBottomColor: "#bdc3c7",
        borderBottomWidth: 1
    },
    shareBtn: {
        borderColor: "#bdc3c7",
        borderWidth: 1,
        padding: 5
    },
});

export default Post;
