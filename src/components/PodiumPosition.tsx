import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageSpotify } from '../interfaces/ImageSpotify';
import notFound from '../images/not_found.png';

interface PodiumPositionProps {
    position: number;
    image: ImageSpotify;
    title: string;
    subTitle?: string;
}

export default function PodiumPosition(props: PodiumPositionProps) {

    const pieceOfWidth = Dimensions.get('window').width / 3;
    const gap = 20;
    const size = props.position == 1 ?  pieceOfWidth * 1.25 - gap : pieceOfWidth * 0.875 - gap;

    return (
        <View style={{
            ... styles.container,
            marginTop: props.position == 1 ? 0 : size * 0.5
        }}>
            <MaterialCommunityIcons
                name="crown"
                size={28}
                color={
                    props.position == 1 ? 'gold' : props.position == 2 ? 'silver' : '#804A00'
                }
            />
            <Text style={styles.positionText}>{props.position}</Text>
            <Image
                style={{
                    ... styles.image,
                    height: size,
                    width: size,
                    borderWidth: 1,
                    borderColor: 'whitesmoke'
                }}
                source={props.image ? {
                    uri: props.image.url
                } : notFound}
            />

            <Text
                style={{
                    ... styles.title,
                    width: size
                }}
                numberOfLines={3}>
                { props.title?.length > 0 ? props.title : '-' }
            </Text>

            { 
                props.subTitle && props.subTitle.length > 0 && (
                    <Text
                        style={{
                            ... styles.subtitle,
                            width: size - gap
                        }}
                        numberOfLines={5}>
                        { props.subTitle }
                    </Text> 
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    positionText: {
        fontSize: 18,
        marginBottom: 6,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
    },
    image: {
        borderRadius: 100
    },
    title: {
        fontSize: 14,
        marginTop: 6,
        textAlign: 'center',
        fontFamily: 'clearSansBold',
        color: 'black'
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'clearSansRegular',
        color: 'gray'
    }
});