import React from 'react';

import { StyleSheet, View } from "react-native";
import RecentlyPlayedList from '../components/RecentlyPlayedList';

export default function Resume() {
    return (
        <View style={styles.container}>
            <RecentlyPlayedList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24
    }
});