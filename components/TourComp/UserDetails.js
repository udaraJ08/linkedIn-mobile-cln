import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Theme from '../../assets/css/theme.style'
import { Input, TextArea, StatusBar } from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import { aboutListen } from '../../views/Tour/action'
import { useDispatch } from 'react-redux'

const UserDetails = ({ navigation }) => {

    //form states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [aboutMe, setAboutMe] = useState("");

    ///hooks-handling
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dob, setDob] = useState("Nov 22nd 98");

    const dispatch = useDispatch();

    //routing
    const routeToDesgination = () => {
        navigation.navigate("designation-details");
    }

    //lead functions
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDob(moment(date).format("MMM Do YY"));
        hideDatePicker();
    };

    //dispatching
    const submitUserDetails = () => {
        dispatch(aboutListen({
            firstName,
            lastName,
            dob,
            email,
            mobileNo,
            aboutMe
        }));
        routeToDesgination();
    }

    return (
        <View style={Theme.mainScreen} >
            <StatusBar animated={true} backgroundColor="#10ac84" />
            <View style={[Theme.flex1, Theme.center]}>
                <Text style={[Theme.f17]}>Let's fetch some
                    <Text style={[Theme.fontBold, Theme.txtSuccess, { fontSize: 23 }]}> ABOUT</Text>
                </Text>
            </View>
            <View style={[Theme.flex5]}>
                <ScrollView style={[Theme.pl10, Theme.pr10]}>
                    <View style={[Theme.flxDirectionRow, Theme.mb30]}>
                        <View style={[Theme.flex1, Theme.pr10]}>
                            <Text style={[Theme.pb10]}>First Name <Text style={Theme.txtDanger}>*</Text></Text>
                            <Input
                                onChangeText={e => setFirstName(e)}
                                placeholder="Add first name" style={[Theme.inputBorder]} />
                        </View>
                        <View style={[Theme.flex1]}>
                            <Text style={[Theme.pb10]}>Last Name <Text style={Theme.txtDanger}>*</Text></Text>
                            <Input
                                onChangeText={e => setLastName(e)}
                                placeholder="Add last name" style={[Theme.inputBorder]} />
                        </View>
                    </View>
                    <View style={[Theme.flxDirectionRow, Theme.mb30]}>
                        <View style={[Theme.flex1, Theme.mr10]}>
                            <Text style={[Theme.pb10]}>DOB <Text style={Theme.txtDanger}>*</Text></Text>
                            <TouchableOpacity
                                onPressOut={showDatePicker}
                                style={[
                                    Theme.flex1,
                                    Theme.btnSuccessOutline,
                                    Theme.center,
                                    Theme.flxDirectionRow,
                                ]}>
                                <Text style={[Theme.txtSuccess, { marginRight: 10 }]}>DOB</Text>
                                <Icon name="calendar" color="#10ac84" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={[Theme.flex1, Theme.pt30, Theme.center]}>
                            <Text style={[Theme.pb10, Theme.f20, Theme.txtDark, Theme.op5]}>{dob}</Text>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <View style={[Theme.mb30]}>
                        <Text style={[Theme.pb10]}>Email <Text style={Theme.txtDanger}>*</Text></Text>
                        <Input
                            onChangeText={e => setEmail(e)}
                            placeholder="udaraj08@gmail.com" style={[Theme.inputBorder]} />
                    </View>
                    <View style={[Theme.mb30]}>
                        <Text style={[Theme.pb10]}>Mobile No. <Text style={Theme.txtDanger}>*</Text></Text>
                        <Input
                            onChangeText={e => setMobileNo(e)}
                            placeholder="0712345678" style={[Theme.inputBorder]} />
                    </View>
                    <View style={[Theme.mb20]}>
                        <Text style={[Theme.pb10]}>About me</Text>
                        <TextArea
                            onChangeText={e => setAboutMe(e)}
                            style={[Theme.inputBorder]} placeholder="Let's say a little about you..."></TextArea>
                    </View>
                    <View style={[Theme.center]}>
                        <TouchableOpacity
                            onPressOut={submitUserDetails}
                            style={[
                                Theme.bgSuccess,
                                style.nextBtn,
                                Theme.center,
                                Theme.flxDirectionRow,
                                Theme.btnM20
                            ]}>
                            <Text style={[Theme.whiteFont, { marginRight: 10 }]}>NEXT</Text>
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

export default UserDetails