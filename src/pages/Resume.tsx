import React, { useState } from 'react';

import { Modal, ScrollView, StyleSheet, View } from "react-native";
import RecentlyPlayedList from '../components/RecentlyPlayedList';
import ResumeTops from '../components/ResumeTops';
import MyStats from '../components/MyStats';
import Admob from '../services/Admob';
import RountedButton from '../components/RoundedButton';

export default function Resume() {
    const [modalVisible, setModalVisible] = useState(false);

    React.useEffect(() => {
        Admob.showInterstitial()
    }, []);
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}>
                        <View style={styles.centeredView}>
                            <MyStats close={() => setModalVisible(false)}/>
                        </View>
                </Modal>

                <View style={styles.wrapperButtonshareMyStats}>
                    <RountedButton
                        onPress={() => setModalVisible(true)}
                        color="white"
                        backgroundColor="#1ED760"
                        label="Share my stats">
                    </RountedButton>
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
      padding: 16
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#rgba(0, 0, 0, 0.75)'
    },
    wrapperButtonshareMyStats: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    marginTop: {
        marginTop: 12
    }
});