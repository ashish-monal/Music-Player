import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Player = () => {
  return (
    <View style={styles.mainContainer}>
     <Image source={require('../../assets/images/poster.jpeg')} resizeMode='contain' style={{height:'200',width:'200'}}/>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%'
    }
})