import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';


import logo from '../images/logo_statsfy.png';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function Login() {

  const navigation = useNavigation();

  function goToResumeScreen() {
    navigation.navigate('Auth')
  }

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '049fe9081d41496db42660d5035b8346',
      scopes: [
        'user-read-recently-played',
        'user-read-playback-state',
        'user-top-read',
        'app-remote-control',
        'playlist-modify-public',
        'user-modify-playback-state',
        'playlist-modify-private',
        'user-follow-modify',
        'user-read-currently-playing',
        'user-follow-read',
        'user-library-modify',
        'user-read-playback-position',
        'playlist-read-private',
        'user-read-email',
        'user-read-private',
        'user-library-read',
        'playlist-read-collaborative'
      ],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        native: 'statsfy://redirect',
      }),
    },
    discovery
  );

  React.useEffect(() => {
    async function verifyExitsCode() {
      const code = await AsyncStorage.getItem('code');
      if (code) {
        goToResumeScreen();
      }
    }

    verifyExitsCode();
  }, []);

  React.useEffect(() => {
    async function setCode() {
      if (response?.type === 'success') {
        const { code } = response.params;
        await AsyncStorage.setItem('code', code);
        goToResumeScreen()
      }
    }
    
    setCode();
  }, [response]);

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
          Please log in with your Spotify account to see your stats
      </Text>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => promptAsync()}
        disabled={!request}>
          <Text style={styles.loginText}>Log in</Text>
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
      width: '100%',
      borderRadius: 100,
      
    },
    loginText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
      fontFamily: 'clearSansBold',
    }
});
  