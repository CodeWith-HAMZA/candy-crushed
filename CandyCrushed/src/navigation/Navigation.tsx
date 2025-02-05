import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../utils/NavigationUtil';
import SplashScreen from '../screens/Splash';
import Home from '../screens/Home';
import LevelScreen from '../screens/Level';
import GameScreen from '../screens/Game';
 
const Stack =  createNativeStackNavigator();
const Navigation = () => {
  return (
   <NavigationContainer  ref={navigationRef}>

<Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Splash' >

    <Stack.Screen name="Splash" options={{animation: 'fade'}} component={SplashScreen} />
    <Stack.Screen name="Home" options={{animation: 'fade'}} component={Home} />
    <Stack.Screen name="Level" options={{animation: 'fade'}} component={LevelScreen} />
    <Stack.Screen name="Game" options={{animation: 'fade'}} component={GameScreen} />


</Stack.Navigator>
   </NavigationContainer>
   
  )
}

export default Navigation

const styles = StyleSheet.create({})