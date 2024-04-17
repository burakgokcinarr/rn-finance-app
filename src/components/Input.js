import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Font, Theme } from '../constants'

export default function Input({ placeholder = '', onChangeText = null, keyboardType = 'default', returnKeyType = 'default', customStye = {}, textValue = '', multiline = false, isSecure = false}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={[styles.container, customStye]}
            onChangeText={onChangeText}
            placeholderTextColor={Theme.STROKE_COLOR}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            value={textValue}
            multiline={multiline}
            secureTextEntry={isSecure}
            autoCapitalize='none'
            textContentType='oneTimeCode' // iOS için şifreyi otomatik keychain kaydetmesini sorulmasını kapatma
        />
    )
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        height: 60,
        borderWidth: 1,
        borderColor: Theme.STROKE_COLOR,
        borderRadius: 20,
        padding: 10
    }
})