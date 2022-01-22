import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RountedButton from '../components/RoundedButton';
import SpotifyAccountInfo from '../components/SpotifyAccountInfo';
import AuthContext from '../contexts/Auth';

export default function Account() {

    const authContext = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <SpotifyAccountInfo />

                <RountedButton
                    onPress={authContext.logout}
                    color="white"
                    backgroundColor="red"
                    label="Log out"
                    styles={{
                        marginTop: 48
                    }}
                />


                <RountedButton
                    onPress={() => navigation.navigate('About' as never)}
                    color="black"
                    backgroundColor="gainsboro"
                    label="About the app"
                    styles={{
                        marginTop: 8
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
});