import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SplashScreen({navigation}) {
    return (
        <View>
            <Text>Mon app</Text>
            <Button title="Commencer" color="blue"
             onPress={() => navigation.navigate("Home")} />
        </View>
    )
}
