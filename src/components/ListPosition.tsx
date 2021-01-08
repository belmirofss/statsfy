import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ListPositionProps } from '../interfaces/ListPositionProps';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function ListPosition(props: ListPositionProps) {
    const calculateDifferenceToNow = (timestamp: string): string => {
        const date = new Date(timestamp);
        const now = new Date();
        
        let difference = now.getTime() - date.getTime();

        const daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24;

        if (daysDifference > 0) {
            return `${daysDifference}d`;
        }

        const hoursDifference = Math.floor(difference/1000/60/60);
        difference -= hoursDifference*1000*60*60;

        if (hoursDifference > 0) {
            return `${hoursDifference}h`;
        }

        const minutesDifference = Math.floor(difference/1000/60);
        difference -= minutesDifference*1000*60;

        if (minutesDifference > 0) {
            return `${minutesDifference}m`;
        }

        const secondsDifference = Math.floor(difference/1000);

        return `${secondsDifference}s`;
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{uri: props.image.url}} 
                style={styles.containerImageBackground}
                imageStyle={styles.image}>
                    <View style={styles.wrapperTimer}>
                        <MaterialCommunityIcons name="progress-clock" size={18} color='white' />
                        <Text style={styles.timerText}>{calculateDifferenceToNow(props.date)}</Text>
                    </View>
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
        padding: 8,
        maxHeight: 128
    },
    image: {
        borderRadius: 8
    },
    titleText: {
        fontSize: 14,
        fontFamily: 'clearSansBold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 5
    },
    subTitleText: {
        fontSize: 12,
        fontFamily: 'clearSansRegular',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 5
    },
    wrapperTimer: {
        flexDirection: 'row',
        backgroundColor: '#00000073',
        minWidth: 50,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        position: 'absolute',
        left: 8,
        top: 8
    },
    timerText: {
        color: 'white',
        fontSize: 12,
        marginLeft: 2,
        fontFamily: 'clearSansRegular'
    }
});