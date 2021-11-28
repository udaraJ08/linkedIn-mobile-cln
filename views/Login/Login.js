import { Button, Input } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Theme from '../../assets/css/theme.style';
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';

import { checkUserListen, loginListen, loginWithEmailPasswordListen, signInWithEmailPasswordListen } from './action';

const Login = ({ navigation }) => {

  //selectors
  const { logged, user, created, canceled } = useSelector(state => state.loginReducer);

  ///Hooks calling
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!canceled) dispatch(checkUserListen());
  //   routeHandler();
  //   console.log(created);
  // }, [logged]);

  ///lead functions
  const signWithGoogle = () => {
    dispatch(checkUserListen());
  }

  const logInWithEmailPassword = () => {
    dispatch(loginWithEmailPasswordListen(email, password));
  }

  ///navigation
  const routeHandler = () => {
    if (created && logged) navigateToApp()
    else if (logged) {
      navigateToFeed();
    }
  }

  const navigateToFeed = () => {
    navigation.navigate("tour");
  }

  const navigateToApp = () => {
    navigation.navigate("app-route");
  }

  const routeToWelcome = () => {
    navigation.navigate('welcome');
  };

  const routeToSignup = () => {
    navigation.navigate('signup');
  };

  return (
    <View style={[Theme.mainScreen, Theme.whiteBack, Theme.center]}>
      <View style={style.midContainer}>
        <View style={[style.upperContainer]}>
          <Image
            style={style.mainImage}
            source={require('../../assets/images/LI-In-Bug.png')}
          />
          <Text style={[style.loginTopic, Theme.linkedinTopic]}>LOGIN</Text>
        </View>
        <View style={[style.credContainer]}>
          <View>
            <Text style={style.loginlabel}>username</Text>
            <Input
              onChangeText={e => setEmail(e)}
              variant="outline"
              borderColor={'#3498db'}
              placeholder="test123@gmail.com"
            />
            <Text />
            <Text />
            <Text style={style.loginlabel}>password</Text>
            <Input
              onChangeText={e => setPassword(e)}
              type="password"
              borderColor={'#3498db'}
              variant="outline"
              placeholder="*********"
            />
            <Text />
            <Text style={[style.loginlabel, style.forgotPassword]}>
              forgot password ?
            </Text>
          </View>
          <View style={style.btnContainer}>
            <Button
              onPressOut={() => logInWithEmailPassword()}
              style={style.signinBtn}>SIGNIN</Button>
          </View>
          <View style={[Theme.center, { marginTop: 10 }]}>
            <GoogleSigninButton
              onPress={() => signWithGoogle()}
              color={GoogleSigninButton.Color.Dark}
            />
          </View>
          <View style={style.textBtnContainer}>
            <TouchableOpacity
              style={style.textBtn}
              onPressOut={() => {
                routeToWelcome();
              }}>
              <Icon name="long-arrow-left" color="#0072b1" size={20} />
              <Text style={[style.textBtnText, { marginLeft: 5 }]}>
                Back to home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.textBtn]}
              onPressOut={() => routeToSignup()}>
              <Text style={[style.textBtnText, { margin: 0, marginRight: 5 }]}>
                Create account
              </Text>
              <Icon name="long-arrow-right" color="#0072b1" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: 'crimson',
  },
  midContainer: {
    width: '90%',
    height: '70%',
  },
  upperContainer: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  loginTopic: {
    fontSize: 40,
  },
  credContainer: {
    flex: 4,
  },
  loginlabel: {
    marginBottom: 5,
    fontSize: 15,
  },
  brdColor: {
    borderColor: '#0072b1',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#0072b1',
    fontWeight: 'bold',
  },
  btnContainer: {
    marginTop: 30,
  },
  signinBtn: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#0072b1',
  },
  textBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  textBtn: {
    flexDirection: 'row',
  },
  textBtnText: {
    color: '#0072b1',
    fontWeight: '600',
    fontSize: 15,
  },
  mainImage: {
    resizeMode: 'contain',
    width: 70,
    height: 50,
  },
});

export default Login;
