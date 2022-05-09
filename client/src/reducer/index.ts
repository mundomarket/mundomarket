
import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/index'

interface Estado{
  isLogged:boolean,
  productos:any
  copiaproductos:any
  detail:any
  recommended:any
}
const initialState = { productos:[], detail:[],recommended:[] } as Estado


const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.GETPRODUCTS.fulfilled, (state, action) => {
      state.productos=action.payload
      state.copiaproductos=action.payload
      
    })

    .addCase(actions.GETDETAIL.fulfilled, (state, action) => {
      state.detail=action.payload
    })

    .addCase(actions.POSTPRODUCT.fulfilled, (state, action) => {
      state.productos=action.payload
    })

    .addCase(actions.GETSEARCHBYNAME.fulfilled, (state, action) => {
      state.productos=action.payload
      state.copiaproductos=action.payload
      
    })

    .addCase(actions.GETSEARCHBYCATEGORY.fulfilled, (state, action) => {
      state.productos=action.payload
      
    })

    .addCase(actions.GETRECOMMENDED.fulfilled, (state, action) => {
      state.recommended=action.payload
      
    })

    .addCase(actions.GETORDENAMIENTOS.fulfilled, (state, action) => {
      console.log(action.payload)
      let filtrado=[]
      if(action.payload.catg!==''){filtrado=state.copiaproductos.filter((e:any)=>e.category===action.payload.catg)}
      else{
        filtrado=state.copiaproductos}
      
      if(action.payload.preciomin){filtrado=filtrado.filter((e:any)=>e.price>action.payload.preciomin)}

      if(action.payload.preciomax){filtrado=filtrado.filter((e:any)=>e.price<action.payload.preciomax)}

      if(action.payload.rating!==0){filtrado=filtrado.filter((e:any)=>e.rating===action.payload.rating)}

      state.productos=filtrado
    })

    .addCase(actions.REGISTERUSER.fulfilled, (state, action) => {
      
    })
    .addCase(actions.LOGINUSER.fulfilled, (state, action) => {
        state.isLogged=true
    })

})


export default rootReducer
