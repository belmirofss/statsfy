import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface RountedButtonProps {
    onPress(): void;
    backgroundColor: string;
    color: string;
    label: string;
    disabled?: boolean;
    styles?: Object;
}

export default function RountedButton(props: RountedButtonProps) {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: props.backgroundColor,
            paddingHorizontal: 8,
            paddingVertical: 12,
            width: '100%',
            borderRadius: 100,
            ... props.styles
        },
        text: {
            textAlign: 'center',
            color: props.color,
            fontSize: 18,
            fontFamily: 'clearSansBold'
        }
    });

    return (
        <View style={{ width: '100%' }}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => props.onPress()}
                disabled={props.disabled}>
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
}
