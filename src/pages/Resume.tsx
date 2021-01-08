import React, { useState } from 'react';

import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecentlyPlayedList from '../components/RecentlyPlayedList';
import ResumeTops from '../components/ResumeTops';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyStats from '../components/MyStats';

export default function Resume() {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}>
                        <TouchableOpacity style={styles.centeredView} onPress={() => setModalVisible(false)}>
                            <View style={styles.modalView}>
                                <MyStats />
                            </View>
                        </TouchableOpacity>
                </Modal>

                <View style={styles.wrapperButtonshareMyStats}>
                    <TouchableOpacity style={styles.shareMyStatsButton} onPress={() => setModalVisible(true)}>
                        <MaterialCommunityIcons name="share" size={32} color="white" />
                        <Text style={styles.shareMyStatsText}>Share my stats</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.marginTop}>
                    <ResumeTops />
                </View>

                <View style={styles.marginTop}>
                    <RecentlyPlayedList />
                </View>
            </View>
        </ScrollView>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#rgba(0, 0, 0, 0.75)',
        width: '100%'
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 6,
        padding: 12,
        alignItems: "center"
    },
    wrapperButtonshareMyStats: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    shareMyStatsButton: {
        backgroundColor: '#1ED760',
        paddingHorizontal: 8,
        paddingVertical: 12,
        width: '100%',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    shareMyStatsText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'clearSansBold',
        marginLeft: 4
    },
    marginTop: {
        marginTop: 12
    }
});