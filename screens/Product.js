import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { StatusBar,Image,Heading,Box} from 'native-base'
import NumericInput from 'react-native-numeric-input'
import ButtonComponant from '../componant/ButtonComponant'
import { useSelector,useDispatch } from 'react-redux';
import {addShopping, emptyShopping } from '../store/shoppingSlice'

const Product = ({route,navigation}) => {
  const {shoppingCart} = useSelector((state) => state.shoppingCart)
  const dispatch = useDispatch()
 
  const [textValue,setTextValue]=useState(1)
  const {product} = route.params
  
//chnage qte the product
  useEffect(()=>{
   handleChangeInput()
 
   
  },[])
  const handleChangeInput = (value)=>{
    setTextValue(value)
  }
  //add product en command
 
   

  const handleShopping = ()=>{
    // const newProduct= {...product,qte:textValue}
    // setShoppingCart([...shoppingCart,newProduct])
    // navigation.navigate("Home")
   const newProduct= {...product,qte:textValue}
   
dispatch(addShopping(newProduct))

 navigation.navigate("Home")

  }
 

  
  return (
    <View  alignItems='center' flex={1} >
        <StatusBar/>
        <Heading color={"blue.500"} >{product.name} </Heading>
      <Image source={{uri: product.image}}   alt={product.name}
                w='full'
                h='30%'
                resizeMode="contain"
                 />
      
        <Box   w={300}>
        
      <View style={{marginBottom:50}}>
      <Text  > fdljo jssoijw j iiii jhod iopuiiubsusuko ukspkpdhlj IHIHond JOOkdo zei </Text>
      </View>
       <Box marginLeft={20} >
       <NumericInput 
       value={textValue}
       onChange={(value)=> handleChangeInput(value) }
       
       onLimitReached={(isMax,msg) => console.log(isMax,msg)}
       totalWidth={150} 
       totalHeight={30} 
       iconSize={25}
       step={1}
       valueType='real'
       rounded 
       textColor='#B0228C' 
       iconStyle={{ color: 'white' }} 
       rightButtonBackgroundColor='#EA3788' 
       leftButtonBackgroundColor='#E56B70'/>
       </Box>
        </Box>
           
           
    <Box marginY={20}>
      
    <ButtonComponant  onPress={handleShopping} titleButton = "add to shopping" />
    </Box>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})