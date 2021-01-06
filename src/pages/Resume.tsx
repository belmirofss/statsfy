import React, { useState } from 'react';

import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecentlyPlayedList from '../components/RecentlyPlayedList';
import ResumeTops from '../components/ResumeTops';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyStats from '../components/MyStats';

export default function Resume() {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <MyStats />
                    </View>
                </View>
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
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
        fontSize: 24,
        fontFamily: 'clearSansBold',
        marginLeft: 4
    },
    marginTop: {
        marginTop: 12
    }
});