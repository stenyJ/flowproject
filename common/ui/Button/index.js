import React from 'react'
import {View,TouchableOpacity,Text} from 'react-native'
import {styles} from './styles'

export const ButtonComponent = (props) => {
    return(
        <View>
            <TouchableOpacity
                style = {styles[props.style]}
                onPress={props.onPress}>
                    <Text style ={styles.buttonText} > {props.title} </Text> 
            </TouchableOpacity>
        </View>
            
    )
}