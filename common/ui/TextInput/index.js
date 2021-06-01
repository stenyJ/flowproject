import React from 'react'
import {View,TextInput} from 'react-native'
import {styles} from './styles';

export const TextInputComponent = ({placeholder,style,placeholderTextColor}) => {
    return(
        <View>
            <TextInput 
                style = {styles[style]}
                placeholder = {placeholder} 
                placeholderTextColor = {placeholderTextColor}
            />
        </View>
    )
}