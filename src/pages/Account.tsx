import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Alert, View, StyleSheet, ScrollView } from 'react-native';
import RountedButton from '../components/RoundedButton';
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
        <ScrollView>
            <View style={styles.container}>
                <SpotifyAccountInfo />

                <RountedButton
                    onPress={() => logout()}
                    color="white"
                    backgroundColor="red"
                    label="Log out"
                    styles={{
                        marginTop: 48
                    }}>
                </RountedButton>

                <RountedButton
                    onPress={() => navigation.navigate('About')}
                    color="black"
                    backgroundColor="gainsboro"
                    label="About the app"
                    styles={{
                        marginTop: 8
                    }}>
                </RountedButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
});