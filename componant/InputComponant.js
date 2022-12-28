import { View, Text,TextInput } from 'react-native'
import React,{useState} from 'react'

const InputComponant = ({style,placeholder,handleChangeInputs,name,onChangeText,keyboardType,secureTextEntry}) => {
  const [valueInput,setValueInput]=useState('')

  const handleChange=(text)=>{
  console.log(text)
    setValueInput(text)
    handleChangeInputs(text,name)
  }
 
  return (
    <TextInput
          style={style}
          value={valueInput}
          name={name}
          placeholder={placeholder}
          onChangeText ={handleChange}
          secureTextEntry={secureTextEntry}

        />
  )
}

export default InputComponant


