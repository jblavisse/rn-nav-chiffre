import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import BooksListScreen from './screens/BooksListScreen';
import SplashScreen from './screens/SplashScreen';


export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash"
                screenOptions={{
                headerStyle: {
                    backgroundColor: 'green',
                },
                headerTintColor: 'white',
                }}
            >
            <Stack.Screen name="Splash" component={SplashScreen}
                options={{ headerShown: false}} />
            <Stack.Screen name="BooksList" component={BooksListScreen}
                options={{ title: 'Liste des livres' }} />
            </Stack.Navigator>
      </NavigationContainer>
    )
}
