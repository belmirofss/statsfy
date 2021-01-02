import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import logo from '../images/logo_statsfy.png';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logoImage}
                source={logo}
            />

            <Text style={styles.welcomeText}>
                Hello! Looking for your stats?
            </Text>

            <Text style={styles.continueText}>
                Please log in with your Spotify account to see the your stats.
            </Text>

            <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
                Log in
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24
    },
    logoImage: {
      width: 200, 
      height: 64
    },
    welcomeText: {
      marginTop: 64,
      fontSize: 32,
      fontFamily: 'clearSansBold',
      textAlign: 'center'
    },
    continueText: {
      fontSize: 24,
      textAlign: 'center',
      marginTop: 8,
      fontFamily: 'clearSansRegular'
    },
    loginButton: {
      marginTop: 64,
      backgroundColor: '#1ED760',
      paddingHorizontal: 8,
      paddingVertical: 16,
      color: 'white',
      fontSize: 24,
      fontFamily: 'clearSansBold',
      width: '100%',
      borderRadius: 100,
      textAlign: 'center'
    }
});
  