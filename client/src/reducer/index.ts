import { createAction, createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/index'


const initialState = { value: [] } 

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('2', (state, action) => {
      state.value=state.value
    })
})

export default rootReducer