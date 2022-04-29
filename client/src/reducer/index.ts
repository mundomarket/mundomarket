
import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/index'

interface Estado{
  productos:any
}
const initialState = { productos:[] } as Estado
/*
const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.GETPRODUCTS.fulfilled, (state, action) => {
      state.productos=action.payload
    })
})

export default rootReducer
*/

const initialStates = {
  products: [],

};


function rootReducer(state = initialStates, action:any) {
  
  switch (action.type) {

    
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };


  }
}

export default rootReducer;