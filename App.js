import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigators/AuthNavigator';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import {NativeBaseProvider}from'native-base'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import shoppingSlice from './store/shoppingSlice';

export const store = configureStore({
  reducer: {
    shoppingCart:shoppingSlice
  },
})




const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache()
});



export default function App() {
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
    <NavigationContainer>
    <NativeBaseProvider >
       <AuthNavigator/>
       </NativeBaseProvider>
  </NavigationContainer>
  </ApolloProvider>
  </Provider>
  );
}
