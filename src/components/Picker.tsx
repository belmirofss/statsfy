import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

interface PickerProps {
    onValueChange(value: any): void;
    items: { label: string, value: any }[];
    value: any;
    children: ReactNode;
    width: number;
    fontSize: number;
}

export default function Picker(props: PickerProps) {
    
    const styles = StyleSheet.create({
        iconRNPicker: {
            position: 'absolute',
            right: 10,
            top: props.fontSize * 0.65
        }
    });

    return (
        <View>
            <RNPickerSelect
                onValueChange={value => props.onValueChange(value)}
                items={props.items}
                placeholder={{}}
                style={{
                    inputAndroid: {
                        color: 'black',
                        fontSize: props.fontSize,
                        fontFamily: 'clearSansBold',
                        padding: 8
                    },
                    inputAndroidContainer: {
                        borderWidth: 1,
                        borderColor: 'gainsboro',
                        borderRadius: 100,
                        width: props.width,
                        marginLeft: 4
                    }
                }}
                useNativeAndroidPickerStyle={false}
                value={props.value}
            />
            <MaterialCommunityIcons 
                style={styles.iconRNPicker} 
                name="chevron-down" 
                color="gainsboro" 
                size={24}
            />
        </View>
    );
}
