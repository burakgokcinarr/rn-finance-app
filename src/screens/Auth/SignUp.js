import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Font, Theme } from '../../constants'
import { Input, Button } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setAuth } from '../../redux/authSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function SignUp() {

  const dispatch                          = useDispatch();
  const navigation                        = useNavigation();
  const [createAccount, setCreateAccount] = useState({ fullName: '', email: '', password: '' });

  const handleInputChange = (key, value) => {
    setCreateAccount(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const createAccountClicked = () => {
    createUserWithEmailAndPassword(auth, createAccount.email, createAccount.password)
    .then((userCredential) => {
        const user = userCredential.user;
        // User Detail Update
        updateProfile(user, {
          displayName: createAccount.fullName
        }).then((data) => {
          //console.log(user)
          dispatch(setAuth({uid: user.uid, displayName: user.displayName}))
        })
    })
    .catch((error) => {
        alert(error)
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Create an Account
      </Text>
      <Text style={styles.subTitle}>
        Invest and double your income now
      </Text>
      <View style={styles.inputView}>
        <Input placeholder='Full name' onChangeText={text => handleInputChange('fullName', text)} textValue={createAccount.fullName}/>
        <Input placeholder='Email address' onChangeText={text => handleInputChange('email', text)} textValue={createAccount.email} keyboardType='email-address'/>
        <Input placeholder='Password' onChangeText={text => handleInputChange('password', text)} textValue={createAccount.password} />
      </View>
      <Button title='Create Account' buttonStyle={{alignSelf: 'center'}} onClicked={createAccountClicked}/>
      <TouchableOpacity onPress={() => navigation.navigate('signin')}>
        <Text style={styles.haveAccount}>
          Already have an account?
        </Text>
      </TouchableOpacity>
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