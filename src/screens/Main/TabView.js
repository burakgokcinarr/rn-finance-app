import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Account, Product, Transaction } from '../Main/tabs';
import { MaterialCommunityIcons, MaterialIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { Font, Theme } from '../../constants'

const Tab = createBottomTabNavigator();

export default function TabView() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-filled';
            return <MaterialIcons name={iconName} size={size} color={color} />

          } else if (route.name === 'product') {
            iconName = focused ? 'search' : 'search-outline';
            return <Ionicons name={iconName} size={size} color={color} />

          } else if (route.name === 'transaction') {
            iconName = focused ? 'money-bill-transfer' : 'money-bill-transfer';
            return <FontAwesome6 name={iconName} size={size} color={color} />

          } else if (route.name === 'account') {
            iconName = focused ? 'account' : 'account-outline';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />

          }
        },
        tabBarActiveTintColor: Theme.GREEN_COLOR,
        tabBarInactiveTintColor: Theme.DARK_LIGHT_COLOR,
        headerShown: true,
        //title: '',
        headerShadowVisible: false,
        tabBarLabelStyle: {
          fontFamily: Font.regular,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: Theme.BG_COLOR,
        }
      })}
    >
      <Tab.Screen name="home" component={Home} options={{tabBarLabel: 'Home', headerShown: true}}/>
      <Tab.Screen name="product" component={Product} options={{tabBarLabel: 'Product'}}/>
      <Tab.Screen name="transaction" component={Transaction} options={{tabBarLabel: 'Transaction'}}/>
      <Tab.Screen name="account" component={Account} options={{tabBarLabel: 'Account'}}/>
    </Tab.Navigator>
  )
}