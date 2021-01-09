import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RankingTopArtists from '../components/RankingTopArtists';

export default function TopArtists4Weeks() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <RankingTopArtists timeRange="short_term" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    }
});