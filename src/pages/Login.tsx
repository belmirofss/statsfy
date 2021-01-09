import React, { useContext } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';

import logo from '../images/logo_statsfy.png';
import AuthContext from '../contexts/Auth';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function Login() {

  const { authenticate } = useContext(AuthContext);
  const navigation = useNavigation();

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
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
    if (response?.type === 'success') {
      const { access_token } = response.params;
      authenticate(access_token);
    }
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

      <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.aboutText}>About the app</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16
    },
    logoImage: {
      width: 200, 
      height: 64
    },
    welcomeText: {
      marginTop: 64,
      fontSize: 28,
      fontFamily: 'clearSansBold',
      textAlign: 'center'
    },
    continueText: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 8,
      fontFamily: 'clearSansRegular'
    },
    loginButton: {
      marginTop: 64,
      backgroundColor: '#1ED760',
      paddingHorizontal: 8,
      paddingVertical: 12,
      width: '100%',
      borderRadius: 100
    },
    loginText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 18,
      fontFamily: 'clearSansBold'
    },
    aboutButton: {
      backgroundColor: 'gainsboro',
      paddingHorizontal: 8,
      paddingVertical: 12,
      width: '100%',
      borderRadius: 100,
      marginTop: 8
    },
    aboutText: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      fontFamily: 'clearSansBold',
    }
});
  