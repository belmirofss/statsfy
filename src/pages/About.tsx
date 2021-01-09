import React from 'react';
import { Image, View, StyleSheet, Text, ScrollView } from 'react-native';

import logo from '../images/logo_statsfy.png';

import appInfo from '../../app.json';

export default function About() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.logoImage}
                    source={logo}
                />

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

                    <Text style={styles.versionText}>
                        Version: {appInfo.expo.version}
                    </Text>
                </View>            
            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    logoImage: {
        width: 150, 
        height: 48,
        marginVertical: 24,
        marginHorizontal: 'auto'
    },
    wrapperText: {
        marginTop: 4
    },
    title: {
        fontFamily: 'clearSansBold',
        fontSize: 24
    },
    text: {
        fontFamily: 'clearSansRegular',
        fontSize: 16,
        marginTop: 6
    },
    versionText: {
        fontFamily: 'clearSansBold',
        fontSize: 12,
        marginTop: 24,
        textAlign: 'center'
    }
})