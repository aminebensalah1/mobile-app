import { createSlice } from '@reduxjs/toolkit'
import { NavigationActions } from 'react-navigation';

const initialState = {
    shoppingCart:[]
}

export const shoppingSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addShopping: (state,action) => {
     
       const newCart = action.payload
       
       const newState = {...state}
       newState.shoppingCart.push(newCart)
      
    },
    emptyShopping:(state)=>{
        return state.shoppingCart = []
        
    },
     deleteRow : (state,action)=>{
      
      const filterm = state.shoppingCart.filter((item,idx)=>idx !== action.payload)
      console.log(action.payload)
      return {...state, shoppingCart:filterm}
     
    
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { addShopping,deleteRow } = shoppingSlice.actions

export default shoppingSlice.reducer