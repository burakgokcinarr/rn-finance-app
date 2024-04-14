import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font, Theme } from '../../constants'
import { Image } from 'expo-image';

const welcomeImage = require('../../../assets/images/welcome.svg');

export default function Welcome() {
  return (
    <View style={styles.container}>
       <Image
        style={styles.image}
        source={welcomeImage}
        contentFit="contain"
        transition={500}
      />
      <Text style={styles.title}>
        Stay on top of your finance with us.
      </Text>
      <Text style={styles.subTitle}>
        We are your new financial Advisors to recommed the best investments for you.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.BG_COLOR
    },
    image: {
        width: '100%',
        height: 260,
        backgroundColor: Theme.BG_COLOR,
    },
    title: {
        fontSize: 34,
        fontFamily: Font.regular,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Theme.DARK_COLOR
    },
    subTitle: {
        fontSize: 17,
        fontFamily: Font.regular,
        textAlign: 'center',
        color: Theme.DARK_LIGHT_COLOR,
        padding: 1
    }
})