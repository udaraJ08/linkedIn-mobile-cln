import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from '../views/Feed/Feed';
import MyNetwork from '../views/MyNetwork/MyNetwork';
import Notifications from '../views/Notifications/Notifications';
import Jobs from '../views/Jobs/Jobs';
import Post from '../views/Post/Post';
import { CardStyleInterpolators } from '@react-navigation/stack';

import { StatusBar } from 'native-base';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" animated={true} backgroundColor="#ecf0f1" />
            <Tab.Navigator
                initialRouteName="home"
                activeColor="#2f3640"
                inactiveColor="#596275"
                barStyle={[{ backgroundColor: '#f5f6fa' }]}
                shifting="true"
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                })}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={26} />
                        ),
                    }}
                    name="home"
                    component={Feed} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'My Network',
                        tabBarIcon: ({ color }) => (
                            <Icon name="users" color={color} size={22} />
                        ),
                    }}
                    name="my-network" component={MyNetwork} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Post',
                        tabBarIcon: ({ color }) => (
                            <Icon name="plus-square" color={color} size={22} />
                        ),
                    }}
                    name="post" component={Post} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Notifications',
                        tabBarIcon: ({ color }) => (
                            <Icon name="bell" color={color} size={22} />
                        ),
                    }}
                    name="notications" component={Notifications} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Jobs',
                        tabBarIcon: ({ color }) => (
                            <Icon name="suitcase" color={color} size={22} />
                        ),
                    }}
                    name="jobs" component={Jobs} />
            </Tab.Navigator>
        </>
    )
}

export default AppRoutes
