import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

import { PodiumItem } from '../interfaces/PodiumItem';
import { PodiumProps } from '../interfaces/PodiumProps';

interface otherPodiumProps extends PodiumItem {
    position: number;
}

const WinnerPodium = (props: PodiumItem) => {
    return (
        <View style={podiumStyles.winner}>
            <Text style={podiumStyles.positionText}>1</Text>
            <Image
                style={podiumStyles.bigImage}
                source={{
                    uri: props.image.url
                }}
            />

            <Text style={podiumStyles.titleText}>{ props.title }</Text>
            { props.subTitle && <Text style={podiumStyles.subTitleText}>{ props.subTitle }</Text> }
        </View>
    );
}

const OtherPodium = (props: otherPodiumProps) => {
    return (
        <View style={podiumStyles.others}>
            <Text style={podiumStyles.positionText}>{props.position}</Text>
            <Image
                style={podiumStyles.smallImage}
                source={{
                    uri: props.image.url
                }}
            />

            <Text style={podiumStyles.titleText}>{ props.title }</Text>
            { props.subTitle && <Text style={podiumStyles.subTitleText}>{ props.subTitle }</Text> }
        </View>
    );
}

export default function Podium(props: PodiumProps) {
    const items = props.data;

    if (items.length > 2) {
        return (
            <View style={styles.container}>
                <OtherPodium position={2} id={items[1].id} title={items[1].title} subTitle={items[1].subTitle} image={items[1].image}/>
                <WinnerPodium id={items[0].id} title={items[0].title} subTitle={items[0].subTitle} image={items[0].image}/>
                <OtherPodium position={3} id={items[2].id} title={items[2].title} subTitle={items[2].subTitle} image={items[2].image}/>
            </View>
        );
    } else {
        return null;
    }
}

const widthWindow = Dimensions.get('window').width;

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
        marginTop: widthWindow * 0.08536585365,
    },
    bigImage: {
        height: widthWindow * 0.30487804878,
        width: widthWindow * 0.30487804878,
        borderRadius: 100
    },
    smallImage: {
        height: widthWindow * 0.21951219512,
        width: widthWindow * 0.21951219512,
        borderRadius: 100
    },
    positionText: {
        fontSize: 18,
        marginBottom: 6,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
    },
    titleText: {
        fontSize: 12,
        marginTop: 6,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
        whiteSpace: 'pre-wrap',
        width: widthWindow * 0.24390243902
    },
    subTitleText: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'clearSansRegular',
        whiteSpace: 'pre-wrap',
        color: 'gray',
        width: widthWindow * 0.24390243902
    }
});