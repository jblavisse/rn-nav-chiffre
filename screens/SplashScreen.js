import React from 'react'
import { Image, View, Text, Button, StyleSheet } from 'react-native'

export default function SplashScreen({navigation}) {
    return (
        <View>
            <Image
                style={styles.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
            />
            <Image
                style={styles.img}
                source={require('../assets/favicon.png')}
            />

            <Text>Mon app</Text>
            <Button title="Commencer" color="blue"
             onPress={() => {
                 navigation.popToTop()
                 navigation.navigate("Home")
             }} />
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50
    }
})
