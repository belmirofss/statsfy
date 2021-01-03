import React from 'react';

import { StyleSheet, View } from "react-native";
import RecentlyPlayedList from '../components/RecentlyPlayedList';
import ResumeTops from '../components/ResumeTops';

export default function Resume() {
    return (
        <View style={styles.container}>
            <View style={styles.marginTop}>
                <ResumeTops />
            </View>

            <View style={styles.marginTop}>
                <RecentlyPlayedList />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24
    },
    marginTop: {
        marginTop: 12
    }
});