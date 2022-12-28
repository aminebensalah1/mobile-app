import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useQuery,gql } from "@apollo/client";
import {Pressable,ScrollView,Flex ,Image,Heading,Box, Input}from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector,useDispatch } from 'react-redux';










export const GET_POKEMONS = gql`
query {
    pokemons {
         
          
          results {
          
            url
            name
            image
            
          }
        }
      
    }
  
    
`;

const prices =[23,45,78,89,90,89,23,12,34,79,80,67,90,45,53,65,28,45,98,56]

const HomeScreen = ({navigation}) => {
  
  const { data , loading, error,} = useQuery(GET_POKEMONS);
  const [valueInput,setValueInput]=useState("")
  const [filterData,setFilterData] = useState([])
  const [commands,setCommands] = useState([])

  const {shoppingCart }= useSelector((state) => state.shoppingCart)
  const dispatch = useDispatch()
  

  

 useEffect(()=>{
  handleShearch()

 },[])
 const handleShearch = (text) => {
  setValueInput(text)  
}

console.log((shoppingCart))
// condition for choose data
  if(data){

  
   
    const myData = data.pokemons.results

 const Data= myData.map((product,idx)=>{    
         const nameProduct = product.name 
         return {...product,"price":prices[idx]}
  }) 
  let fof = Data;
  
  if(valueInput !== undefined){
    // console.log("kkk:" +  ddata.filter(user =>user.toLowerCase().split('')[0].includes(valueInput.toLowerCase())))
    let dd = Data.filter(user =>user.name.toLowerCase().split('')[0].includes(valueInput.toLowerCase()))
   
   fof = dd
   
  }
  
  
    return(   

     <SafeAreaView  >
       <Box flexDirection='row' alignItems="flex-start" background={'#FFB000'}>

      <Input value={valueInput} onChangeText={(text)=> handleShearch(text)} mx="3" borderRadius={50} bg={'amber.100'} placeholder="Search the product..." w="80%" />
      <Box>
        
      <Box margin={0} backgroundColor="red.500" borderRadius={50} width={7} h={7} >
            <Box alignItems='center' justifyContent='center'>
              <Text>{shoppingCart.length} </Text>
            </Box>
          </Box>
          <Icon disabled={()=>{shoppingCart.length > 0 ?false :true }} onPress={()=>{setCommands(shoppingCart)
             return dispatch(emtyShopping())}} name="cart-plus" size={30} color={shoppingCart.length > 0 ?"green": "white" } />
      </Box>
    </Box>
         
   <View style={{backgroundColor:'#FFB000'}} >
   <ScrollView marginTop={5} borderTopRadius={20} bg={'amber.100'} >
       <Flex  flexWrap='wrap' direction='row'
       justifyContent='space-between'
       px={6}

       >
       {fof.map((product,idx)=>{
       
return(
  <Pressable key={idx}   w="47%"
  bg='white'
  rounded="md"
  shadow={2}
  pt={0}
  my={3}
  pb={2}
  overflow='hidden'  
  onPress={()=>navigation.navigate('product',{product})}

   >

        <Image source={{uri: product.image}}   alt={product.name}
        w='full'
        h={24}
        resizeMode="contain"
        />
          <Box px={4}
          pt={1}>
              <Heading size="sm"
              bold>
                  ${product.price}
              </Heading>
              <Text fontSize={10}
              mt={1}
              isTruncated="full" >{product.name} </Text>

          </Box>

  </Pressable>
)
       })}
       </Flex>
        </ScrollView>
   </View>
     </SafeAreaView>
        
       
       
      )  
}
return (
 

   
    <Box >
        <Text>
            not data...
        </Text>
    </Box>
    
   
   
)

}

export default HomeScreen