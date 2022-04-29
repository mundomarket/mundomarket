import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
const api='http://localhost:3000'

export const GETPRODUCTS=createAsyncThunk('GET_PRODUCTS',async ()=>{
    const result=await axios(`${api}/products`)
    return result.data
})