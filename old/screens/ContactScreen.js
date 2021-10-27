import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function ContactScreen({route, navigation}) {
    const {ipAddress, age} = route.params;

    return (
        <View>
            <Text>Adresse ip: {ipAddress} {age} </Text>
            <Text>Adresse e-mail:</Text>
            <TextInput />

            <Button title="revenir en arrière"
            onPress={() => navigation.goBack()}
            />
        </View>
    )
}
