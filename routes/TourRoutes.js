import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import WelcomeTour from '../components/TourComp/WelcomeTour';
import UploadAvatar from '../components/TourComp/UploadAvatar';
import UserDetails from '../components/TourComp/UserDetails';
import DesignationDetails from '../components/TourComp/DesignationDetails';

const Stack = createStackNavigator();

const TourRoutes = ({ navigation }) => {

    return (
        <>
            <Stack.Navigator
                shifting="true"
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                })}>
                <Stack.Screen name="welcomeTour" component={WelcomeTour} />
                <Stack.Screen name="uploadAvatar" component={UploadAvatar} />
                <Stack.Screen name="user-details" component={UserDetails} />
                <Stack.Screen name="designation-details" component={DesignationDetails} />
            </Stack.Navigator>

        </>
    )
}

export default TourRoutes
