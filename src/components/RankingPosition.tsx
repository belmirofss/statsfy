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
                    <Text style={styles.titleText} numberOfLines={2}>{ props.title }</Text>
                    { props.subTitle && <Text style={styles.subTitleText} numberOfLines={2}>{ props.subTitle }</Text> }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: 4
    },
    innerContainer: {
        flexDirection: 'row',
        height: 100,
        flex: 1,
        alignItems: 'center',
        paddingRight: 24,
        paddingLeft: 12,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'gainsboro',
        borderRadius: 100,
    },
    wrapperTitleAndSubTitle: {
        marginLeft: 8,
        justifyContent: 'center',
        flex: 1
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
        height: 75,
        width: 75,
        borderRadius: 100
    },
    titleText: {
        fontSize: 14,
        fontFamily: 'clearSansBold'
    },
    subTitleText: {
        fontSize: 12,
        fontFamily: 'clearSansRegular',
        color: 'gray',
    }
});