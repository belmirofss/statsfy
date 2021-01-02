import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RankingPositionProps } from '../interfaces/RankingPositionProps';

export default function RankingPosition(props: RankingPositionProps) {
    return (
        <View style={styles.container}>
            <View style={styles.positionWrapper}>
                <Text style={styles.positionText}>{props.position}</Text>
            </View>

            <View style={styles.innerContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.image.url
                    }}
                />

                <View style={styles.wrapperTitleAndSubTitle}>
                    <Text style={styles.titleText}>{ props.title }</Text>
                    { props.subTitle && <Text style={styles.subTitleText}>{ props.subTitle }</Text> }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: 6
    },
    innerContainer: {
        flexDirection: 'row',
        padding: 8,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 100,
    },
    wrapperTitleAndSubTitle: {
        marginLeft: 8,
        justifyContent: 'center'
    },
    positionWrapper: {
        width: 36,
        justifyContent: 'center',
    },
    positionText: {
        display: 'flex',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
        width: 36,
        justifyContent: 'center'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    titleText: {
        fontSize: 12,
        fontFamily: 'clearSansBold',
        whiteSpace: 'pre-wrap',
    },
    subTitleText: {
        fontSize: 11,
        fontFamily: 'clearSansRegular',
        whiteSpace: 'pre-wrap',
        color: 'gray',
    }
});