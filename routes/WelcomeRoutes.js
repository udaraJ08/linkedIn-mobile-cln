import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login/Login';
import Welcome from '../components/Splash/Welcome';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../views/Signup/Signup';
import Tour from '../views/Tour/Tour';
import AppRoute from './AppRoutes';

const Stack = createStackNavigator();

const WelcomeRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        shifting="true"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen
          options={{
            gestureEnabled: false,
          }} name="tour" component={Tour} />
        <Stack.Screen
          options={{
            gestureEnabled: false,
          }} name="app-route" component={AppRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeRoutes;
