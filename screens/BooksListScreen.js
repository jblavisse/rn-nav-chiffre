import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from './SplashScreen';
import BooksScreen from './BooksScreen';
import SettingsScreen from './SettingsScreen';


const Tab = createBottomTabNavigator();


export default function BooksListScreen() {
    return (
        <Tab.Navigator initialRouteName="Books">
            <Tab.Screen name="Books" component={BooksScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}
