import { Avatar } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import Theme from '../../assets/css/theme.style'
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux'
import { profileImageListen } from '../../views/Tour/action'


const UploadAvatar = ({ navigation }) => {

    //hooks
    const dispatch = useDispatch();

    //selectors
    const { user } = useSelector(state => state.loginReducer)

    const [fileObj, setFileObj] = useState("");

    //routings
    const routeToUserDet = () => {
        navigation.navigate("user-details");
    }

    //lead functions
    const onCamera = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setFileObj(image.path);
        });
    }

    const onGallery = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setFileObj(image.path);
        });
    }

    //dispatches
    const submitAvatar = () => {

        if (!!fileObj) {
            dispatch(profileImageListen(fileObj));
            routeToUserDet();
        }
    }

    const imageAvailability = () => {

        return fileObj ? true : false
    }

    return (
        <View style={[Theme.mainScreen, Theme.center, Theme.whiteBack, { paddingTop: 50 }]}>
            <Text style={[style.txtTopic]}>Let's pick you an
                <Text style={[style.txtAvatar, Theme.txtPrimary]}> AVATAR</Text>
            </Text>
            <Avatar
                source={require("../../assets/images/fallback.jpg")}
                size="40"
            />
            <Text />
            <View style={[Theme.flxDirectionRow, Theme.center]}>
                <TouchableOpacity onPressOut={() => onGallery()} style={[
                    { marginRight: 20 },
                    Theme.btnM20,
                    Theme.bgOrange,
                    Theme.flxDirectionRow,
                    Theme.center
                ]}>
                    <Text style={[Theme.whiteFont, Theme.fontThin, Theme.fontBold, { marginRight: 10 }]}> UPLOAD</Text>
                    <Icon name="photo" color="#ecf0f1" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={[
                    Theme.btnM20,
                    Theme.bgDanger,
                    Theme.flxDirectionRow,
                    Theme.center
                ]} onPressOut={() => onCamera()}>
                    <Text style={[Theme.whiteFont, Theme.fontThin, Theme.fontBold, { marginRight: 10 }]}>CAMERA</Text>
                    <Icon name="camera-retro" color="#ecf0f1" size={20} />
                </TouchableOpacity>
            </View>
            <View style={[{ marginTop: 20 }, Theme.center]}>
                <TouchableOpacity
                    onPressOut={submitAvatar}
                    style={[
                        { display: imageAvailability() ? "flex" : "none" },
                        Theme.linkedinBack,
                        style.nextBtn,
                        Theme.center,
                        Theme.flxDirectionRow,
                    ]}>
                    <Text style={[Theme.whiteFont, { marginRight: 10 }]}>NEXT</Text>
                    <Icon name="long-arrow-right" color="#ecf0f1" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPressOut={() => routeToUserDet()}
                    style={[
                        { display: imageAvailability() ? "none" : "flex" },
                        { marginTop: 20 },
                        style.nextBtn,
                        Theme.center,
                        Theme.flxDirectionRow,
                    ]}>
                    <Text style={[Theme.linkedInFontColor, { marginRight: 10 }]}>SKIP</Text>
                    <Icon name="long-arrow-right" color="#3498db" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    profileImage: {
    },
    txtTopic: {
        fontSize: 20,
        marginBottom: 20
    },
    txtAvatar: {
        fontSize: 30,
        fontWeight: "bold",
        color: "crimson"
    },
    nextBtn: {
        marginTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8
    }
});

export default UploadAvatar
