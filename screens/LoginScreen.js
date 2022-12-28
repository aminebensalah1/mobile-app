import React, { useState } from 'react'
import { View, Text, Image,StyleSheet, ScrollView, TextInput,Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import ButtonComponant from '../componant/ButtonComponant';


const LoginScreen = ({navigation})=> {
  const [valueInputs,setValueInputs]=useState('')
   const handleChange = (text)=>{
    setValueInputs({text})
   

   }
 
    return (
      <LinearGradient colors={['#FFB000', '#FFB005', '#192f6a']} style={styles.body}>
      <ScrollView  >
        <View style={styles.container} >
       
        <Text  style={{ color:'white',fontSize:30}}>my application</Text>
        <View>
          <Text style={{marginLeft:30}}>Bensalah Amine</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <Text style={{color:'white',margin:50,fontSize:20}}>LOGIN HERE</Text>
       <View style={{paddingTop:'50%'}}>
        
       <TextInput
          style={styles.input}
          defaultValue={valueInputs}
          placeholder='enter you name'
          onChangeText={handleChange}
        />
        
          <TextInput
          style={styles.input}
          defaultValue=""
          placeholder='enter you password'
        />
        
        <ButtonComponant onPress={()=>navigation.navigate('SignUp')} titleButton='SignUp' />
       </View>
        </View>
      </ScrollView>
      </LinearGradient>

    )
  
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems:"center",
  },
 container: {
    marginTop:'20%',
    textAlign: 'center',
    fontWeight: 'bold',
    flex:1,
    margin: 10,
  },
  input :{

    marginBottom :20,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          color:'white',
          borderRadius:10,
          padding:5

          
  },
  
});

export default LoginScreen 
