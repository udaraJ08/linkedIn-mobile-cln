import { StyleSheet } from "react-native";

const Theme = StyleSheet.create({

    //Background-colors
    linkedinBack: {
        backgroundColor: "#3498db",
    },
    yellowBack: {
        backgroundColor: "#f1c40f"
    },
    whiteBack: {
        backgroundColor: "#ecf0f1",
    },
    bgDanger: {
        backgroundColor: "#ff6b6b"
    },
    bgWarning: {
        backgroundColor: "#f1c40f"
    },
    bgSuccess: {
        backgroundColor: "#10ac84"
    },
    bgDark: {
        backgroundColor: "#2c3e50"
    },
    bgOrange: {
        backgroundColor: "#fd9644"
    },
    bgGrey: {
        backgroundColor: "#95a5a6"
    },
    bgSilver: {
        backgroundColor: "#bdc3c7"
    },

    //Font-colors
    linkedInFontColor: {
        color: "#3498db"
    },

    whiteFont: {
        color: "#ecf0f1"
    },

    txtDanger: {
        color: "#ff6b6b"
    },

    txtPrimary: {
        color: "#3498db"
    },
    txtWarning: {
        color: "#eccc68"
    },

    txtSuccess: {
        color: "#10ac84"
    },

    txtGrey: {
        color: "#a5b1c2"
    },

    txtOrange: {
        color: "#fd9644"
    },

    txtDark: {
        color: "#2f3640"
    },

    txtSemiDark: {
        color: "#596275"
    },
    //font-styles
    fontThin: {
        fontFamily: "sans-serif-light",
    },

    fontSemiBold: {
        fontWeight: "700"
    },

    fontBold: {
        fontWeight: "bold"
    },

    //Font size
    f10: {
        fontSize: 10
    },
    f12: {
        fontSize: 12
    },
    f15: {
        fontSize: 15
    },
    f17: {
        fontSize: 18
    },
    f20: {
        fontSize: 20
    },
    f23: {
        fontSize: 23
    },
    f25: {
        fontSize: 25
    },
    f27: {
        fontSize: 27
    },
    f30: {
        fontSize: 30
    },
    f33: {
        fontSize: 33
    },
    f35: {
        fontSize: 35
    },
    f40: {
        fontSize: 40
    },

    //Layouts
    center: {
        justifyContent: 'center',
        alignItems: "center"
    },

    flxDirectionRow: {
        flexDirection: 'row'
    },

    flxWrap: {
        flexWrap: "wrap"
    },

    jstfyBetween: {
        justifyContent: "space-between"
    },

    //Dimensions
    mainScreen: {
        height: "100%",
    },

    w100: {
        width: "100%"
    },

    ///flex
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flex5: {
        flex: 5
    },
    flex6: {
        flex: 6
    },
    flex7: {
        flex: 7
    },
    flex8: {
        flex: 8
    },

    //Main-topics
    linkedinTopic: {
        fontWeight: "bold",
        color: "#0072b1"
    },

    //components-styling
    btnM50: {
        marginTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8
    },
    btnM20: {
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8
    },

    btnPrimaryOutline: {
        backgroundColor: "transparent",
        borderColor: "#3498db",
        borderWidth: 1,
        borderRadius: 8
    },

    btnDangerOutline: {
        backgroundColor: "transparent",
        borderColor: "#ff6b6b",
        borderWidth: 1,
        borderRadius: 8
    },

    btnWarningOutline: {
        backgroundColor: "transparent",
        borderColor: "#f1c40f",
        borderWidth: 1,
        borderRadius: 8
    },

    btnSuccessOutline: {
        backgroundColor: "transparent",
        borderColor: "#10ac84",
        borderWidth: 1,
        borderRadius: 8
    },

    inputBorder: {
        borderWidth: 1,
        borderColor: "#a5b1c2"
    },

    //paddings
    p10: {
        padding: 10
    },
    p20: {
        padding: 20
    },
    p30: {
        padding: 30
    },
    p40: {
        padding: 40
    },
    p50: {
        padding: 50
    },

    //Padding-left
    pl10: {
        paddingLeft: 10
    },
    pl20: {
        paddingLeft: 20
    },
    pl30: {
        paddingLeft: 30
    },
    pl40: {
        paddingLeft: 40
    },
    pl50: {
        paddingLeft: 50
    },

    //Padding-right
    pr10: {
        paddingRight: 10
    },
    pr20: {
        paddingRight: 20
    },
    pr30: {
        paddingRight: 30
    },
    pr40: {
        paddingRight: 40
    },
    pr50: {
        paddingRight: 50
    },

    //padding-top
    pt10: {
        paddingTop: 10
    },
    pt20: {
        paddingTop: 20
    },
    pt30: {
        paddingTop: 30
    },
    pt40: {
        paddingTop: 40
    },
    pt50: {
        paddingTop: 50
    },

    //padding-bottom
    pb10: {
        paddingBottom: 10
    },
    pb20: {
        paddingBottom: 20
    },
    pb30: {
        paddingBottom: 30
    },
    pb40: {
        paddingBottom: 40
    },
    pb50: {
        paddingBottom: 50
    },

    //marging-top
    mt10: {
        marginTop: 10
    },
    mt20: {
        marginTop: 20
    },
    mt30: {
        marginTop: 30
    },
    mt40: {
        marginTop: 40
    },
    mt50: {
        marginTop: 50
    },

    //margin-bottom
    mb10: {
        marginBottom: 10
    },
    mb20: {
        marginBottom: 20
    },
    mb30: {
        marginBottom: 30
    },
    mb40: {
        marginBottom: 40
    },
    mb50: {
        marginBottom: 50
    },

    //margin-right
    mr10: {
        marginRight: 10
    },
    mr20: {
        marginRight: 20
    },
    mr30: {
        marginRight: 30
    },
    mr40: {
        marginRight: 40
    },
    mr50: {
        marginRight: 50
    },

    //marging-left
    ml10: {
        marginLeft: 10
    },
    ml20: {
        marginLeft: 20
    },
    ml30: {
        marginLeft: 30
    },
    ml40: {
        marginLeft: 40
    },
    ml50: {
        marginLeft: 50
    },

    //opacity
    op1: {
        opacity: 0.1
    },
    op2: {
        opacity: 0.2
    },
    op3: {
        opacity: 0.3
    },
    op4: {
        opacity: 0.4
    },
    op5: {
        opacity: 0.5
    },
    op6: {
        opacity: 0.6
    },
    op7: {
        opacity: 0.7
    },
    op1: {
        opacity: 0.1
    },
    op8: {
        opacity: 0.8
    },
    op9: {
        opacity: 0.9
    },

    //border-radius
    radius5: {
        borderRadius: 5
    },
    radius8: {
        borderRadius: 8
    },
    radius10: {
        borderRadius: 10
    },
    radius12: {
        borderRadius: 12
    },
    radius15: {
        borderRadius: 15
    },
    radius18: {
        borderRadius: 18
    },
    radius20: {
        borderRadius: 20
    },
    radius50: {
        borderRadius: 50
    },
    radius100: {
        borderRadius: 100
    },
    radius500: {
        borderRadius: 500
    }
})

export default Theme;