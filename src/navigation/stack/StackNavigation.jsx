import { StyleSheet} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../../screen/Splash';
import Registration from '../../screen/Registration';
import Login from '../../screen/Login';
import DrawerNavigation from '../drawer/DrawerNavigation';
import BottomTabNavigation from '../bottom/BottomTabNavigation';
import Faq from '../../screen/Faq';
import PrivacyPolicy from '../../screen/PrivacyPolicy';
import Notification from '../../screen/Notification';
import Language from '../../screen/Language';
import Payment from '../../screen/premium/Payment';
import MainScreen from '../../screen/premium/MainScreen';
import ReviewSummary from '../../screen/premium/ReviewSummary';
import Player from '../../screen/Player';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Registration' component={Registration} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='FAQ' component={Faq} />
        <Stack.Screen name='Privacy Policy' component={PrivacyPolicy} />
        <Stack.Screen name='Notification' component={Notification} />
        <Stack.Screen name='Language' component={Language}/>
        <Stack.Screen name='Main Screen' component={MainScreen}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='Payment Review' component={ReviewSummary}/>
        <Stack.Screen name='Player' component={Player}/>
      </Stack.Navigator>
   
  )
}

export default StackNavigation

const styles = StyleSheet.create({})