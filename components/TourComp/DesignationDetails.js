import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Theme from '../../assets/css/theme.style'
import { Input, TextArea, StatusBar } from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';

const DesignationDetails = ({ navigation }) => {

    //hooks
    const [txtEducation, setTxtEducation] = useState("");

    const [txtSkills, setTxtSkills] = useState("");

    const [education, setEducation] = useState([]);

    const [skills, setSkills] = useState([]);

    //routing
    const routeToTourEnd = () => {
        navigation.navigate("tour-end");
    }

    //lead functions
    const addSkills = () => {
        setSkills(skills.concat(txtSkills));
        setTxtSkills("");
    }

    const addEducation = () => {
        setEducation(education.concat(txtEducation))
        setTxtEducation("");
    }

    return (
        <View style={Theme.mainScreen} >
            <StatusBar animated={true} backgroundColor="#fd9644" />
            <View style={[Theme.flex1, Theme.center]}>
                <Text style={[Theme.f18]}>Let's fetch some
                    <Text style={[Theme.fontBold, Theme.txtOrange, { fontSize: 23 }]}> DESIGNATION</Text>
                </Text>
            </View>
            <View style={[Theme.flex5]}>
                <ScrollView style={[Theme.pl10, Theme.pr10]}>
                    <View style={[Theme.mb30]}>
                        <Text style={[Theme.pb10]}>Your designation <Text style={Theme.txtDanger}>*</Text></Text>
                        <Input placeholder="Software engineer / devop / etc..." style={[Theme.inputBorder]} />
                    </View>
                    <View style={[Theme.mb10]}>
                        <View style={[Theme.flxDirectionRow]}>
                            <View style={[Theme.flex5, Theme.pr10]}>
                                <Text style={[Theme.pb10]}>Education <Text style={Theme.txtDanger}>*</Text></Text>
                                <Input
                                    value={txtEducation}
                                    onChangeText={e => setTxtEducation(e)}
                                    placeholder="Add your education"
                                    style={[Theme.inputBorder]} />
                            </View>
                            <View style={[Theme.flex1, Theme.center, Theme.pt30]}>
                                <TouchableOpacity
                                    onPressOut={() => addEducation()}
                                    style={[Theme.bgSilver, Theme.p10, Theme.radius5]}>
                                    <Icon name="plus-square" color="#ecf0f1" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[Theme.flxDirectionRow, Theme.flxWrap, Theme.mb30]}>
                        {education.map((e, index) =>
                            <View
                                key={index}
                                style={[Theme.mr10, Theme.bgSilver, Theme.btnM20, Theme.radius8]}>
                                <Text style={[Theme.f12, Theme.fontSemiBold]} >{e}</Text>
                            </View>
                        )}
                    </View>
                    <View style={[Theme.flxDirectionRow]}>
                        <View style={[Theme.flex5, Theme.pr10]}>
                            <Text style={[Theme.pb10]}>Skills <Text style={Theme.txtDanger}>*</Text></Text>
                            <Input
                                value={txtSkills}
                                onChangeText={(e) => { setTxtSkills(e) }}
                                placeholder="Add your skills"
                                style={[Theme.inputBorder]} />
                        </View>
                        <View style={[Theme.flex1, Theme.center, Theme.pt30]}>
                            <TouchableOpacity
                                onPressOut={() => addSkills()}
                                style={[Theme.bgSilver, Theme.p10, Theme.radius5]}>
                                <Icon name="plus-square" color="#ecf0f1" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[Theme.flxDirectionRow, Theme.flxWrap]}>
                        {skills.map((e, index) =>
                            <View
                                key={index}
                                style={[Theme.mr10, Theme.bgSilver, Theme.btnM20, Theme.radius8]}>
                                <Text style={[Theme.f12, Theme.fontSemiBold]} >{e}</Text>
                            </View>
                        )}
                    </View>
                    <View style={[Theme.center]}>
                        <TouchableOpacity
                            onPressOut={routeToTourEnd}
                            style={[
                                Theme.bgOrange,
                                style.nextBtn,
                                Theme.center,
                                Theme.flxDirectionRow,
                                Theme.btnM20
                            ]}>
                            <Text style={[Theme.whiteFont, Theme.mr10]}>NEXT</Text>
                            <Icon name="long-arrow-right" color="#ecf0f1" size={20} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    nextBtn: {
        width: "60%",
        marginBottom: 10
    },
})

export default DesignationDetails
