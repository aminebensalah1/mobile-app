import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
<View style={{backgroundColor:'#FFB000',borderRadius:20}} flex={1}>
<StatusBar/>
<DrawerContentScrollView {...props}>
       <View style={{backgroundColor:'white',borderRadius:10, height:80 ,marginBottom:30,padding:20}}>
        <View style={{backgroundColor:"red",width:30,height:30,borderRadius:50}} >
            <Text></Text>
        </View>
        <Text style={{color:"red",}} >AMINE</Text>
       </View>
      
    <DrawerItemList {...props} />
    
  </DrawerContentScrollView>
</View>

  )
}

export default CustomDrawer