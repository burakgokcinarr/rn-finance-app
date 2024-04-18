import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font, Theme } from '../../../constants';
import { Image } from 'expo-image';
import { useSelector, useDispatch } from 'react-redux';
import { Entypo, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Button } from '../../../components';
import { auth } from '../../../config/firebaseConfig';
import { signOut } from "firebase/auth";
import { logout } from '../../../redux/authSlice';

const userProfile = require('../../../../assets/images/profile.png');

export default function Account() {

  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.auth);

  const Card = ({ title = '', icon = null }) => {
    return (
      <View style={styles.card}>
        {icon}
        <Text style={styles.cardTitle}>{title}</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </View>
    )
  }

  const userLogout = () => {
    signOut(auth).then(() => {
      console.log("Logged out");
      dispatch(logout());
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.subView}>
        <Image
          style={styles.image}
          source={userProfile}
          contentFit="cover"
        />
        <Text style={styles.displayName}>{authUser?.displayName}</Text>
        <Text style={styles.displayName}>Expert</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card title='Contact Info' icon={<MaterialIcons name="perm-contact-cal" size={24} color={Theme.DARK_COLOR} />}/>
          <Card title='Source of Funding Info' icon={<MaterialCommunityIcons name="credit-card-refund" size={24} color={Theme.DARK_COLOR} />}/>
          <Card title='Bank Account' icon={<MaterialCommunityIcons name="bank-minus" size={24} color={Theme.DARK_COLOR} />}/>
          <Card title='Document Info' icon={<MaterialCommunityIcons name="file-document" size={24} color={Theme.DARK_COLOR} />}/>
          <Card title='Settings' icon={<Ionicons name="settings" size={24} color={Theme.DARK_COLOR} />}/>
        </ScrollView>
        <Button title='Logout' buttonStyle={{backgroundColor: Theme.RED_COLOR}} onClicked={userLogout}/>
      </View>
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
    paddingHorizontal: 20
  },
  subView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 150,
    height: 150
  },
  displayName: {
    fontFamily: Font.italic,
    fontSize: 22,
    marginTop: 10
  },
  card: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    height: 60, 
    borderWidth: 1, 
    borderColor: Theme.STROKE_COLOR, 
    backgroundColor: Theme.BG_COLOR,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
  cardTitle: {
    fontFamily: Font.regular,
    fontSize: 17,
    textAlign: 'center'
  }
})