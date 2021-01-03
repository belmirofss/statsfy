import React from 'react';
import { StyleSheet, View } from 'react-native';

import RankingTopTracks from '../components/RankingTopTracks';

export default function TopTracks6Months() {
    return (
        <View style={styles.container}>
            <RankingTopTracks timeRange="medium_term" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24
    }
});