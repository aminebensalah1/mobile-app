import { View, Text } from 'react-native'
import React from 'react'
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../componant/CustomDrawer';
import BottonTabNavigator from './BottonTabNavigator';
import { Image} from 'react-native'; 


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"  screenOptions={{headerStyle: {
      backgroundColor: '#FFB000', 
      // use your preferred color code
   }, headerTitle:'',drawerActiveBackgroundColor:'gray', overlayColor: 'transparent',headerTintColor:'red',
    headerRight:()=>(
     <View  style={{width:200,flexDirection:'row',justifyContent:'space-between',padding:10
      }} >
    <Text style={{color:"red"}} >product pokemon</Text>
      <Image style={{width:40,height:40,position:"absolute",right:10,borderRadius:50 }}  source={require('../images/th.jpg')}  alt="Alternate Text" size="xl" />
      
     </View>
      ),   
    }}  drawerContent={(props)=> <CustomDrawer {...props} />}   >
      <Drawer.Screen name="Home" component={BottonTabNavigator} />
    <Drawer.Screen name="ShoppingCart" component={ShoppingCartScreen} />
  
    
  </Drawer.Navigator>
  )
}

export default DrawerNavigator