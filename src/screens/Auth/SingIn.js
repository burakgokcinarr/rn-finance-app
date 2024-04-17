import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Font, Theme } from '../../constants'
import { Input, Button } from '../../components'

export default function SignIn() {

  const [createAccount, setCreateAccount] = useState({ fullName: '', email: '', password: '' });

  const handleInputChange = (key, value) => {
    setCreateAccount(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const loginClicked = () => {
    console.log("login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>
      <View style={styles.inputView}>
        <Input placeholder='Email address' onChangeText={text => handleInputChange('email', text)} textValue={createAccount.email} keyboardType='email-address'/>
        <Input placeholder='Password' onChangeText={text => handleInputChange('password', text)} textValue={createAccount.password} />
      </View>
      <Button title='Login' buttonStyle={{alignSelf: 'center'}} onClicked={loginClicked}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontFamily: Font.regular,
    fontSize: 34,
    color: Theme.DARK_COLOR,
    textAlign: 'center'
  },
  subTitle: {
    fontFamily: Font.regular,
    fontSize: 17,
    color: Theme.DARK_LIGHT_COLOR,
    textAlign: 'center'
  },
  inputView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '15%',
    gap: 10
  },
  haveAccount: {
    fontFamily: Font.regular,
    fontSize: 17,
    color: Theme.GREEN_COLOR,
    textAlign: 'center',
    marginTop: 10
  }
})