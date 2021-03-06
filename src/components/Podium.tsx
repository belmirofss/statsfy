import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { PodiumItem } from '../interfaces/PodiumItem';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants } from '../constants/Constants';

interface OtherPodiumProps extends PodiumItem {
    position: number;
}

interface WinnerPodiumProps extends PodiumItem {}

interface PodiumProps {
    data: PodiumItem[];
}

function getSubtitle(subtitle: string | undefined, width: number) {
    if (subtitle && subtitle.length > 0) {
        return (
            <Text style={{...podiumStyles.subTitleText, width}}>
                { subtitle }
            </Text> 
        )
    }
}

const WinnerPodium = (props: WinnerPodiumProps) => {
    const winnerStyles = {
        image: {
            height: 125,
            width: 125,
            borderRadius: 100
        }
    }

    return (
        <View style={podiumStyles.winner}>
            <MaterialCommunityIcons name="crown" size={28} color='gold' />
            <Text style={podiumStyles.positionText}>1</Text>
            <Image
                style={winnerStyles.image}
                source={{
                    uri: props.image ? props.image.url : Constants.NO_IMAGE_FOUND
                }}
            />

            <Text style={{...podiumStyles.titleText, width: 125}} numberOfLines={3}>
                { props.title?.length > 0 ? props.title : '-' }
            </Text>
            { getSubtitle(props.subTitle, 125) }
        </View>
    );
}

const OtherPodium = (props: OtherPodiumProps) => {
    const otherStyles = {
        image: {
            height: 85,
            width: 85,
            borderRadius: 100
        }
    }

    return (
        <View style={podiumStyles.others}>
            <MaterialCommunityIcons 
                name="medal" 
                size={24} 
                color={props.position === 2 ? 'silver' : '#804A00'} />

            <Text style={podiumStyles.positionText}>{props.position}</Text>
            <Image
                style={otherStyles.image}
                source={{
                    uri: props.image ? props.image.url : Constants.NO_IMAGE_FOUND
                }}
            />

            <Text style={{...podiumStyles.titleText, width: 85}} numberOfLines={3}>
                { props.title?.length > 0 ? props.title : '-' }
            </Text>
            { getSubtitle(props.subTitle, 85) }
        </View>
    );
}

export default function Podium(props: PodiumProps) {
    const items = props.data;
    
    if (items.length > 2) {
        return (
            <View style={styles.container}>
                <OtherPodium 
                    position={2} 
                    id={items[1].id} 
                    title={items[1].title} 
                    subTitle={items[1].subTitle} 
                    image={items[1].image}/>

                <WinnerPodium 
                    id={items[0].id} 
                    title={items[0].title} 
                    subTitle={items[0].subTitle} 
                    image={items[0].image}/>

                <OtherPodium 
                    position={3} 
                    id={items[2].id} 
                    title={items[2].title} 
                    subTitle={items[2].subTitle} 
                    image={items[2].image}/>
            </View>
        );
    } else {
        return null;
    }
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
    positionText: {
        fontSize: 18,
        marginBottom: 6,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
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