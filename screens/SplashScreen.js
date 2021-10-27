import React from 'react'
import { Image, StyleSheet, View, Text, Button } from 'react-native'
import { CommonActions } from '@react-navigation/native'

export default function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/booklogo.png')}
             />
            <Text style={styles.title}>Book'App</Text>
            <Button title="Commencer" color="green"
                onPress={() =>
                    navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        { name: 'BooksList' }
                      ],
                    })
                  )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
    },
    title: {
        margin: 20,
        fontSize: 48
    }
})
