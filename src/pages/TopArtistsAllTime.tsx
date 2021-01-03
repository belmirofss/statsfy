import React from 'react';
import { StyleSheet, View } from 'react-native';
import RankingTopArtists from '../components/RankingTopArtists';

export default function TopArtistsAllTime() {
    return (
        <View style={styles.container}>
            <RankingTopArtists timeRange="long_term" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24
    }
});