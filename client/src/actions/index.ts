import axios from "axios"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { Orders } from "../components/NavBar/FilterMenu"
import { useNavigate } from "react-router-dom"
const api='http://localhost:3000'
//const api='https://mundomarket.herokuapp.com'




export const GETPRODUCTS=createAsyncThunk('GET_PRODUCTS',async ()=>{
    const result=await axios(`${api}/products`)
    return result.data
})

export const GETUSERS=createAsyncThunk('GET_USERS',async ()=>{
  const result=await axios(`${api}/users`)
  return result.data
})

export const GETORDERS=createAsyncThunk('GET_ORDERS',async ()=>{
  const result=await axios.get(`${api}/orders`)
  return result.data
})

export const CREATEORDER=createAsyncThunk('CREATE_ORDER',async (data:any)=>{
  const result=await axios.post(`${api}/orders`,data)
  return result.data._id

})

export const PAYORDER=createAsyncThunk('PAY_ORDER',async (data:any)=>{
  const result=await axios.post(`${api}/orders/pay`,data)
  return result.data

})


export const GETUSERPRODUCTS=createAsyncThunk('GET_USER_PRODUCTS',async (id: string | undefined)=>{
  const result=await axios(`${api}/products`)
  return result.data
})

export const GETDETAIL=createAsyncThunk('GET_DETAIL',async (id: string | undefined)=>{
    const result=await axios(`${api}/products/${id}`) 
    return result.data
})

export const GETORDER=createAsyncThunk('GET_ORDER',async (id: string | undefined)=>{
  const result=await axios.get(`${api}/orders/${id}`) 
  return result.data
})

export const POSTPRODUCT=createAsyncThunk('POST_PRODUCT',async (value: {} | undefined)=>{
  const result=await axios.post(`${api}/products`,value)
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

export const GETRECOMMENDED=createAsyncThunk('GET_RECOMMENDED',async (name: string | undefined)=>{
  const result=await axios(`${api}/products?filterName=category&filterOrder=${name?.toLocaleLowerCase()}&names=stock&sort=1`) 
  return result.data.splice(0,4)
})

export const GETORDENAMIENTOS=createAsyncThunk('GET_ORDENAMIENTOS',async (input:Orders)=>{
  return input
})

export const REGISTERUSER=createAsyncThunk('REGISTERUSER',async (input:{})=>{

  await axios.post(`http://localhost:3000/register/register`,input)

})

export const LOGINUSER=createAsyncThunk('LOGINUSER',async (input:{})=>{
  const login=await axios.post(`http://localhost:3000/login/login`,input)
  return login.data
})

export const LOGOUT=createAction('LOGOUT')

