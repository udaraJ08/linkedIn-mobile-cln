import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux'
import { Avatar } from 'native-base';
import { height } from 'dom-helpers';

const Post = ({ navigation }) => {

    //SELECTORS
    const { userData } = useSelector(state => state.loginReducer);

    //ROUTINGS
    const routeBack = () => {
        navigation.navigate("home");
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
                    <Text style={[Theme.f17, Theme.fontBold, Theme.linkedInFontColor]}>Post</Text>
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
            <View style={[Theme.flex6]}>
                <ScrollView style={[Theme.p10, Theme.pt20]}>
                    <TextInput multiline style={[Theme.f17, Theme.flex1]} placeholder={"Write down your idea here..."} />
                </ScrollView>
            </View>
            <View style={[Theme.flex1, Theme.pl10, Theme.justifyEnd, Theme.pb10]}>
                <View style={[Theme.flxDirectionRow, Theme.mt10]}>
                    <View style={[Theme.flex1, Theme.jstfyBetween, Theme.flxDirectionRow]}>
                        <TouchableOpacity>
                            <Icon name="camera" color="#2c3e50" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="video-camera" color="#2c3e50" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
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
