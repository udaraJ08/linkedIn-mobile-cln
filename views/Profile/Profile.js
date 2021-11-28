import React, { useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, ImageBackground, Text, StyleSheet } from 'react-native'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { logoutListen } from '../Login/action';
const cover = { uri: "https://wallpaper.dog/large/5477484.jpg" };

const Profile = ({ navigation }) => {

    //SELECTORS
    const { userData, logged } = useSelector(state => state.loginReducer);
    const orUserData = userData ? userData[0]._data : null;

    const fallBack = { uri: orUserData ? orUserData.image : "" };

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(logged);
        if (!logged)
            routeToLogin();
    }, [logged]);

    const routeToHome = () => {
        navigation.navigate("home");
    }

    const routeToLogin = () => {
        navigation.navigate("login");
        // navigation.popToTop();
    }

    //Dispatch
    const logoutUser = () => {
        routeToLogin();
        dispatch(logoutListen());
    }

    //LEAD FUNCTIONS

    return (
        <View style={[Theme.mainScreen, Theme.whiteBack]}>
            <View style={[{ height: 80 }, Theme.flxDirectionRow]}>
                <View style={[Theme.flex1, Theme.center, Theme.mr20]}>
                    <TouchableOpacity onPressOut={routeToHome}>
                        <Icon name="long-arrow-left" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={[Theme.flex3, Theme.center, Theme.flxDirectionRow]}>
                    <Icon name="search" size={20} />
                    <TextInput
                        value="U Janith Wanniarachchi"
                        style={[Theme.whiteBack, Theme.w100]} />
                    <View style={[Theme.flex4]}></View>
                </View>
                <View style={[Theme.flex1, Theme.ml20, Theme.center]}>
                    <TouchableOpacity
                        onPressOut={logoutUser}
                    >
                        <Icon name="cog" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[Theme.flex8]}>
                <ScrollView>
                    <View>
                        <ImageBackground
                            style={[
                                Theme.w100,
                                Theme.bgDanger,
                                Theme.pl20,
                                style.imgBackground
                            ]}
                            source={cover} resizeMode="cover">
                            <Avatar
                                style={[{ borderColor: "#ecf0f1", borderWidth: 2 }]}
                                source={fallBack} size={120} />
                        </ImageBackground>
                    </View>
                    <View style={[Theme.p10]}>
                        <View>
                            <Text style={[Theme.f25, Theme.fontSemiBold, Theme.txtDark]}>
                                {orUserData ? orUserData.firstName : "unknown"}{" "}{orUserData ? orUserData.lastName : ""}
                            </Text>
                            <Text style={[Theme.f15, Theme.txtDark]}>{orUserData ? orUserData.designation : "unknown"}</Text>
                        </View>
                        <View>
                            <Text style={[Theme.mt10, style.txtTalk]}>
                                Talks about
                                {
                                    orUserData &&
                                    orUserData.skills.map((e, index) => <Text key={index} style={[Theme.mr50]}>#{e}{" "}</Text>)

                                }
                            </Text>
                        </View>
                        <View style={[{ alignItems: 'flex-start' }, Theme.flxDirectionRow, Theme.mt10]}>
                            {
                                orUserData &&
                                orUserData.education.map((e, index) => {
                                    return <View key={index} style={[Theme.mt10, Theme.mr10, style.txtTalk, Theme.flxDirectionRow, Theme.center]}>
                                        <Icon
                                            color={"#2f3640"}
                                            style={[{ marginRight: 5 }]} name="circle" size={5} />
                                        <Text style={[Theme.txtDark, Theme.f12]}>{e}</Text>
                                    </View>
                                })

                            }
                        </View>
                        <View style={[Theme.flxDirectionRow]}>
                            <Text style={[style.mr4]}>Colombo,</Text>
                            <Text style={[style.mr4]}>Western,</Text>
                            <Text style={[style.mr4]}>Sri Lanka</Text>
                        </View>
                        <View style={[Theme.flxDirectionRow, Theme.mt20]}>
                            <View style={[Theme.flex5, Theme.flxDirectionRow, Theme.alignItemsCenter]}>
                                <Text style={[Theme.fontBold, Theme.linkedInFontColor]}>1590 Followers</Text>
                                <Icon
                                    color={"#596275"}
                                    style={[style.mr4, style.ml4]} name="circle" size={3} />
                                <Text style={[Theme.fontBold, Theme.linkedInFontColor]}>500+ connections</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Icon
                                        color={"#596275"}
                                        style={[style.mr4, style.ml4]} name="pencil" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[Theme.flxDirectionRow]}>
                            <TouchableOpacity style={[Theme.btnM50, Theme.mr10, Theme.linkedinBack]}>
                                <Text style={[Theme.whiteFont, Theme.fontBold, Theme.f15]}>Open to</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Theme.btnM20, Theme.mr10, Theme.bgSuccess]}>
                                <Text style={[Theme.f15, Theme.whiteFont, Theme.fontBold]}>Add section</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.ellipsis, Theme.radius100]}>
                                <Icon
                                    color={"#596275"}
                                    style={[style.mr4, style.ml4]} name="ellipsis-h" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={[Theme.mt20, style.bgSection, Theme.p20]}>
                            <View>
                                <Text style={[Theme.fontBold, Theme.txtDark, Theme.f15]}>{orUserData ? orUserData.firstName : ""}'s Skills</Text>
                            </View>
                            <View style={[Theme.mt20]}>
                                <Text style={[Theme.txtSemiDark]}>
                                    {
                                        orUserData && orUserData.skills.map((e, index) => {
                                            return `#${e} `
                                        })
                                    }
                                </Text>
                            </View>
                            <View style={[Theme.mt10, { justifyContent: 'flex-end' }, Theme.flxDirectionRow]}>
                                <TouchableOpacity>
                                    <Icon
                                        color={"#596275"}
                                        style={[style.mr4, style.ml4]} name="pencil" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[style.bgSection, Theme.pt20, Theme.p10]}>
                        <View style={[Theme.p10, Theme.whiteBack, Theme.radius10]}>
                            <View>
                                <Text style={[Theme.fontBold, Theme.txtDark, Theme.mb10, Theme.f17]}>About</Text>
                                <Text style={[style.txtTalk, Theme.txtSemiDark]}>
                                    {orUserData ? orUserData.aboutMe : ""}
                                </Text>
                                <View style={[Theme.mt10, { justifyContent: 'flex-end' }, Theme.flxDirectionRow]}>
                                    <TouchableOpacity>
                                        <Icon
                                            color={"#596275"}
                                            style={[style.mr4, style.ml4]} name="pencil" size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[Theme.p10, Theme.mt10, Theme.whiteBack, Theme.radius10]}>
                            <View>
                                <View style={[Theme.flxDirectionRow, Theme.jstfyBetween]}>
                                    <Text style={[Theme.fontBold, Theme.txtDark, Theme.mb10, Theme.f17]}>Experience</Text>
                                    <Icon
                                        color={"#596275"}
                                        style={[style.mr4, style.ml4]} name="pencil" size={20} />
                                </View>
                                <View style={[Theme.flxDirectionRow, Theme.mt10, style.hrLine, Theme.pb20, Theme.pt10]}>
                                    <View style={[Theme.flex1, Theme.mr10]}>
                                        <Icon
                                            color={"#2c3e50"}
                                            style={[style.mr4, style.ml4]} name="building-o" size={30} />
                                    </View>
                                    <View style={[Theme.flex7, Theme.justifyCenter]}>
                                        <Text style={[Theme.txtSemiDark, Theme.fontSemiBold]}>Intern Software engineer at Fcode labs</Text>
                                    </View>
                                </View>
                                <View style={[Theme.flxDirectionRow, Theme.mt10, style.hrLine, Theme.pb20, Theme.pt10]}>
                                    <View style={[Theme.flex1, Theme.mr10]}>
                                        <Icon
                                            color={"#2c3e50"}
                                            style={[style.mr4, style.ml4]} name="building-o" size={30} />
                                    </View>
                                    <View style={[Theme.flex7, Theme.justifyCenter]}>
                                        <Text style={[Theme.txtSemiDark, Theme.fontSemiBold]}>Freelancing developer</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View style={[Theme.p10, Theme.mt10, Theme.whiteBack, Theme.radius10]}>
                            <View>
                                <View style={[Theme.flxDirectionRow, Theme.jstfyBetween]}>
                                    <Text style={[Theme.fontBold, Theme.txtDark, Theme.mb10, Theme.f17]}>Education</Text>
                                    <Icon
                                        color={"#596275"}
                                        style={[style.mr4, style.ml4]} name="pencil" size={20} />
                                </View>
                                {
                                    orUserData && orUserData.education.map((e, index) => {
                                        return <View key={index} style={[Theme.flxDirectionRow, Theme.mt10, style.hrLine, Theme.pb20, Theme.pt10]}>
                                            <View style={[Theme.flex1, Theme.mr10]}>
                                                <Icon
                                                    color={"#2c3e50"}
                                                    style={[style.mr4, style.ml4]} name="university" size={30} />
                                            </View>
                                            <View style={[Theme.flex6, Theme.justifyCenter]}>
                                                <Text style={[Theme.txtSemiDark, Theme.fontSemiBold]}>{e}</Text>
                                            </View>
                                        </View>
                                    })
                                }
                            </View>
                        </View>


                        <View style={[Theme.p10, Theme.mt10, Theme.whiteBack, Theme.radius10]}>
                            <View>
                                <View style={[Theme.flxDirectionRow, Theme.jstfyBetween]}>
                                    <Text style={[Theme.fontBold, Theme.txtDark, Theme.mb10, Theme.f17]}>Contacts</Text>
                                    <Icon
                                        color={"#596275"}
                                        style={[style.mr4, style.ml4]} name="pencil" size={20} />
                                </View>
                                <View style={[Theme.flxDirectionRow, Theme.mt10, style.hrLine, Theme.pb20, Theme.pt10]}>
                                    <View style={[Theme.flex1, Theme.center, Theme.mr10]}>
                                        <Icon
                                            color={"#2c3e50"}
                                            style={[style.mr4, style.ml4]} name="phone" size={30} />
                                    </View>
                                    <View style={[Theme.flex6, Theme.justifyCenter]}>
                                        <Text style={[Theme.f15, Theme.fontBold, Theme.txtSemiDark]}>Phone</Text>
                                        <Text style={[Theme.fontSemiBold]}>{orUserData ? orUserData.mobileNo : ""}</Text>
                                    </View>
                                </View>
                                <View style={[Theme.flxDirectionRow, Theme.mt10, style.hrLine, Theme.pb20, Theme.pt10]}>
                                    <View style={[Theme.flex1, Theme.center, Theme.mr10]}>
                                        <Icon
                                            color={"#2c3e50"}
                                            style={[style.mr4, style.ml4]} name="envelope-o" size={30} />
                                    </View>
                                    <View style={[Theme.flex6, Theme.justifyCenter]}>
                                        <Text style={[Theme.f15, Theme.fontBold, Theme.txtSemiDark]}>Email</Text>
                                        <Text style={[Theme.fontSemiBold]}>{orUserData ? orUserData.email : ""}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    imgBackground: {
        height: 150,
        justifyContent: 'center'
    },
    txtTalk: {
        lineHeight: 20
    },
    mr4: {
        marginRight: 4
    },
    ml4: {
        marginLeft: 4
    },
    btnSection: {
        borderWidth: 1,
        borderColor: "#84817a"
    },
    ellipsis: {
        marginTop: 20,
        padding: 10,
        borderColor: '#596275',
        borderWidth: 1,
    },
    bgSection: {
        backgroundColor: "#e0d9d3"
    },
    hrLine: {
        borderBottomColor: '#95a5a6',
        borderBottomWidth: 1,
        borderStyle: "dotted"
    }
})

export default Profile
