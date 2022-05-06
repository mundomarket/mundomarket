
import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/index'

interface Estado{
  productos:any
  detail:any
  recommended:any
}
const initialState = { productos:[], detail:[],recommended:[] } as Estado


const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.GETPRODUCTS.fulfilled, (state, action) => {
      state.productos=action.payload
      
    })

    .addCase(actions.GETDETAIL.fulfilled, (state, action) => {
      state.detail=action.payload
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

    .addCase(actions.GETRECOMMENDED.fulfilled, (state, action) => {
      state.recommended=action.payload
      
    })


})


export default rootReducer
