import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './src/screen/Splash'
import Registration from './src/screen/Registration'
import Login from './src/screen/Login'
import Setting from './src/navigation/bottom/Setting'
import Faq from './src/screen/Faq'
import MainScreen from './src/screen/premium/MainScreen'
import Payment from './src/screen/premium/Payment'
import ReviewSummary from './src/screen/premium/ReviewSummary'
import StackNavigation from './src/navigation/stack/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
   <NavigationContainer>
     {/* <Splash/> */}
     {/* <Registration/> */}
     {/* <Login/> */}
     {/* <Setting/> */}
     {/* <Faq/> */}
     {/* <MainScreen/> */}
     {/* <Payment/> */}
     {/* <ReviewSummary/> */}
     <StackNavigation/>
     </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'white'
  }
})

// import React, { useEffect, useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Button,
//   ActivityIndicator,
// } from 'react-native';
// import TrackPlayer from 'react-native-track-player';
// import { setupPlayer, addTracks } from './trackPlayerServices';

// function App() {

//   const [isPlayerReady, setIsPlayerReady] = useState(false);

//   useEffect(() => {
//     async function setup() {
//       let isSetup = await setupPlayer();

//       const queue = await TrackPlayer.getQueue();
//       if(isSetup && queue.length <= 0) {
//         await addTracks();
//       }

//       setIsPlayerReady(isSetup);
//     }

//     setup();
//   }, []);

//   if(!isPlayerReady) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ActivityIndicator size="large" color="#bbb"/>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Button title="Play" color="#777" onPress={() => TrackPlayer.play()}/>
//       <Button title="Pause" color="#777" onPress={() => TrackPlayer.pause()}/>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#112'
//   },
// });

// export default App;