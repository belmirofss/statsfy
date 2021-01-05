import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpotifyAccountInfo from '../components/SpotifyAccountInfo';
import AuthContext from '../contexts/Auth';

export default function Account() {
    const authContext = useContext(AuthContext);
    const navigation = useNavigation();

    const logout = () => {
        Alert.alert(
            "Do you really want to log out?",
            "No information will be saved or collected by the app.",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                },
                { 
                    text: "Yes", 
                    onPress: () => authContext.logout() 
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <SpotifyAccountInfo />

            <TouchableOpacity style={styles.loginButton} onPress={() => logout()}>
                <Text style={styles.loginText}>Log out</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('About')}>
                <Text style={styles.aboutText}>About the app</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24
    },
    loginButton: {
        backgroundColor: 'red',
        paddingHorizontal: 8,
        paddingVertical: 16,
        width: '100%',
        borderRadius: 100,
        marginTop: 48
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontFamily: 'clearSansBold',
    },
    aboutButton: {
        backgroundColor: 'gainsboro',
        paddingHorizontal: 8,
        paddingVertical: 16,
        width: '100%',
        borderRadius: 100,
        marginTop: 8
    },
    aboutText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 24,
        fontFamily: 'clearSansBold',
    }
});