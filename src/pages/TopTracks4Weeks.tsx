import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RankingTopTracks from '../components/RankingTopTracks';

export default function TopTracks4Weeks() {

    return (
        <ScrollView>
            <View style={styles.container}>
                <RankingTopTracks timeRange="short_term" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 16
    }
});