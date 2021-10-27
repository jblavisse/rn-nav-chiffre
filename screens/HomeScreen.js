import React, {useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

export default function HomeScreen({navigation}) {
    const [users,setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => setUsers(json))
    }, [])

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

            {users.map(user => (
                <TouchableOpacity
                    onPress={() => navigation.navigate("UserDetails",{
                        user: user} )}>
                    <Text style={styles.user}>{user.name}</Text>
                </TouchableOpacity>

            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    user: {
        margin: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: 'orange'
    }
})
