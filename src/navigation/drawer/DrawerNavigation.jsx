import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import History from './History';
import New from './New';

const Drawer = createDrawerNavigator();
const DrawerNavigation = ({navigation}) => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='History' component={History}/>
    <Drawer.Screen name='New' component={New}/>
   </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})