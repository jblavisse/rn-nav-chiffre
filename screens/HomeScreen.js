import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    function goToDetails() {
        navigation.navigate("Details")
    }

    return (
        <View>
            <Text>Bienvenue sur mon écran d'accueil!</Text>
            <Button title="aller sur details" color="blue"
                onPress={goToDetails} />
        </View>
    )
}
