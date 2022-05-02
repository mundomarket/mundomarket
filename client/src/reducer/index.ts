
import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/index'

interface Estado{
  productos:any
  detail:any
}
const initialState = { productos:[], detail:[] } as Estado


const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.GETPRODUCTS.fulfilled, (state, action) => {
      state.productos=action.payload
      
    })

    .addCase(actions.GETDETAIL.fulfilled, (state, action) => {
      state.detail=action.payload
      
      console.log("viendo",state.detail)
    })

    .addCase(actions.POSTPRODUCT.fulfilled, (state, action) => {
      state.productos=action.payload
    })

    .addCase(actions.GETSEARCHBYNAME.fulfilled, (state, action) => {
      state.productos=action.payload
      
    })

    .addCase(actions.GETSEARCHBYCATEGORY.fulfilled, (state, action) => {
      state.productos=action.payload
      
    })

})



export default rootReducer

/*
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
*/