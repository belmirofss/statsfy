import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyStats() {
    return (
        <View style={styles.container}>
            <Text>My stats</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
    }
});