import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    function goToContact() {
        navigation.navigate("Contact",{
            "ipAddress": "192.168.0.200",
            "age": 12
        })
    }

    return (
        <View>
            <Text>Bienvenue sur mon écran d'accueil!</Text>
            <Text onPress={goToContact}>Me contacter</Text>
        </View>
    )
}
