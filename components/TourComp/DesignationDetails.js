import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Theme from '../../assets/css/theme.style'
import { Input, TextArea, StatusBar } from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { designationListen, userRegisterListen } from '../../views/Tour/action'
import { useSelector } from 'react-redux'

const DesignationDetails = ({ navigation }) => {

    //hooks
    const [designation, setDesignation] = useState("");

    const [txtEducation, setTxtEducation] = useState("");

    const [txtSkills, setTxtSkills] = useState("");

    const [education, setEducation] = useState([]);

    const [skills, setSkills] = useState([]);

    const dispatch = useDispatch();

    //redux selectors
    const user = useSelector(state => state.tourReducer)

    //routing
    const routeToDataCook = () => {
        navigation.navigate("data-cook");
    }

    //lead functions
    const addSkills = () => {
        if (txtSkills.toString().trim().length > 0) {
            setSkills(skills.concat(txtSkills));
            setTxtSkills("");
        }
    }

    const addEducation = () => {

        if (txtEducation.toString().trim().length > 0) {
            setEducation(education.concat(txtEducation))
            setTxtEducation("");
        }
    }

    //dispatching
    const submitDesignation = () => {
        dispatch(designationListen({ designation, education, skills }));
        routeToDataCook();
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
                        <Input
                            onChangeText={e => setDesignation(e)}
                            placeholder="Software engineer / devop / etc..."
                            style={[Theme.inputBorder]} />
                    </View>
                    <View>
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
                            <TouchableOpacity
                                key={index}
                                style={[Theme.mr10, Theme.bgSilver, Theme.btnM20, Theme.radius8]}>
                                <Text style={[Theme.f12, Theme.fontSemiBold]} >{e}
                                    {" "}<Icon name="close" color="#2c3e50" size={12} />
                                </Text>
                            </TouchableOpacity>
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
                            <TouchableOpacity
                                key={index}
                                style={[Theme.mr10, Theme.bgSilver, Theme.btnM20, Theme.radius8]}>
                                <Text style={[Theme.f12, Theme.fontSemiBold]} >{e}
                                    {" "}<Icon name="close" color="#2c3e50" size={12} />
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={[Theme.center]}>
                        <TouchableOpacity
                            onPressOut={submitDesignation}
                            style={[
                                Theme.bgOrange,
                                style.nextBtn,
                                Theme.center,
                                Theme.flxDirectionRow,
                                Theme.btnM20
                            ]}>
                            <Text style={[Theme.whiteFont, Theme.mr10]}>CREATE ACCOUNT</Text>
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
