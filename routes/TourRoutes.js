import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import WelcomeTour from '../components/TourComp/WelcomeTour';
import UploadAvatar from '../components/TourComp/UploadAvatar';
import UserDetails from '../components/TourComp/UserDetails';
import DesignationDetails from '../components/TourComp/DesignationDetails';
import TourEnd from '../components/TourComp/TourEnd';
import DataCook from '../components/TourComp/DataCook';
import Profile from '../views/Profile/Profile';

const Stack = createStackNavigator();

const TourRoutes = () => {

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
                <Stack.Screen
                    options={{
                        gestureEnabled: false,
                    }}
                    name="data-cook" component={DataCook} />
                <Stack.Screen
                    options={{
                        gestureEnabled: false,
                    }}
                    name="tour-end" component={TourEnd} />
            </Stack.Navigator>

        </>
    )
}

export default TourRoutes
