import React from 'react';
import { StyleSheet, View } from 'react-native';
import RankingTopTracks from '../components/RankingTopTracks';

export default function TopTracksAllTime() {
    return (
        <View style={styles.container}>
            <RankingTopTracks timeRange="long_term" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24
    }
});