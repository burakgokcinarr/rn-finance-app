import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Font, Theme } from '../constants'

export default function Button({ onClicked = null, title = '-', textStyle = {}, buttonStyle = {} }) {
    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onClicked}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 60,
        borderRadius: 20,
        backgroundColor: Theme.GREEN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    title: {
        fontFamily: Font.regular,
        fontSize: 17,
        color: Theme.BG_COLOR,
        textAlign: 'center'
    }
})