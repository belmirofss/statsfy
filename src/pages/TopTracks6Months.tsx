import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RankingTopTracks from '../components/RankingTopTracks';

export default function TopTracksAllTime() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <RankingTopTracks timeRange="medium_term" />
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