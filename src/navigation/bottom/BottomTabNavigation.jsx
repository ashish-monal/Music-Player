import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Favourites from './Favourites';
import Playlist from './Playlist';
import Setting from './Setting';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
   <Tab.Navigator  screenOptions={{
    tabBarActiveTintColor:'orange'
   }}>
    <Tab.Screen name='Home' component={Home} options={{
      tabBarIcon:({color,size}) => (
        <Ionicons name="home" color={color} size={size} />  
      ),
      headerShown:false
    }}/>
    <Tab.Screen name='Favourites' component={Favourites} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          headerShown:false
        }}/>
    <Tab.Screen name='Playlist' component={Playlist} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play" color={color} size={size} />
          ),
          headerShown:false
        }}/>
    <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerShown:false
        }}/>
    <Tab.Screen name='Setting' component={Setting} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          headerShown:false
        }}/>
   </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})