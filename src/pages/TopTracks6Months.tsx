import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import RankingTopTracks from '../components/RankingTopTracks';

export default function TopTracks6Months() {
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
      padding: 24
    }
});