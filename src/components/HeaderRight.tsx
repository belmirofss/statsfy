import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { HeaderRightProps } from '../interfaces/HeaderRightProps';

export default function HeaderRight(props: HeaderRightProps) {
    const navigation = useNavigation();

    const iconSize = 28;

    return (
        <View style={styles.container}>
            {props.showSearchButton && (
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                    <Ionicons name="search" size={iconSize} />
                </TouchableOpacity>
            )}

            {props.showBackButton && (
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={iconSize} />
                </TouchableOpacity>
            )}

            {props.showAccountButton && (
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Account')}>
                    <MaterialCommunityIcons name="account" size={iconSize} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 14
    },
    button: {
        width: 36,
        justifyContent: 'center'
    }
});