import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ListPositionProps } from '../interfaces/ListPositionProps';

export default function ListPosition(props: ListPositionProps) {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{uri: props.image.url}} 
                style={styles.containerImageBackground}
                imageStyle={styles.image}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.linearGradient}>
                        <Text style={styles.titleText}>{ props.title }</Text>
                        <Text style={styles.subTitleText}>{ props.subTitle }</Text>
                    </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const widthWindow = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        height: widthWindow * 0.425,
        width: widthWindow * 0.425,
    },
    containerImageBackground: {
        justifyContent: 'flex-end',
        flexDirection: 'column',
        flex: 1
    },
    linearGradient: {
        padding: 8
    },
    image: {
        borderRadius: 8
    },
    titleText: {
        fontSize: 14,
        fontFamily: 'clearSansBold',
        whiteSpace: 'pre-wrap',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius:  5
    },
    subTitleText: {
        fontSize: 12,
        fontFamily: 'clearSansRegular',
        whiteSpace: 'pre-wrap',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 5
    }
});