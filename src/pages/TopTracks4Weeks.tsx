import React from 'react';
import { StyleSheet, View } from 'react-native';
import RankingTopTracks from '../components/RankingTopTracks';

export default function TopTracks4Weeks() {
    return (
        <View style={styles.container}>
            <RankingTopTracks timeRange="short_term" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24
    }
});