import { View, Text,Pressable,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const ButtonComponant = ({titleButton,onPress}) => {
const navigation = useNavigation()


  return (
    <Pressable  onPress={onPress} style={styles.button}>
      <Text style={styles.text }>{titleButton} </Text>
     
    </Pressable> 
  )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  })
export default ButtonComponant