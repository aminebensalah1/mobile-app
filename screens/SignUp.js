import { View, Text, Button,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import InputComponant from '../componant/InputComponant'
import ButtonComponant from '../componant/ButtonComponant'

const SignUp = ({navigation}) => {
 const [inputs,setInputs]= useState({
  firstName:"",
  lastName:"",
  password:""


 })


 const handleChangeInputs = (text,name)=>{
  setInputs({...inputs,[name]:text})
 } 
  
 
  return (
    <View   flex={1} style={{backgroundColor:'#FFB000',padding:5,justifyContent:'center',alignItems:'center'}}>
      <Text>SignUp</Text>
      <InputComponant handleChangeInputs={handleChangeInputs}  style={styles.input} placeholder='firstName' name='firstName'  value={inputs.firstName}    />
      <InputComponant  handleChangeInputs={handleChangeInputs} style={styles.input} placeholder='LastName'  name='lastName' value= {inputs.lastName}  />
      <InputComponant  handleChangeInputs={handleChangeInputs} style={styles.input} placeholder='your password'  name='password' value= {inputs.password}  secureTextEntry={true} />

      <Text>{inputs.lastName} ***{inputs.password} </Text>
      < ButtonComponant titleButton='go to home' onPress={()=>navigation.navigate("drawerHome")} />
    </View>
  )
}  

const styles = StyleSheet.create({

    input:{
        width:200,
        height:30,
        color:'white',
        borderBottomWidth:0.5,
        padding:5,
        margin:10

    }

})

export default SignUp