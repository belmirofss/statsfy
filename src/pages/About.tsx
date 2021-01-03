import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                All your data is saved solely and exclusively on your device.
            </Text>

            <View style={styles.wrapperText}>
                <Text style={styles.text}>
                    The app will never save or collect any information about you or your account.
                </Text>

                <Text style={styles.text}>
                    This app has no relationship or affliction with Spotify.
                </Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24
    },
    wrapperText: {
        marginTop: 4
    },
    title: {
        fontFamily: 'clearSansBold',
        fontSize: 18
    },
    text: {
        fontFamily: 'clearSansRegular',
        fontSize: 14,
        marginTop: 6
    }
})