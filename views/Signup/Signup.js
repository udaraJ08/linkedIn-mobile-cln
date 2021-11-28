import { Button, Checkbox, Input } from 'native-base';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Theme from '../../assets/css/theme.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { signInWithEmailPasswordListen } from '../Login/action';

const Signup = ({ navigation }) => {
  ///State Handling
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  const dispatch = useDispatch();

  ///API calling
  const signInWithEmailPassword = () => {

    if (validateForm())
      dispatch(signInWithEmailPasswordListen(email, password));
  }

  ///navigation
  const routeToWelcome = () => {
    navigation.navigate('welcome');
  };

  const routeToLogin = () => {
    navigation.navigate('login');
  };

  //lead functions
  const validateForm = () => {

    if (email.toString().trim().length > 0 && password.toString().trim().length > 0 && rePassword.toString().trim().length > 0) {
      if (password === rePassword)
        return true;
      else {
        alert("Passwords mismatch");
        return false;
      }
    }
    else return false;

  }

  return (
    <View style={[Theme.mainScreen, Theme.whiteBack, Theme.center]}>
      <View style={style.midContainer}>
        <View style={[style.upperContainer]}>
          <Image
            style={style.mainImage}
            source={require('../../assets/images/LI-In-Bug.png')}
          />
          <Text style={[style.loginTopic, Theme.linkedinTopic]}>SIGNUP</Text>
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
            <Text style={style.loginlabel}>password</Text>
            <Input
              onChangeText={e => setPassword(e)}
              type="password"
              borderColor={'#3498db'}
              variant="outline"
              placeholder="*********"
            />
            <Text />
            <Text style={style.loginlabel}>Re-type password</Text>
            <Input
              onChangeText={e => setRePassword(e)}
              type="password"
              borderColor={'#3498db'}
              variant="outline"
              placeholder="*********"
            />
          </View>
          <View style={style.btnContainer}>
            <Button
              onPressOut={signInWithEmailPassword}
              style={style.signinBtn}>SIGNIN</Button>
          </View>
          <Text />
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Checkbox
              accessibilityLabel="Agree to policies"
              defaultIsChecked={false}
            />
            <Text style={{ marginLeft: 10 }}>I Agree to all the policies.</Text>
          </View>
          <View style={style.textBtnContainer}>
            <TouchableOpacity
              style={style.textBtn}
              onPressOut={() => routeToWelcome()}>
              <Icon name="long-arrow-left" color="#0072b1" size={20} />
              <Text style={[style.textBtnText, { marginLeft: 5 }]}>
                Back to home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.textBtn]}
              onPressOut={() => routeToLogin()}>
              <Text style={[style.textBtnText, { margin: 0, marginRight: 5 }]}>
                To Login
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

export default Signup;
