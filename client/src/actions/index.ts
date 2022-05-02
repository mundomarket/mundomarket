import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
const api='http://localhost:3000'

export const GETPRODUCTS=createAsyncThunk('GET_PRODUCTS',async ()=>{
    const result=await axios(`${api}/products`)
    return result.data
})

export const GETDETAIL=createAsyncThunk('GET_DETAIL',async (id: string | undefined)=>{
    const result=await axios(`${api}/products/${id}`) 
    return result.data
})

export const GETSEARCHBYNAME=createAsyncThunk('GET_SEARCHNAME',async (name: string | undefined)=>{
    const result=await axios(`${api}/products?name=${name}`) 
    return result.data
})

export const GETSEARCHBYCATEGORY=createAsyncThunk('GET_SEARCHCAT',async (name: string | undefined)=>{
    const result=await axios(`${api}/products?filterName=category&filterOrder=${name?.toLocaleLowerCase()}&names=stock&sort=1`) 
    return result.data
})

