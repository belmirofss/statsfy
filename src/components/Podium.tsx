import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PodiumItem } from '../interfaces/PodiumItem';
import PodiumPosition from './PodiumPosition';

interface PodiumProps {
    data: PodiumItem[];
}

export default function Podium(props: PodiumProps) {

    const [second, first, third ] = props.data;

    if (!first || !second || !third) {
        return <></>;
    }
    
    return (
        <View style={styles.container}>
            <PodiumPosition 
                position={2} 
                title={second.title} 
                subTitle={second.subTitle} 
                image={second.image}
            />

            <PodiumPosition 
                position={1} 
                title={first.title} 
                subTitle={first.subTitle} 
                image={first.image}
            />

            <PodiumPosition 
                position={3} 
                title={third.title} 
                subTitle={third.subTitle} 
                image={third.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row'
    }
});

const podiumStyles = StyleSheet.create({
    winner: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    others: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 64,
    },
    
    titleText: {
        fontSize: 14,
        marginTop: 6,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
        color: 'black'
    },
    subTitleText: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'clearSansRegular',
        color: 'gray'
    }
});