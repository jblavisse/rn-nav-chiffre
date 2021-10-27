
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  /*
  Retourne 2 composants:
  - Stack.Navigator
  - Stack.Screen
  */

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontSize: 18,
            },
          }}
      >
        <Stack.Screen name="Splash" component={SplashScreen}
          options={{ headerShown: false}} />

        <Stack.Screen name="Home" component={HomeScreen}
          options={{ title: 'Ma maison' }} />
        <Stack.Screen name="Contact" component={ContactScreen}
          options={{ title: 'Me MP' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
