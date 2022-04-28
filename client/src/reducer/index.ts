import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/index'

interface Estado{
  productos:any
}
const initialState = { productos:[] } as Estado

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.GETPRODUCTS.fulfilled, (state, action) => {
      state.productos=action.payload
    })
})

export default rootReducer