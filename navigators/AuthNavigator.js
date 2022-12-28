import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import CustomDrawer from '../componant/CustomDrawer';
import DrawerNavigator from './DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import Product from '../screens/Product';

  


const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {
      backgroundColor: '#FFB000', 
      // use your preferred color code
   } }}  >
      <Stack.Screen  options={{headerShown:false}} name="Login" component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignUp } />
      <Stack.Screen name='product' component={Product} />
      <Stack.Screen name="Notifications" component={ShoppingCartScreen} />
      <Stack.Screen name="custom" component={CustomDrawer} />
      <Stack.Screen  options={{headerShown:false}} name="drawerHome" component={DrawerNavigator} />
  </Stack.Navigator>
  )
}

export default AuthNavigator