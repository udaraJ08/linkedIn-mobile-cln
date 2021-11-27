import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const SecondaryAppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                shifting="true"
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'vertical',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                })}>
                <Stack.Screen name="profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SecondaryAppRoutes
