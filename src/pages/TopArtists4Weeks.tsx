import React from 'react';
import { StyleSheet, View } from 'react-native';
import RankingTopArtists from '../components/RankingTopArtists';

export default function TopArtists4Weeks() {
    return (
        <View style={styles.container}>
            <RankingTopArtists timeRange="short_term" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24
    }
});