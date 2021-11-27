import React from 'react'
import { View, TouchableOpacity, ScrollView, ImageBackground, Text } from 'react-native'
import Theme from '../../assets/css/theme.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'native-base';

const cover = { uri: "https://wallpaper.dog/large/5477484.jpg" };

const fallBack = { uri: "https://static.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper__1-471.jpg" };

const Profile = () => {
    return (
        <View style={[Theme.mainScreen, Theme.whiteBack]}>
            <View style={[{ height: 80 }, Theme.flxDirectionRow]}>
                <View style={[Theme.flex1, Theme.center, Theme.mr20]}>
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                                { height: 150 },
                                Theme.bgDanger,
                                { justifyContent: 'center' },
                                Theme.pl20
                            ]}
                            source={cover} resizeMode="cover">
                            <Avatar
                                style={[{ borderColor: "#ecf0f1", borderWidth: 2 }]}
                                source={fallBack} size={120} />
                        </ImageBackground>
                    </View>
                    <View style={[Theme.p10]}>
                        <View>
                            <Text style={[Theme.f25, Theme.fontSemiBold, Theme.txtSemiDark]}>U Janith Wanniarachchi</Text>
                            <Text style={[Theme.f15]}>Intern Software Engineer at Fcode labs</Text>
                        </View>
                        <View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Profile
