import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Center } from 'native-base'

const CardsScreen = () => {
  return (
    <View flex={1} >
      <Center flex={1} bg="blue.100">
        <Text>cards</Text>
      </Center>
    </View>
  )
}

export default CardsScreen