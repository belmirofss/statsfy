import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

interface PickerProps {
    onValueChange: Function;
    items: { label: string, value: any }[];
    value: any;
    children: ReactNode;
}

export default function Picker(props: PickerProps) {
    return (
        <View>
            <RNPickerSelect
                    onValueChange={(value) => props.onValueChange(value)}
                    items={props.items}
                    placeholder={{}}
                    style={{
                        inputAndroid: {
                            color: 'black',
                            fontSize: 24,
                            fontFamily: 'clearSansBold',
                            padding: 8
                        },
                        inputAndroidContainer: {
                            borderWidth: 1,
                            borderColor: 'gainsboro',
                            borderRadius: 100,
                            width: 150,
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
                    size={24} />
        </View>
    );
}

const styles = StyleSheet.create({
    iconRNPicker: {
        position: 'absolute',
        left: 165,
        top: 16
    }
});