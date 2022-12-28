import { View,TouchableOpacity, Text,Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addShopping,deleteRow } from '../store/shoppingSlice'
import { StatusBar,Image,Heading,Box} from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view';

const renderItem = ({ item }) => (
 <Box flex={1}  >
   <Item title={item.name}
   image={item.image} 
   price={item.price}
   qte={item.qte}
   
     />
 </Box>
);
const Item = ({ title,image,price,qte }) => (
  
  <Box  borderLeftStyle={'2px solid'} borderLeftRadius={"3xl"} borderTopLeftRadius={'2xl'} backgroundColor={'white'} w={"110%"}  margin={4} h="70" justifyContent={'center'}  alignItems={"center"} flexDirection={"row"}   >
   
    <Text >{title}</Text>
    <Image source={{uri:image}}   alt={title}
              
                w="20"
                h="20"
                resizeMode="contain"
                 />
     <Box bg={'white'} borderRadius={"full"}>
     <Text style={{color:'gray' }} >{price} </Text>  
     
     </Box>          
                
                 

  </Box>
);


// }

const ShoppingCartScreen= ({ navigation }) => {

  

  const dispatch = useDispatch()
  const {shoppingCart} = useSelector((state) => state.shoppingCart)
// closeRow
const HiddenItemWithActions = (props)=>{
  const {onDelete}=props
  
  
 return(
  <Box >
    
    <Box position={'absolute'} right={0}  flexDirection={"row"} padding={4} >
    
      <TouchableOpacity  style={{marginLeft:2,borderBottomRightRadius:20,borderTopRightRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'red',height:70,width:120}} onPress={onDelete}>
        <Text>delete</Text>
      </TouchableOpacity>
    </Box>
  </Box>
 )
}
   
  return (
    
      <Box  style={{ flex: 1, backgroundColor:'palegreen'}}>

<Box flex={1} >
<SwipeListView
  data={shoppingCart}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  renderHiddenItem={ (data,rowMap)=> (
  
  <HiddenItemWithActions
    data={data}
    rowMap={rowMap}
    onDelete={()=>dispatch(deleteRow(data.index))}
  />
   
)}
leftOpenValue={0}
rightOpenValue={-170}

/>
</Box>
<Button onPress={() =>dispatch(addShopping())} title="Go back home" />
</Box>
    
    
    
    )}


    

export default ShoppingCartScreen
