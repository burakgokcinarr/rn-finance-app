import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font, Theme } from '../constants'

export default function Card({ cardTitle = '', subTitle = '', customCardStyle = {}, icon = null }) {
    return (
        <View style={[styles.container, customCardStyle]}>
            <View style={{padding: 20}}>
                <Text style={styles.text}>{cardTitle}</Text>
                <Text style={styles.text}>{subTitle}</Text>
            </View>
            {
                icon
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.BG_COLOR,
        width: '35%',
        height: 150,
        borderRadius: 15,
        marginHorizontal: 25
    },
    text: {
        fontFamily: Font.regular,
        fontSize: 15,
        color: Theme.BG_COLOR
    }
})