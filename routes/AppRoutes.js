import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from '../views/Profile/Profile';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes = () => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Profile} />
            </Tab.Navigator>
        </>
    )
}

export default AppRoutes
