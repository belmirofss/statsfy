import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RankingTopArtists from '../components/RankingTopArtists';

export default function TopArtistsAllTime() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <RankingTopArtists timeRange="long_term" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24
    }
});