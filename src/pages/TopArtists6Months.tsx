import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RankingTopArtists from '../components/RankingTopArtists';

export default function TopArtists6Months() {

    return (
        <ScrollView>
            <View style={styles.container}>
                <RankingTopArtists timeRange="medium_term" />
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