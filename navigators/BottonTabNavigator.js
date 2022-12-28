import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View ,Text} from 'react-native';

const Tab = createBottomTabNavigator();
const BottonTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
        headerShown:false,
        
        // tabBarButton:()=>(
        //   <View style={{position:"absolute",top:-20}} >
        //     <Text>eoiizoj</Text>
        //   </View>
        // )
    
          // tabBarActiveTintColor:'green',
          // tabBarInactiveTintColor:'black',
          // tabBarAccessibilityLabel:true
     
        
    })} >
        <Tab.Screen name="Home" options={()=>({
             tabBarIcon:({color,size})=> {
                return <Icon name="home"  size={20} color="#900" />
             }
        }) } component={HomeScreen} />
        <Tab.Screen name="ShoppingCart"  options={{tabBarIcon:()=><Icon name="ios-cart-sharp" size={20} color="#900" /> }} component={ShoppingCartScreen} />
        <Tab.Screen name="contact"  options={{tabBarIcon:()=><Icon name="call" size={20} color="#900" /> }} component={ContactScreen} />

      </Tab.Navigator> 

  )
}

export default BottonTabNavigator