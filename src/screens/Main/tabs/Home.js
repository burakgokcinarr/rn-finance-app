import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Font, Theme } from '../../../constants';
import { AntDesign } from '@expo/vector-icons';
import { Card } from '../../../components';
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { data } from '../../../dummy/data';
import { Image } from 'expo-image';

export default function Home() {

  const auth = useSelector((state) => state.auth.auth);

  const renderItem = ({ item }) => {
    return (
      <View style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <Text style={styles.cellTitle}>{item.title}</Text>
          <Text style={styles.cellSubTitle}>{item.description}</Text>
        </View>
        <Image
          style={{width: 60, height: 60, borderRadius: 30}}
          source={item.image}
          contentFit="cover"
          transition={250}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {auth?.displayName}.</Text>
      <View style={styles.card}>
        <Text style={styles.title2}>Your total asset portfolio</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={styles.title3}>N203,935</Text>
          <TouchableOpacity style={styles.cardBtn}>
            <Text style={styles.title4}>Invest now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
        <Text style={styles.best}>Best Plans</Text>
        <Text style={styles.seeAll}>See All <AntDesign name="arrowright" size={18} color={Theme.RED_COLOR} /></Text>
      </View>
      {
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <Card cardTitle='Gold' subTitle='30% return' customCardStyle={{backgroundColor: Theme.GOLD_COLOR}} icon={<MaterialCommunityIcons style={styles.image} name="gold" size={100} color={Theme.BG_COLOR} />}/>
          <Card cardTitle='Gold' subTitle='30% return' customCardStyle={{backgroundColor: Theme.SILVER_COLOR}} icon={<FontAwesome6 style={styles.image} name="euro-sign" size={100} color={Theme.BG_COLOR} />}/>
          <Card cardTitle='Gold' subTitle='30% return' customCardStyle={{backgroundColor: Theme.PILATIN_COLOR}} icon={<MaterialCommunityIcons style={styles.image} name="podium-silver" size={100} color={Theme.BG_COLOR} />}/>
        </ScrollView>
      }
      <Text style={styles.best}>Investment Guide</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 25,
    fontFamily: Font.regular,
    color: Theme.DARK_COLOR,
    marginHorizontal: 5
  },
  card: {
    width: '80%',
    height: 145,
    backgroundColor: Theme.GREEN_COLOR,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    padding: 20
  },
  title2: {
    fontSize: 16,
    fontFamily: Font.regular,
    color: Theme.BG_COLOR
  },
  title3: {
    fontSize: 32,
    fontFamily: Font.italic,
    color: Theme.BG_COLOR
  },
  cardBtn: {
    backgroundColor: Theme.BG_COLOR,
    padding: 15,
    borderRadius: 15
  },
  title4: {
    fontSize: 14,
    fontFamily: Font.regular,
    color: Theme.GREEN_COLOR,
    textAlign: 'center'
  },
  best: {
    fontSize: 22,
    fontFamily: Font.regular,
    color: Theme.DARK_COLOR,
    marginHorizontal: 5
  },
  seeAll: {
    fontSize: 18,
    fontFamily: Font.regular,
    color: Theme.RED_COLOR,
    marginHorizontal: 5
  },
  image: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  cellTitle: {
    fontSize: 18,
    fontFamily: Font.regular,
    color: Theme.DARK_COLOR,
    marginVertical: 5
  },
  cellSubTitle: {
    fontSize: 14,
    fontFamily: Font.italic,
    color: Theme.DARK_COLOR,
    marginVertical: 5
  }
})