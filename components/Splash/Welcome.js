import { Button } from 'native-base';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Theme from '../../assets/css/theme.style';
import { checkUserListen } from '../../views/Login/action';

const Welcome = ({ navigation }) => {

  ///redux selectors
  const { logged } = useSelector(state => state.loginReducer);

  ///hooks calling
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserListen());
    routeHandler();
  }, [logged]);

  ///navigations
  const routeHandler = () => {
    if (logged) navigateToFeed()
  }

  const navigateToFeed = () => {
    navigation.navigate("tour");
  }

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  const navigateToSignup = () => {
    navigation.navigate('signup');
  };

  return (
    <View style={[Theme.mainScreen, Theme.whiteBack]}>
      <StatusBar backgroundColor="#3498db" />
      <View style={[style.upperView, Theme.center]}>
        <Image
          style={[style.mainImage]}
          source={require('../../assets/images/LI-Logo.png')}
        />
        <Text style={{ marginTop: 10 }}>Connect-to Oppurtunity</Text>
      </View>
      <View style={[style.bottomView, Theme.linkedinBack, Theme.center]}>
        <Button style={[style.joinBtn]} onPress={() => navigateToSignup()}>
          JOIN US
        </Button>
        <Button style={[style.accountBtn]} onPressOut={() => navigateToLogin()}>
          <Text style={[Theme.linkedInFontColor, { padding: 2 }]}>
            HAVE AN ACCOUNT ?
          </Text>
        </Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  upperView: {
    flex: 3,
    backgroundColor: '#ecf0f1',
  },
  bottomView: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: 'row',
  },
  mainImage: {
    resizeMode: 'contain',
    width: 200,
    height: 50,
  },
  joinBtn: {
    marginRight: 10,
    backgroundColor: 'transparent',
    borderColor: '#ecf0f1',
    borderRadius: 5,
    borderWidth: 1,
  },
  accountBtn: {
    backgroundColor: '#ecf0f1',
    borderColor: 'white',
  },
});

export default Welcome;
