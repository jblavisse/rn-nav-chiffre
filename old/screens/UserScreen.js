import React from 'react'
import { View, Text } from 'react-native'

export default function UserScreen({route}) {
    const {user} = route.params;

    return (
        <View>
            <Text>Nom complet: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Tel: {user.phone}</Text>
        </View>
    )
}
